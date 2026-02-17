export interface Product {
    id: string;
    slug: string;        // Unique URL identifier (e.g., "midnight-rose")
    name: string;        // Product Name
    price: number;       // Price in INR
    description: string; // Short description
    longDescription?: string; // Detailed story (optional)
    image: string;       // Path to image in public folder (e.g., "/products/rose.jpg")
    notes: string[];     // Olfactory notes (e.g., ["Rose", "Oud", "Amber"])
    inStock: boolean;    // Set to false to show "Out of Stock"
}

// ----------------------------------------------------------------------
// HOW TO ADD PRODUCTS
// 1. Copy the "Example Product" block below.
// 2. Paste it inside the "products" array.
// 3. Update the details (id, name, price, etc.).
// 4. Ensure the 'image' path matches a file you upload to the 'public' folder.
// ----------------------------------------------------------------------

export const products: Product[] = [
    // --- START OF PRODUCT LIST ---

    // Example Product 1 (You can edit this)
    {
        id: "1",
        slug: "signature-royal-oud",
        name: "Royal Oud",
        price: 1250,
        description: "A timeless blend of Agarwood and Taif Rose.",
        longDescription: "Harvested from the depths of the Assam forests and blended with the rarest Taif Roses...",
        image: "/bg.jpg", // Placeholder image
        notes: ["Agarwood", "Taif Rose", "Saffron", "Amber"],
        inStock: true,
    },

    // Example Product 2 (Copy-paste this block to add a new one)
    /*
    {
        id: "2",
        slug: "velvet-amber",
        name: "Velvet Amber",
        price: 145,
        description: "Warm, resinous, and deeply comforting.",
        image: "/products/amber.jpg", 
        notes: ["Amber", "Vanilla", "Musk"],
        inStock: true,
    },
    */

    // --- END OF PRODUCT LIST ---
];

export function getProductBySlug(slug: string) {
    return products.find((product) => product.slug === slug);
}
