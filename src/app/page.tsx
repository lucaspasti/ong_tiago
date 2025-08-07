'use client'

import { useState } from 'react'
import { Hero } from "@/components/hero"
import { CardHero } from "@/components/cardhero"
import { MidSection } from "@/components/midsection/midsection"
import { HowItWorksSection } from "@/components/how_it_works/howitworksection"
import { NeedHelpSection } from "@/components/needhelp/needhelpsection"
import { Footer } from "@/components/ui/footer"
import FormularioSolicitacaoModal from '@/components/solicitacao/form-solicitacao'
import { Navbar } from "@/components/navbar"

export default function Home() {
  const [formOpen, setFormOpen] = useState(false)

  return (
    <>
      <Navbar />  

      <div className="pt-24">
        <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-700 py-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
            <Hero onSolicitarClick={() => setFormOpen(true)} />
            <CardHero />
          </div>
        </div>

        <MidSection />
        <HowItWorksSection />
        <NeedHelpSection onSolicitarClick={() => setFormOpen(true)} />
        <Footer />
      </div>

      <FormularioSolicitacaoModal open={formOpen} onOpenChange={setFormOpen} />
    </>
  )
}
