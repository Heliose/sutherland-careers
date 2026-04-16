import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav/Nav";
import { Footer } from "@/components/Footer/Footer";
import { PreHeaderBar } from "@/components/PreHeaderBar/PreHeaderBar";
import { FraudBanner } from "@/components/FraudBanner/FraudBanner";
import { CookieConsent } from "@/components/CookieConsent/CookieConsent";
import { ChatBubble } from "@/components/ChatBubble/ChatBubble";
import { OrganizationJsonLd } from "@/components/StructuredData/StructuredData";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-editorial",
  axes: ["SOFT", "WONK", "opsz"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://careers.sutherlandglobal.com"),
  title: {
    default:
      "Sutherland Careers — Build a career that leads in the digital era",
    template: "%s · Sutherland Careers",
  },
  description:
    "Explore careers at Sutherland. Partner with iconic brands, grow across industries, and work on projects that shape the digital era.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Sutherland Careers",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fraunces.variable}>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <OrganizationJsonLd />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <PreHeaderBar />
        <FraudBanner />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <CookieConsent />
        <ChatBubble />
      </body>
    </html>
  );
}
