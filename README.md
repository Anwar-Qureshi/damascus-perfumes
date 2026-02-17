# Damascus Perfumes 🌹

![Project Banner](public/Logo.jpeg)

> *Digital Artisanship for Luxury Fragrances.*

**Damascus Perfumes** is a high-performance, immersive e-commerce platform built for niche perfume brands. It combines cinematic 3D visuals with a seamless "Concierge Checkout" experience via WhatsApp.

---

## ✨ Key Features

-   **Cinematic Entrance**: A scroll-driven storytelling experience with 3D elements and parallax effects.
-   **"The Vault" Cart**: A glassmorphism-styled slide-out cart that preserves the luxury feel.
-   **Concierge Checkout**: Instead of a generic payment form, orders are formatted into a professional WhatsApp message for personalized service.
-   **Sensory Design**:
    -   *Visual*: Gold-on-black aesthetic, custom serif typography, and film grain textures.
    -   *Motion*: Smooth page transitions and micro-interactions using Framer Motion.
-   **Performance**:
    -   Built on **Next.js 15** for lightning-fast static generation.
    -   Optimized 2D/3D hybrids for mobile battery preservation.

## 🛠️ Tech Stack

-   **Core**: [Next.js 15](https://nextjs.org/) (App Router), React 19, TypeScript
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animation**: [Framer Motion](https://www.framer.com/motion/)
-   **3D Graphics**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + Drei
-   **State Management**: [Zustand](https://github.com/pmndrs/zustand)

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```bash
├── public/              # Static assets (images, fonts)
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/
│   │   ├── cart/        # Cart drawer logic & UI
│   │   ├── landing/     # Hero, Story, and Landing page sections
│   │   ├── product/     # Product details & listing components
│   │   └── three/       # 3D scenes & models
│   ├── data/            # Static product database (products.ts)
│   └── lib/             # Global stores (Zustand)
```

## 📝 Customization

### Adding Products
You don't need a database. high-performance product data is stored in `src/data/products.ts`.
Simply edit this file to add new perfumes, change prices, or update descriptions.

### Updating Images
Upload your bottle photography to the `public/` folder and reference them in `products.ts`.

## 🚢 Deployment

This project is optimized for **Vercel**.
Please refer to `DEPLOYMENT.md` for a step-by-step launch guide.

## 📄 License

© 2024 Damascus Perfumes. All rights reserved.
