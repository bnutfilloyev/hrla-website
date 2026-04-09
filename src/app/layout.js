import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "HRLA - Oʻzbekistonning Birinchi HR Konferensiyasi",
  description: "Oʻzbekiston HR tizimini rivojlantirishga qaratilgan eng yirik maydon.",
  openGraph: {
    title: "HRLA - Oʻzbekistonning Birinchi HR Konferensiyasi",
    description: "Oʻzbekistonning eng ilgʻor HR mutaxassislari, top-menejerlar va biznes egalarini birlashtiruvchi markaziy konferensiya.",
    url: "https://hrla-website.vercel.app",
    siteName: "HRLA Conference",
    images: [{ url: "/hrla-green-logo.png", width: 800, height: 800 }],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HRLA - Oʻzbekistonning Birinchi HR Konferensiyasi",
    description: "Oʻzbekistonning eng ilgʻor HR mutaxassislari, top-menejerlar va biznes egalarini birlashtiruvchi markaziy konferensiya.",
    images: ["/hrla-green-logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <head>
        <link rel="icon" href="/hrla-dark-logo.png" type="image/png" />
      </head>
      <body className={montserrat.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
