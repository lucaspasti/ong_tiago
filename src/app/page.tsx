import { Hero } from "@/components/hero"
import { CardHero } from "@/components/cardhero"
import { MidSection } from "@/components/midsection/midsection"
import { HowItWorksSection } from "@/components/how_it_works/howitworksection";
import { NeedHelpSection } from "@/components/needhelp/needhelpsection";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="pt-24">
      <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-700 py-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
          <Hero />
          <CardHero />
        </div>
      </div>

      <MidSection />

      <HowItWorksSection />

      <NeedHelpSection />

      <Footer />
  </div>
  );
}
