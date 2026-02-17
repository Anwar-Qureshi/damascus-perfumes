import { getProductBySlug, products } from "@/data/products";
import { ProductDetails } from "@/components/product/ProductDetails";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const slug = (await params).slug;
    const product = getProductBySlug(slug);

    if (!product) {
        return {
            title: "Product Not Found | Damascus Perfumes",
        };
    }

    return {
        title: `${product.name} | Damascus Perfumes`,
        description: product.description,
        openGraph: {
            images: [product.image],
        },
    };
}

export default async function ProductPage({ params }: PageProps) {
    const slug = (await params).slug;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return <ProductDetails product={product} />;
}
