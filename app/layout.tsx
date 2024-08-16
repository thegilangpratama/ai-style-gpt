import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "thegilangpratama - AI-style GPT",
    template: "%s | AI-style GPT",
  },
  description: "This project is a word-matching based chat application designed to provide information related to my professional working experience. Instead of using AI, it relies on keyword matching to deliver relevant responses. The framework is flexible and can be easily adapted for AI and large language model (LLM) based services for more advanced interactions in the future.",
  openGraph: {
    title: "thegilangpratama - AI-style GPT",
    description:
      "This project is a word-matching based chat application that delivers information about my professional experience through keyword matching. It is adaptable for AI and LLM services, offering potential for dynamic interactions in the future.",
    url: "https://ai.thegilangpratama.com",
    siteName: "Gilang K. Pratama",
    images: [
      {
        url: "https://ai.thegilangpratama.com/main.png",
        width: 1200,
        height: 630,
        alt: "Gilang K. Pratama main image",
      },
    ],
    locale: "en-US",
    type: "website",
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
  twitter: {
    title: "Gilang K. Pratama - Fullstack Software Engineer",
    description:
      "Explore a word-matching based chat application that provides insights into my professional experience. Designed for flexibility, with potential for AI and LLM integration in the future.",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
