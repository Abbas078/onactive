import { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return [
    { slug: "recovering-from-acl-tear" },
    { slug: "when-to-see-orthopaedic-surgeon" },
    { slug: "shoulder-rotator-cuff-exercises" },
  ];
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const formattedTitle = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `${formattedTitle} - Arthrogenix Blog`,
    description: `Read Dr. Ankit Jaipal's orthopaedic insights on ${formattedTitle}.`,
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const formattedTitle = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <PlaceholderPage
      title={formattedTitle}
      category="Blog Article"
      phaseNumber={8}
      description={`Medical article detailing clinical recommendations, exercise guidelines, and recovery protocols for ${formattedTitle}.`}
      upcomingFeatures={[
        "Reviewed and authored by Dr. Ankit Jaipal",
        "Interactive table of contents and reading progress",
        "Clinical references and patient safety precautions",
        "Appointment booking widget for immediate follow-up",
      ]}
    />
  );
}

