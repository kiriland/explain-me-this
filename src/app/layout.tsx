import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import TopNav from "./_components/topnav";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Explain Me This! - AI-Powered Explanation Generator",
  description: "AI-Powered Explanation Generator",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TopNav />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
