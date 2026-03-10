import type { Metadata } from "next";
import ConditionalLayout from "./conditional-layout/conditionalLayout";
import { Lexend } from "next/font/google";
import "../styles/globals.css";

const lexend = Lexend({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ALCO CMS Website",
  description: "SEO Friendly CMS Website built with Next.js",
  // // Canonical
  //   alternates: { canonical: 'https://ai-pro-resume-next.vercel.app/' },
  //   // OG Metas
  //   openGraph: {
  //     title: "",
  //     description: "",
  //     url: 'https://ai-pro-resume-next.vercel.app/',
  //     siteName: 'Ai Pro Resume',
  //     locale: 'en_US',
  //     type: 'website',
  //   },
  //   //===== No-Index =====
  //   robots: {
  //     index: false,
  //     follow: false,
  //     googleBot: {
  //       index: false,
  //       follow: false,
  //       noimageindex: false,
  //       'max-snippet': -1,
  //       'max-video-preview': -1,
  //       'max-image-preview': 'large',
  //     },
  //   }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <ConditionalLayout>
          <main className="pt-[72px]">{children}</main>
        </ConditionalLayout>
      </body>
    </html>
  );
}