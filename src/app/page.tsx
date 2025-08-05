import { Hero } from "@/components/hero"
import { CardHero } from "@/components/cardhero"

export default function Home() {
  return (
  <>
    <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-700 px-8 py-20 flex flex-col md:flex-row gap-8 px-100">
        <Hero />
        <CardHero />
    </div>
    <div></div>
  </>
  );
}
