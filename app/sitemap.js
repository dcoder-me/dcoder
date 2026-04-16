const BASE_URL = "https://dcoder.me";

/**
 * @returns {import("next").MetadataRoute.Sitemap}
 */
export default function sitemap() {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
