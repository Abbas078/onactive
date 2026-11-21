import { MetadataRoute } from "next";
import { TREATMENTS_DATA } from "@/constants/treatmentsData";
import { CONDITIONS_DATA } from "@/constants/conditionsData";
import { BLOG_POSTS } from "@/constants/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://arthrogenix.in";
  const now = new Date();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/treatments`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/conditions`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/costs-clinics`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/book-appointment`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Treatment detail pages
  const treatmentRoutes: MetadataRoute.Sitemap = Object.values(TREATMENTS_DATA).map((t) => ({
    url: `${baseUrl}/treatments/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // Condition detail pages
  const conditionRoutes: MetadataRoute.Sitemap = Object.values(CONDITIONS_DATA).map((c) => ({
    url: `${baseUrl}/conditions/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Blog article detail pages
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [
    ...staticRoutes,
    ...treatmentRoutes,
    ...conditionRoutes,
    ...blogRoutes,
  ];
}
