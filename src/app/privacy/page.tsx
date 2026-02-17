export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-[#F5F5F5] py-32 px-6 md:px-12">
            <div className="max-w-3xl mx-auto space-y-8">
                <h1 className="font-serif text-4xl text-damasus-gold mb-12">Privacy Policy</h1>

                <section className="space-y-4">
                    <h2 className="font-serif text-xl text-white/80">1. Information We Collect</h2>
                    <p className="text-white/60 font-light leading-relaxed">
                        We collect information you provide directly to us when you make a purchase, sign up for our newsletter, or contact us. This includes your name, email address, phone number, and shipping address.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="font-serif text-xl text-white/80">2. How We Use Your Information</h2>
                    <p className="text-white/60 font-light leading-relaxed">
                        We use your information to process your orders, communicate with you about your purchase, and send you updates about our limited batch releases. We do not sell your data to third parties.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="font-serif text-xl text-white/80">3. Contact Us</h2>
                    <p className="text-white/60 font-light leading-relaxed">
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:perfumesdamascus@gmail.com" className="text-damasus-gold hover:underline">perfumesdamascus@gmail.com</a>.
                    </p>
                </section>

                <div className="pt-12 border-t border-white/10 text-white/40 text-sm">
                    Last Updated: Feb 2026
                </div>
            </div>
        </main>
    );
}
