import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { TREATMENTS_DATA, TreatmentDetail } from "@/constants/treatmentsData";
import { DR_ANKIT_CV } from "@/constants/doctorCv";
import { DetailHero } from "@/components/treatments/detail/DetailHero";
import { ClinicalOverview } from "@/components/treatments/detail/ClinicalOverview";
import { SymptomsAndCauses } from "@/components/treatments/detail/SymptomsAndCauses";
import { DiagnosisAndOptions } from "@/components/treatments/detail/DiagnosisAndOptions";
import { ProcedureBreakdown } from "@/components/treatments/detail/ProcedureBreakdown";
import { RecoveryMilestones } from "@/components/treatments/detail/RecoveryMilestones";
import { DetailFaq } from "@/components/treatments/detail/DetailFaq";
import { RelatedTreatments } from "@/components/treatments/detail/RelatedTreatments";
import { DetailCta } from "@/components/treatments/detail/DetailCta";

interface TreatmentDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(TREATMENTS_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: TreatmentDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment: TreatmentDetail | undefined = TREATMENTS_DATA[slug];

  if (!treatment) {
    return {
      title: "Treatment Not Found - Arthrogenix",
      description: "The requested orthopaedic treatment page could not be found.",
    };
  }

  return {
    title: `${treatment.title} in Jaipur | Dr. Ankit Jaipal`,
    description: `${treatment.shortDescription} Consult Dr. Ankit Jaipal, Consultant Orthopaedics at Sevayatan Hospital, Jaipur.`,
    alternates: {
      canonical: `https://arthrogenix.in/treatments/${slug}`,
    },
    openGraph: {
      title: `${treatment.title} | Dr. Ankit Jaipal Orthopaedics Jaipur`,
      description: treatment.shortDescription,
      url: `https://arthrogenix.in/treatments/${slug}`,
      siteName: "Arthrogenix Orthopaedic Clinic",
      images: [
        {
          url: treatment.image,
          width: 1200,
          height: 630,
          alt: treatment.imageAlt,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${treatment.title} | Dr. Ankit Jaipal`,
      description: treatment.shortDescription,
      images: [treatment.image],
    },
  };
}

export default async function TreatmentDetailPage({
  params,
}: TreatmentDetailProps) {
  const { slug } = await params;
  const treatment: TreatmentDetail | undefined = TREATMENTS_DATA[slug];

  if (!treatment) {
    notFound();
  }

  // Schema.org MedicalProcedure structured data
  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: treatment.title,
    description: treatment.shortDescription,
    procedureType: "Surgical and Non-Surgical Orthopaedic Treatment",
    howPerformed: treatment.procedureOverview.summary,
    performer: {
      "@type": "Physician",
      name: DR_ANKIT_CV.personalInfo.name,
      medicalSpecialty: "Orthopedic",
      alumniOf: "SMS Medical College Jaipur",
    },
    provider: {
      "@type": "MedicalOrganization",
      name: "Arthrogenix & Sevayatan Multispeciality Hospital",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
    },
  };

  return (
    <>
      <Script
        id="medical-procedure-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }}
      />

      <article className="min-h-screen bg-white">
        {/* 1. Hero with Breadcrumb & Quick Badges */}
        <DetailHero treatment={treatment} />

        {/* 2. Clinical Overview & Prominent Medical Disclaimer */}
        <ClinicalOverview treatment={treatment} />

        {/* 3. Symptoms & Causes */}
        <SymptomsAndCauses treatment={treatment} />

        {/* 4. Diagnostic Evaluation & Treatment Options (Non-Surgical vs Surgical) */}
        <DiagnosisAndOptions treatment={treatment} />

        {/* 5. When Surgery is Considered & Step-by-Step Procedure */}
        <ProcedureBreakdown treatment={treatment} />

        {/* 6. Recovery Milestones with Individualized Biological Healing Disclaimer */}
        <RecoveryMilestones treatment={treatment} />

        {/* 7. Treatment-Specific Frequently Asked Questions */}
        <DetailFaq faqs={treatment.faqs} treatmentTitle={treatment.title} />

        {/* 8. Related Treatments Navigation */}
        <RelatedTreatments relatedSlugs={treatment.relatedTreatmentSlugs} />

        {/* 9. Direct Priority Consultation CTA with Dr. Ankit Jaipal */}
        <DetailCta treatmentTitle={treatment.title} />
      </article>
    </>
  );
}
