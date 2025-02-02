import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-montserrat">
        <main>{children}</main>
      </body>
    </html>
  );
}
