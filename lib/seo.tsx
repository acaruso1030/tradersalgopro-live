export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
}: Metadata & {
  canonicalUrlRelative?: string;
  extraTags?: Record<string, any>;
} = {}) => {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : `https://${config.domainName || "tradersalgopro.com"}/`;

  let safeUrl = undefined;
  try {
    safeUrl = new URL(baseUrl);
  } catch (e) {
    console.warn("⚠️ Invalid metadataBase URL:", baseUrl);
  }

  return {
    title: title || config.appName,
    description: description || config.appDescription,
    keywords: keywords || [config.appName],
    applicationName: config.appName,

    metadataBase: safeUrl,

    openGraph: {
      title: openGraph?.title || config.appName,
      description: openGraph?.description || config.appDescription,
      url: openGraph?.url || `https://${config.domainName || "tradersalgopro.com"}/`,
      siteName: openGraph?.title || config.appName,
      locale: "en_US",
      type: "website",
    },

    twitter: {
      title: openGraph?.title || config.appName,
      description: openGraph?.description || config.appDescription,
      card: "summary_large_image",
      creator: "@marc_louvion",
    },

    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),

    ...extraTags,
  };
};
