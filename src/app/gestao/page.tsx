"use client"

import { useState } from "react"
import { MenuGestao } from "@/components/menu-gestao"
import { NavbarGestao } from "@/components/navbar-gestao"
import { EstoqueSection } from "@/components/estoque/estoquesection"
import { BeneficiariosSection } from "@/components/beneficiarios/beneficiariossection"
import { EmprestimosSection } from "@/components/emprestimos/emprestimosection"

export default function GestaoPage() {
  const [abaAtiva, setAbaAtiva] = useState<"estoque" | "beneficiarios" | "emprestimos" | "historico" | "relatorios">("estoque")

  return (
    <div className="bg-blue-100">
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
            {abaAtiva === "historico" && <p>Aba Histórico</p>}
            {abaAtiva === "relatorios" && <p>Aba Relatórios</p>}
        </div>
    </div>
  )
}
