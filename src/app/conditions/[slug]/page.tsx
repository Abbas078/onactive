import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CONDITIONS_DATA, ConditionDetail } from "@/constants/conditionsData";
import { ConditionDetailHero } from "@/components/conditions/detail/ConditionDetailHero";
import { WhatIsCondition } from "@/components/conditions/detail/WhatIsCondition";
import { ConditionSymptomsCauses } from "@/components/conditions/detail/ConditionSymptomsCauses";
import { ConditionEvaluation } from "@/components/conditions/detail/ConditionEvaluation";
import { ConditionTreatmentOptions } from "@/components/conditions/detail/ConditionTreatmentOptions";
import { WhenSurgeryNeeded } from "@/components/conditions/detail/WhenSurgeryNeeded";
import { ConditionRelatedTreatments } from "@/components/conditions/detail/ConditionRelatedTreatments";
import { ConditionFaq } from "@/components/conditions/detail/ConditionFaq";
import { ConditionCta } from "@/components/conditions/detail/ConditionCta";

interface ConditionDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Slug Aliases Map for backward compatibility
const SLUG_ALIASES: Record<string, string> = {
  "acl-meniscus-tear": "acl-pcl-injuries",
  "knee-osteoarthritis": "osteoarthritis",
  "cartilage-ligament-injuries": "cartilage-injuries",
};

function resolveCondition(slug: string): ConditionDetail | null {
  const resolvedSlug = SLUG_ALIASES[slug] || slug;
  return CONDITIONS_DATA[resolvedSlug] || null;
}

export function generateStaticParams() {
  const primarySlugs = Object.keys(CONDITIONS_DATA).map((slug) => ({ slug }));
  const aliasSlugs = Object.keys(SLUG_ALIASES).map((slug) => ({ slug }));
  return [...primarySlugs, ...aliasSlugs];
}

export async function generateMetadata({
  params,
}: ConditionDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const condition = resolveCondition(slug);

  if (!condition) {
    return {
      title: "Condition Not Found | Arthrogenix",
    };
  }

  const canonicalUrl = `https://arthrogenix.in/conditions/${condition.slug}`;

  return {
    title: `${condition.title} | Symptoms, Evaluation & Treatment | Dr. Ankit Jaipal`,
    description: `${condition.shortDescription} Learn about causes, MRI diagnosis, non-surgical management, and surgical criteria with Dr. Ankit Jaipal in Jaipur.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${condition.title} | Dr. Ankit Jaipal Jaipur`,
      description: condition.shortDescription,
      url: canonicalUrl,
      siteName: "Arthrogenix - Dr. Ankit Jaipal",
      locale: "en_IN",
      type: "article",
      images: [
        {
          url: condition.image,
          width: 1200,
          height: 630,
          alt: condition.imageAlt,
        },
      ],
    },
  };
}

export default async function ConditionDetailPage({
  params,
}: ConditionDetailPageProps) {
  const { slug } = await params;
  const condition = resolveCondition(slug);

  if (!condition) {
    notFound();
  }

  // Schema.org MedicalCondition structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: condition.title,
    description: condition.shortDescription,
    possibleTreatment: [
      ...condition.treatmentApproaches.nonSurgical.map((t) => ({
        "@type": "MedicalTherapy",
        name: t.title,
        description: t.description,
      })),
      ...condition.treatmentApproaches.surgical.map((s) => ({
        "@type": "MedicalProcedure",
        name: s.title,
        description: s.description,
      })),
    ],
    signOrSymptom: condition.commonSymptoms.map((s) => ({
      "@type": "MedicalSignOrSymptom",
      name: s,
    })),
    riskFactor: condition.causesAndRiskFactors.map((c) => ({
      "@type": "MedicalRiskFactor",
      name: c,
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero with Breadcrumb Navigation */}
      <ConditionDetailHero condition={condition} />

      {/* 2. What is this Condition & Anatomy */}
      <WhatIsCondition condition={condition} />

      {/* 3. Symptoms, Causes & Risk Factors */}
      <ConditionSymptomsCauses condition={condition} />

      {/* 4. Diagnostic & Imaging Evaluation */}
      <ConditionEvaluation condition={condition} />

      {/* 5. Conservative vs Surgical Pathways */}
      <ConditionTreatmentOptions condition={condition} />

      {/* 6. When Surgery Is Considered */}
      <WhenSurgeryNeeded condition={condition} />

      {/* 7. Related Treatments & Surgeries Links */}
      <ConditionRelatedTreatments condition={condition} />

      {/* 8. Frequently Asked Questions */}
      <ConditionFaq condition={condition} />

      {/* 9. Consultation CTA & Medical Disclaimer */}
      <ConditionCta condition={condition} />
    </main>
  );
}
