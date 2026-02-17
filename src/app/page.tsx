import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { StoryScroll } from "@/components/landing/StoryScroll";
import { LeadCapture } from "@/components/landing/LeadCapture";
import { ScrollProvider } from "@/components/three/ScrollContext";

export default function Home() {
  return (
    <ScrollProvider>
      <main className="min-h-screen flex flex-col bg-[#0D0D0D]">
        <Hero />
        <StoryScroll />
      </main>
    </ScrollProvider>
  );
}
