import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MadeBy from "@/components/MadeBy";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "HRLA - O'zbekistonning Birinchi HR Konferensiyasi",
  description: "O'zbekiston HR tizimini rivojlantirishga qaratilgan eng yirik maydon.",
  openGraph: {
    title: "HRLA - O'zbekistonning Birinchi HR Konferensiyasi",
    description: "O'zbekistonning eng ilg'or HR mutaxassislari, top-menejerlar va biznes egalarini birlashtiruvchi markaziy konferensiya.",
    url: "https://hrla-website.vercel.app",
    siteName: "HRLA Conference",
    images: [{ url: "/hrla-green-logo.png", width: 800, height: 800 }],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HRLA - O'zbekistonning Birinchi HR Konferensiyasi",
    description: "O'zbekistonning eng ilg'or HR mutaxassislari, top-menejerlar va biznes egalarini birlashtiruvchi markaziy konferensiya.",
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
        <Navbar />
        {children}
        <MadeBy />
      </body>
    </html>
  );
}
