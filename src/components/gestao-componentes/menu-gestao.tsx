"use client"

import { useState } from "react"
import clsx from "clsx"

type Aba = "estoque" | "beneficiarios" | "emprestimos" | "historico" | "relatorios"

interface Props {
  abaAtiva: Aba
  setAbaAtiva: (aba: Aba) => void
}

export function MenuGestao({ abaAtiva, setAbaAtiva }: Props) {
  const abas: { nome: string, valor: Aba }[] = [
    { nome: "Estoque", valor: "estoque" },
    { nome: "Beneficiários", valor: "beneficiarios" },
    { nome: "Empréstimos", valor: "emprestimos" },
    { nome: "Histórico", valor: "historico" },
    { nome: "Relatórios", valor: "relatorios" },
  ]

  return (
    <div className="flex bg-white rounded-md shadow-md overflow-hidden mb-6">
      {abas.map((aba) => (
        <button
          key={aba.valor}
          onClick={() => setAbaAtiva(aba.valor)}
          className={clsx(
            "px-16 py-4 text-sm font-semibold transition",
            abaAtiva === aba.valor
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          )}
        >
          {aba.nome}
        </button>
      ))}
    </div>
  )
}
