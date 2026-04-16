import type { Metadata } from "next";
import { JobPostingJsonLd } from "@/components/StructuredData/StructuredData";

export const metadata: Metadata = {
  title: "Search jobs — Sutherland Careers",
  description:
    "Browse 1,427+ open roles across customer experience, technology, analytics, and more. Filter by location, work model, and category.",
};

export default function JobResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JobPostingJsonLd />
      {children}
    </>
  );
}
