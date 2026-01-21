import type { Metadata } from "next";
import { Outfit, Rozha_One, Great_Vibes } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const rozhaOne = Rozha_One({
  variable: "--font-rozha-one",
  weight: "400",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MitraEdu - The Digital Gurukul | Ancient Wisdom, Modern Learning",
  description: "Experience the best of Sanskrit, Kannada, and Vedic Math at MitraEdu. The Digital Gurukul bringing ancient wisdom to the modern world.",
  keywords: ["MitraEdu", "Digital Gurukul", "Sanskrit classes", "Kannada classes", "Vedic Math", "Online Education", "Learning", "Ancient Wisdom"],
  authors: [{ name: "MitraEdu" }],
  openGraph: {
    title: "MitraEdu - The Digital Gurukul",
    description: "Bringing ancient wisdom to the modern world through digital learning.",
    url: "https://mitraedu.com",
    siteName: "MitraEdu",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${rozhaOne.variable} ${greatVibes.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
