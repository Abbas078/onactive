import { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

interface ConditionDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return [
    { slug: "acl-meniscus-tear" },
    { slug: "rotator-cuff-tear" },
    { slug: "shoulder-dislocation" },
    { slug: "knee-osteoarthritis" },
    { slug: "cartilage-ligament-injuries" },
  ];
}

export async function generateMetadata({
  params,
}: ConditionDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const formattedTitle = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `${formattedTitle} - Condition Guide`,
    description: `Understand causes, clinical symptoms, MRI diagnosis, and proven treatment pathways for ${formattedTitle}.`,
  };
}

export default async function ConditionDetailPage({
  params,
}: ConditionDetailProps) {
  const { slug } = await params;
  const formattedTitle = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <PlaceholderPage
      title={formattedTitle}
      category="Condition Guide"
      phaseNumber={6}
      description={`Medical insights on ${formattedTitle}: understanding signs of ligament or joint damage, when to seek specialist evaluation, and non-surgical vs surgical treatment options.`}
      upcomingFeatures={[
        "Common symptoms and how the injury occurs",
        "Clinical examination and MRI/imaging evaluation",
        "Conservative management vs. surgical indications",
        "Consultation scheduling with Dr. Ankit Jaipal",
      ]}
    />
  );
}

