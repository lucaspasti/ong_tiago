"use client"

import { useState } from "react"
import { FaPlusCircle } from "react-icons/fa"

export type Equipamento = {
  tipo: string
  descricao: string
  codigo: string
  estado: "Excelente" | "Bom" | "Regular"
  status: "Disponível" | "Emprestado"
}

type FormEquipamentoProps = {
  adicionarEquipamento: (equipamento: Equipamento) => void
}

export function FormEquipamento({ adicionarEquipamento }: FormEquipamentoProps) {
  const [tipo, setTipo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [codigo, setCodigo] = useState("")
  const [estado, setEstado] = useState<"Excelente" | "Bom" | "Regular">("Excelente")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const novoEquipamento: Equipamento = {
      tipo,
      descricao,
      codigo,
      estado,
      status: "Disponível",
    }

    adicionarEquipamento(novoEquipamento)

    setTipo("")
    setDescricao("")
    setCodigo("")
    setEstado("Excelente")
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 w-full max-w-xs">
      <div className="flex items-center gap-2 mb-4">
        <FaPlusCircle className="text-green-600" />
        <h2 className="text-lg font-semibold">Adicionar Equipamento</h2>
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1">Tipo de Equipamento</label>
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-100"
          required
        >
          <option value="">Selecione o tipo</option>
          <option value="Muleta">Muleta</option>
          <option value="Cadeira de Rodas">Cadeira de Rodas</option>
          <option value="Andador">Andador</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1">Descrição/Modelo</label>
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Ex: Muleta axilar adulto"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1">Código/ID</label>
        <input
          type="text"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          placeholder="Ex: MUL001"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm mb-1">Estado</label>
        <select
          value={estado}
          onChange={(e) => setEstado(e.target.value as "Excelente" | "Bom" | "Regular")}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-100"
        >
          <option value="Excelente">Excelente</option>
          <option value="Bom">Bom</option>
          <option value="Regular">Regular</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-md text-sm transition"
      >
        + Adicionar ao Estoque
      </button>
    </form>
  )
}
