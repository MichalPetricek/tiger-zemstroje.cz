import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Přesměrování...",
  robots: { index: false, follow: false },
};

export default function SubsidiesPage() {
  return (
    <meta httpEquiv="refresh" content="0;url=/" />
  );
}
