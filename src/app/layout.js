import { Lexend, Outfit } from "next/font/google";
import "./globals.css";

// Configure fonts
const lexend = Lexend({ subsets: ["latin"], weight: ["400", "600", "700"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "GuardianRide",
  description: "The Future of Safe Student Transportation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Outfit = global font for body text */}
      <body className={outfit.className}>
        {/* Lexend = for headings */}
        <div className={lexend.className}>{children}</div>
      </body>
    </html>
  );
}
