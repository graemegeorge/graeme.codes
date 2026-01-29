import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://graeme.codes";
const siteName = "Graeme George - Senior Frontend Engineer";
const defaultDescription =
  "Senior Frontend Engineer specializing in React, Next.js, and TypeScript. Based in London, UK. Available for remote opportunities. Building exceptional digital experiences with modern web technologies.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | React & Next.js Expert | London, UK`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "London Frontend Developer",
    "UK Frontend Engineer",
    "Remote Frontend Developer",
    "React Expert",
    "Next.js Expert",
    "Web Developer London",
    "Frontend Engineer UK",
    "Senior Frontend Engineer",
    "UI/UX Developer",
    "JavaScript Developer",
    "Frontend Consultant",
  ],
  authors: [{ name: "Graeme George" }],
  creator: "Graeme George",
  publisher: "Graeme George",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: siteName,
    title: `${siteName} | React & Next.js Expert | London, UK`,
    description: defaultDescription,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Graeme George - Senior Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | React & Next.js Expert`,
    description: defaultDescription,
    creator: "@graemegeorge1",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Graeme George",
    jobTitle: "Senior Frontend Engineer",
    url: siteUrl,
    sameAs: [
      "https://linkedin.com/in/graeme-george",
      "https://github.com/graemegeorge",
      "https://instagram.com/graemegeorge1",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "GB",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Web Development",
      "UI/UX Design",
      "Tailwind CSS",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Software Engineering",
    },
    email: "graemelgeorge@gmail.com",
    image: `${siteUrl}/og-image.png`,
  };

  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const storedTheme = localStorage.getItem('theme');
                if (storedTheme === 'light' || storedTheme === 'dark') {
                  document.documentElement.setAttribute('data-theme', storedTheme);
                } else {
                  try {
                    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    document.documentElement.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
                  } catch {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
