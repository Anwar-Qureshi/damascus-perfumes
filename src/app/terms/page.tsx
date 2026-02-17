export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-[#F5F5F5] py-32 px-6 md:px-12">
            <div className="max-w-3xl mx-auto space-y-8">
                <h1 className="font-serif text-4xl text-damasus-gold mb-12">Terms of Service</h1>

                <section className="space-y-4">
                    <h2 className="font-serif text-xl text-white/80">1. Acceptance of Terms</h2>
                    <p className="text-white/60 font-light leading-relaxed">
                        By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="font-serif text-xl text-white/80">2. Products and Pricing</h2>
                    <p className="text-white/60 font-light leading-relaxed">
                        All products listed on the website, their descriptions, and their prices are subject to change. We reserve the right to modify, suspend, or discontinue the sale of any product at any time without notice.
                        Due to the artisanal nature of our products, slight variations may occur between batches.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="font-serif text-xl text-white/80">3. Returns and Refunds</h2>
                    <p className="text-white/60 font-light leading-relaxed">
                        Due to the personal nature of fragrance products, we generally do not accept returns on opened bottles. However, if your product arrives damaged, please contact us within 48 hours of delivery.
                    </p>
                </section>

                <div className="pt-12 border-t border-white/10 text-white/40 text-sm">
                    Last Updated: Feb 2026
                </div>
            </div>
        </main>
    );
}
