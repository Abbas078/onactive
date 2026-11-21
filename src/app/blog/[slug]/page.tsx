import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { BLOG_POSTS } from "@/constants/blogData";
import { ArticleHero } from "@/components/blog/detail/ArticleHero";
import { ArticleTableOfContents } from "@/components/blog/detail/ArticleTableOfContents";
import { ArticleContent } from "@/components/blog/detail/ArticleContent";
import { ArticleSocialShare } from "@/components/blog/detail/ArticleSocialShare";
import { ArticleRelatedLinks } from "@/components/blog/detail/ArticleRelatedLinks";
import { ArticleRelatedPosts } from "@/components/blog/detail/ArticleRelatedPosts";
import { AppointmentCtaSection } from "@/components/home/AppointmentCtaSection";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Arthrogenix Blog",
    };
  }

  const siteUrl = "https://arthrogenix.in";
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | Arthrogenix Educational Guides`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${post.title} | Arthrogenix`,
      description: post.excerpt,
      url: canonicalUrl,
      siteName: "Arthrogenix - Dr. Ankit Jaipal",
      type: "article",
      publishedTime: post.publishDate,
      authors: ["Arthrogenix Editorial Board"],
      locale: "en_IN",
      images: [
        {
          url: `${siteUrl}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${siteUrl}${post.image}`],
    },
    keywords: [
      post.category,
      "Dr Ankit Jaipal",
      "Arthrogenix Jaipur",
      "Orthopaedic Patient Guide",
      "Knee Surgery Jaipur",
      "Joint Health",
    ],
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const siteUrl = "https://arthrogenix.in";
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;

  // Structured Data (JSON-LD) for SEO
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [`${siteUrl}${post.image}`],
    datePublished: "2024-11-01",
    dateModified: "2024-11-20",
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: siteUrl,
    },
    publisher: {
      "@type": "MedicalOrganization",
      name: "Arthrogenix - Dr. Ankit Jaipal",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    about: {
      "@type": "MedicalCondition",
      name: post.category,
    },
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.category,
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: post.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      {/* Hero Header */}
      <ArticleHero post={post} />

      {/* Main Content Body */}
      <div className="py-12 sm:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Table of Contents & Sticky Sharing (Desktop) */}
            <aside className="hidden lg:block lg:col-span-4 space-y-6">
              <ArticleTableOfContents items={post.tableOfContents} />
              <ArticleSocialShare title={post.title} slug={post.slug} />
            </aside>

            {/* Right Column: Article Content & Internal Links */}
            <div className="lg:col-span-8 space-y-10">
              <ArticleContent
                sections={post.sections}
                featuredImage={post.image}
                featuredImageAlt={post.imageAlt}
              />

              {/* Mobile Social Sharing */}
              <div className="block lg:hidden">
                <ArticleSocialShare title={post.title} slug={post.slug} />
              </div>

              {/* Related Treatments and Conditions */}
              <ArticleRelatedLinks
                relatedTreatments={post.relatedTreatments}
                relatedConditions={post.relatedConditions}
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Related Blog Posts */}
      <div className="bg-[#F5F8FB]">
        <Container>
          <ArticleRelatedPosts
            currentSlug={post.slug}
            relatedSlugs={post.relatedArticleSlugs}
          />
        </Container>
      </div>

      {/* Bottom Consultation CTA */}
      <AppointmentCtaSection />
    </main>
  );
}
