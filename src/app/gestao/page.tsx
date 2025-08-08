"use client"

import { useState } from "react"
import { MenuGestao } from "@/components/gestao-componentes/menu-gestao"
import { NavbarGestao } from "@/components/gestao-componentes/navbar-gestao"
import { EstoqueSection } from "@/components/gestao-componentes/estoque/estoquesection"
import { BeneficiariosSection } from "@/components/gestao-componentes/beneficiarios/beneficiariossection"
import { EmprestimosSection } from "@/components/gestao-componentes/emprestimos/emprestimosection"
import { HistoricoSection } from "@/components/gestao-componentes/historico/historicosection"
import { RelatoriosSection } from "@/components/gestao-componentes/relatorio/relatoriosection"

export default function GestaoPage() {
  const [abaAtiva, setAbaAtiva] = useState<
    "estoque" | "beneficiarios" | "emprestimos" | "historico" | "relatorios"
  >("estoque")

  return (
    <div className="bg-blue-100 min-h-screen"> {/* ← aqui */}
      <NavbarGestao />

      <div className="pt-32 px-8">
        <div className="flex justify-center">
          <div className="max-w-8xl">
            <MenuGestao abaAtiva={abaAtiva} setAbaAtiva={setAbaAtiva} />
          </div>
        </div>

        {abaAtiva === "estoque" && <EstoqueSection />}
        {abaAtiva === "beneficiarios" && <BeneficiariosSection />}
        {abaAtiva === "emprestimos" && <EmprestimosSection />}
        {abaAtiva === "historico" && <HistoricoSection />}
        {abaAtiva === "relatorios" && <RelatoriosSection />}
      </div>
    </div>
  )
}
