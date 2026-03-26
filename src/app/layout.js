import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "HRLA - O'zbekistonning Birinchi HR Konferensiyasi",
  description: "O'zbekiston HR tizimini rivojlantirishga qaratilgan eng yirik maydon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <head>
        <link rel="icon" href="/logo1.png" type="image/png" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
