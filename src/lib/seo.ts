import { siteConfig } from "@/config/site";

export interface SchemaOrg {
  "@context": string;
  "@type": string;
  [key: string]: any;
}

/**
 * Organization schema for Google Knowledge Graph
 */
export function getOrganizationSchema(): SchemaOrg {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: siteConfig.ogImage,
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.instagram,
      siteConfig.links.github,
    ].filter(Boolean),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      url: `${siteConfig.url}/contact`,
    },
  };
}

/**
 * Website schema for Google Search
 */
export function getWebsiteSchema(): SchemaOrg {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Product schema for vinyl collection service
 */
export function getProductSchema(): SchemaOrg {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: siteConfig.name,
    description: siteConfig.description,
    image: siteConfig.ogImage,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "KRW",
      availability: "https://schema.org/InStock",
    },
  };
}

/**
 * Breadcrumb schema for navigation
 */
export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): SchemaOrg {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * FAQ schema for search results
 */
export function getFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): SchemaOrg {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
