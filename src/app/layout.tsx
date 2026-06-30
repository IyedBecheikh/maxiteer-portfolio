import type { Metadata } from "next";
import type { ReactNode } from "react";

import { PageShell } from "@/components/page-shell";
import { homeMetadata, siteUrl } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeMetadata.title,
    template: "%s",
  },
  description: homeMetadata.description,
  openGraph: {
    title: homeMetadata.title,
    description: homeMetadata.description,
    url: siteUrl,
    siteName: "Becheikh Software",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
