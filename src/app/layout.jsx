import './globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#191628',
};

export const metadata = {
  title: "Hostayy | 1, 2 & 3 BHK Serviced Apartments Near Yashobhoomi (IICC) Dwarka & Delhi — Long Term Stays",
  description: "Book fully furnished 1, 2 & 3 BHK serviced apartments near Yashobhoomi (IICC) Convention Centre (Sector 25 Dwarka) and IGI Airport Delhi. Tailored for corporate executives, exhibition delegates, and long-term monthly stays with modern modular kitchens, 300 Mbps Wi-Fi, and 0% brokerage.",
  keywords: "serviced apartments near Yashobhoomi, Yashobhoomi IICC Dwarka accommodation, long term stays Delhi NCR, 1 BHK serviced apartment Dwarka, 2 BHK corporate stay Yashobhoomi, 3 BHK furnished apartment near IGI airport, monthly rental Dwarka Sector 23, corporate housing Yashobhoomi, exhibition stay Dwarka Sector 25, executive serviced residences Delhi, Hostayy long term stays, furnished apartments for rent Dwarka, serviced flats near Yashobhoomi metro, monthly corporate stays Delhi, Hostayy Hospitality",
  metadataBase: new URL('https://hostayy.com'),
  icons: {
    icon: '/assets/images/hostayy-logo-transparent.png',
    apple: '/assets/images/hostayy-logo-transparent.png',
  },
  openGraph: {
    title: "Hostayy — 1, 2 & 3 BHK Serviced Apartments Near Yashobhoomi (IICC) Dwarka",
    description: "Feel like home in Delhi NCR. Fully furnished 1, 2, and 3 BHK serviced apartments for long-term and monthly corporate stays near Yashobhoomi IICC and IGI Airport.",
    url: "https://hostayy.com",
    siteName: "Hostayy",
    images: [
      {
        url: "/assets/images/hostayy-banner.png",
        width: 1024,
        height: 512,
        alt: "Hostayy Serviced Apartments near Yashobhoomi IICC Dwarka",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hostayy — 1, 2 & 3 BHK Serviced Apartments Near Yashobhoomi (IICC)",
    description: "Fully furnished serviced apartments in Dwarka Sector 23 with modular kitchens, 300 Mbps Wi-Fi, and 0% brokerage for monthly & long-term stays.",
    images: ["/assets/images/hostayy-banner.png"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ApartmentComplex", "LodgingBusiness"],
        "@id": "https://hostayy.com/#organization",
        "name": "Hostayy Serviced Apartments Near Yashobhoomi",
        "url": "https://hostayy.com",
        "logo": "https://hostayy.com/assets/images/hostayy-logo-transparent.png",
        "image": "https://hostayy.com/assets/images/hostayy-banner.png",
        "description": "Premium 1, 2, and 3 BHK fully furnished serviced residences in Dwarka Sector 23, located 3 minutes from Yashobhoomi (IICC) Convention Centre and 10 minutes from IGI Airport. Tailored for corporate executives, exhibition attendees, and long-term monthly stays.",
        "telephone": "+91-92176-80108",
        "email": "Hello@hostayy.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Block A, Dwarka Sector 23 (Near Yashobhoomi IICC)",
          "addressLocality": "Dwarka, New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110077",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.5615",
          "longitude": "77.0504"
        },
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Fully Equipped Modular Kitchen", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "300 Mbps Enterprise Mesh Wi-Fi", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Daily Housekeeping", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "100% Power Backup", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Proximity to Yashobhoomi IICC (3 Mins)", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Zero Brokerage", "value": true }
        ]
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
