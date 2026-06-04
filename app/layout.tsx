import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteData, siteUrl } from "@/lib/site-data";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap"
});

const title = "Med Ambulances | Haut-Rhin vers soins à Strasbourg";
const description =
  "Ambulance et VSL depuis les villes et villages du Haut-Rhin vers les hôpitaux, cliniques et centres de soins de Strasbourg. Appelez le 03.89.50.60.69.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [...siteData.keywords],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: siteData.name,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/assets/ambulance.jpg",
        width: 960,
        height: 640,
        alt: "Véhicule de transport médical Med Ambulances"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/ambulance.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

function buildLocalBusinessJsonLd() {
  const localBusiness: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: siteData.name,
    description: siteData.description,
    url: siteUrl,
    telephone: siteData.phoneE164,
    image: `${siteUrl}/assets/ambulance.jpg`,
    priceRange: "$$",
    openingHours: siteData.openingHours,
    areaServed: siteData.areaServed.map((area) => ({
      "@type": "Place",
      name: area
    })),
    makesOffer: siteData.services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        serviceType: "Transport médical"
      }
    }))
  };

  if (siteData.address.addressLocality || siteData.address.streetAddress) {
    localBusiness.address = {
      "@type": "PostalAddress",
      streetAddress: siteData.address.streetAddress,
      postalCode: siteData.address.postalCode,
      addressLocality: siteData.address.addressLocality,
      addressRegion: siteData.address.addressRegion,
      addressCountry: siteData.address.addressCountry
    };
  }

  if (siteData.geo.latitude && siteData.geo.longitude) {
    localBusiness.geo = {
      "@type": "GeoCoordinates",
      latitude: siteData.geo.latitude,
      longitude: siteData.geo.longitude
    };
  }

  if (siteData.siret) {
    localBusiness.identifier = siteData.siret;
  }

  return localBusiness;
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildLocalBusinessJsonLd())
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
