import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Research by Benji from Appcubic",
  description:
    "Benji's Scientific Research in Analytical Chemsitry for AppCubic, appcubic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-FHBQWLC1D4" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-FHBQWLC1D4');
        `}
        </Script>

        {/* <Script>{`if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }`}</Script> */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
