import { jobs } from "@/lib/jobs";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sutherland Global Services",
    url: "https://www.sutherlandglobal.com",
    logo: "https://careers.sutherlandglobal.com/logo.svg",
    sameAs: [
      "https://www.linkedin.com/company/sutherland-global-services",
      "https://twitter.com/SutherlandCorp",
      "https://www.facebook.com/SutherlandGlobalServices",
    ],
    description:
      "Sutherland is a digital transformation company focused on delivering exceptionally engineered experiences for customers and employees.",
    foundingDate: "1986",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 30000,
      maxValue: 40000,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "1160 Pittsford-Victor Road",
      addressLocality: "Pittsford",
      addressRegion: "NY",
      postalCode: "14534",
      addressCountry: "US",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function JobPostingJsonLd() {
  const items = jobs.slice(0, 10).map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    identifier: {
      "@type": "PropertyValue",
      name: "Sutherland Global Services",
      value: job.id,
    },
    datePosted: new Date(
      Date.now() - job.postedDays * 86400000
    ).toISOString().split("T")[0],
    hiringOrganization: {
      "@type": "Organization",
      name: "Sutherland Global Services",
      sameAs: "https://www.sutherlandglobal.com",
      logo: "https://careers.sutherlandglobal.com/logo.svg",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.city,
        addressCountry: job.country,
      },
    },
    employmentType: job.workType === "Full-time" ? "FULL_TIME" : job.workType === "Part-time" ? "PART_TIME" : "CONTRACTOR",
    ...(job.workModel === "Remote"
      ? { jobLocationType: "TELECOMMUTE" }
      : {}),
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: job.currency,
      value: {
        "@type": "QuantitativeValue",
        minValue: job.salaryMin,
        maxValue: job.salaryMax,
        unitText: "YEAR",
      },
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: job.country,
    },
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(items) }}
    />
  );
}
