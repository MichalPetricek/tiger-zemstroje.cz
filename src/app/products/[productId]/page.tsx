import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct } from "@/lib/db";
import ProductDetailContent from "@/components/ProductDetailContent";

export const dynamic = "force-dynamic";

// Generate dynamic metadata for each product
export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> {
  const { productId } = await params;

  let product;
  try {
    product = getProduct(productId);
  } catch {
    return { title: "Produkt nenalezen" };
  }

  if (!product) {
    return {
      title: "Produkt nenalezen",
    };
  }

  const priceText = product.priceWithVat > 0
    ? `${product.priceWithVat.toLocaleString("cs-CZ")} Kč s DPH`
    : "Cena na dotaz";
  const title = `${product.name} – ${product.power} ${product.category} | ${priceText}`;
  const description = `${product.name} – ${product.description} Výkon: ${product.power}, Cena: ${priceText}. ${product.features.slice(0, 3).join(". ")}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://jinma.cz/products/${product.id}`,
    },
    openGraph: {
      title: `${product.name} – ${product.category} | TIGER CZ`,
      description,
      url: `https://jinma.cz/products/${product.id}`,
      images: product.images
        ? product.images.slice(0, 4).map((img) => ({
            url: img,
            width: 1200,
            height: 630,
            alt: `${product.name} – ${product.category}`,
          }))
        : [
            {
              url: product.image,
              width: 1200,
              height: 630,
              alt: product.name,
            },
          ],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  let product;
  try {
    product = getProduct(productId);
  } catch {
    notFound();
  }

  if (!product) {
    notFound();
  }

  const priceValue = product.priceWithVat > 0 ? String(product.priceWithVat) : "0";

  // Product JSON-LD structured data
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images || [product.image],
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      price: priceValue,
      priceCurrency: "CZK",
      availability: product.available
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: "TIGER CZ s.r.o.",
        url: "https://jinma.cz",
      },
      warranty: {
        "@type": "WarrantyPromise",
        durationOfWarranty: {
          "@type": "QuantitativeValue",
          value: 2,
          unitCode: "ANN",
        },
        warrantyScope: "https://schema.org/FullWarranty",
      },
    },
    additionalProperty: Object.entries(product.specs).map(([name, value]) => ({
      "@type": "PropertyValue",
      name,
      value,
    })),
  };

  // BreadcrumbList JSON-LD
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Domů",
        item: "https://jinma.cz",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Produkty",
        item: "https://jinma.cz/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://jinma.cz/products/${product.id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProductDetailContent product={product} />
    </>
  );
}
