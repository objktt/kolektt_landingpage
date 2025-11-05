"use client";

import { useEffect } from "react";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/seo";

export default function SchemaMarkup() {
  useEffect(() => {
    // This component only renders structured data in the head
    // The actual scripts are rendered server-side via metadata
  }, []);

  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();

  if (typeof document === "undefined") {
    return null;
  }

  // Render scripts in document head
  useEffect(() => {
    // Add Organization Schema
    const orgScript = document.createElement("script");
    orgScript.type = "application/ld+json";
    orgScript.textContent = JSON.stringify(organizationSchema);
    document.head.appendChild(orgScript);

    // Add Website Schema
    const websiteScript = document.createElement("script");
    websiteScript.type = "application/ld+json";
    websiteScript.textContent = JSON.stringify(websiteSchema);
    document.head.appendChild(websiteScript);

    return () => {
      // Cleanup on unmount
      if (orgScript.parentNode) {
        document.head.removeChild(orgScript);
      }
      if (websiteScript.parentNode) {
        document.head.removeChild(websiteScript);
      }
    };
  }, [organizationSchema, websiteSchema]);

  return null;
}
