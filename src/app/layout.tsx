import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

// Configure Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-montserrat",
});

// Configure Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
