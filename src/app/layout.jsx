import './globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#191628',
};

export const metadata = {
  title: "Hostayy | Hospitality, Managed Better — Luxury Stays & Property Management in Delhi",
  description: "Curated boutique private residences in South Delhi and Dwarka. Direct VIP booking rates with zero platform commissions. Managed by Mohit Chaudhary (+91 9217680108).",
  keywords: "Hostayy, property management company in Delhi, Airbnb property management in Delhi, short-term rental management, serviced apartments in Dwarka, stays near Yashobhoomi IICC, accommodation near IGI Airport, holiday home management, Velora by Hostayy, Verde by Hostayy, Azura by Hostayy, Mohit Chaudhary",
  metadataBase: new URL('https://hostayy.com'),
  icons: {
    icon: '/assets/images/hostayy-logo-transparent.png',
    apple: '/assets/images/hostayy-logo-transparent.png',
  },
  openGraph: {
    title: "Hostayy — (feel like home) | Luxury Residences Delhi NCR",
    description: "Feel like home for guests. Turnkey luxury stays and boutique residences in South Delhi and Delhi NCR.",
    url: "https://hostayy.com",
    siteName: "Hostayy",
    images: [
      {
        url: "/assets/images/hostayy-banner.png",
        width: 1024,
        height: 512,
        alt: "Hostayy (feel like home) — Luxury Residences",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hostayy — (feel like home)",
    description: "Curated luxury residences in South Delhi with 5-star hotel care.",
    images: ["/assets/images/hostayy-banner.png"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LodgingBusiness",
        "@id": "https://hostayy.com/#organization",
        "name": "Hostayy",
        "url": "https://hostayy.com",
        "logo": "https://hostayy.com/assets/images/logo/hostayy-banner-wide.png",
        "image": "https://hostayy.com/assets/images/logo/hostayy-banner.png",
        "description": "Boutique private villa rentals, botanical estates, and premier turnkey short-term rental property management in Delhi NCR.",
        "telephone": "+91-92176-80108",
        "email": "C.mohit@hostayy.com",
        "priceRange": "₹5,500 - ₹7,000",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Block A, Dwarka Sector 23",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110077",
          "addressCountry": "IN"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap" 
          rel="stylesheet" 
        />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
