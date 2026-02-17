import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#050505] text-[#F5F5F5] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
            {/* Cinematic Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-damasus-gold/5 via-transparent to-transparent opacity-50" />
            <div className="film-grain absolute inset-0 pointer-events-none opacity-20" />

            <div className="relative z-10 space-y-8">
                <h1 className="font-serif text-6xl md:text-9xl text-damasus-gold opacity-20 tracking-widest select-none">
                    404
                </h1>

                <div className="space-y-4">
                    <h2 className="font-serif text-2xl md:text-4xl text-[#F5F5F5]">
                        Lost in the Dunes?
                    </h2>
                    <p className="text-white/60 font-light max-w-md mx-auto">
                        The scent trail you are following has faded into the sands of time.
                    </p>
                </div>

                <Link
                    href="/"
                    className="inline-block px-8 py-3 bg-damasus-gold text-black font-serif uppercase tracking-widest text-xs hover:bg-[#eac54f] transition-all duration-300 rounded-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                    Return to Oasis
                </Link>
            </div>
        </main>
    );
}
