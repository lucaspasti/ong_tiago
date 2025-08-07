"use client"

import { FormEquipamento } from "./form-equip"
import { useState } from "react"
import { FaSearch, FaListUl } from "react-icons/fa"
import { FormEditarEquip } from "./form-editarequip"

interface Equipamento {
  codigo: string
  tipo: string
  descricao: string
  estado: string
  status: "Disponível" | "Emprestado"
}

const dadosMock: Equipamento[] = [
  { codigo: "MUL001", tipo: "Muleta", descricao: "Muleta axilar adulto", estado: "Excelente", status: "Emprestado" },
  { codigo: "MUL002", tipo: "Muleta", descricao: "Muleta axilar adulto", estado: "Bom", status: "Disponível" },
  { codigo: "CDR001", tipo: "Cadeira de Rodas", descricao: "Cadeira de rodas manual", estado: "Excelente", status: "Disponível" },
  { codigo: "AND001", tipo: "Andador", descricao: "Andador com rodas", estado: "Bom", status: "Disponível" }
]


export function EstoqueSection() {
  const [busca, setBusca] = useState("")
  const [equipamentos, setEquipamentos] = useState<Equipamento[]>(dadosMock)
  const [equipamentoEditando, setEquipamentoEditando] = useState<Equipamento | null>(null)
  const [indiceEditando, setIndiceEditando] = useState<number | null>(null)


  const equipamentosFiltrados = equipamentos.filter(e =>
    e.tipo.toLowerCase().includes(busca.toLowerCase()) ||
    e.descricao.toLowerCase().includes(busca.toLowerCase()) ||
    e.codigo.toLowerCase().includes(busca.toLowerCase())
  )  
  
  return (
    <div className="flex flex-col lg:flex-row gap-6">

    <FormEquipamento
      adicionarEquipamento={(novo: Equipamento) => {
        setEquipamentos(prev => [...prev, novo])
      }}
    />

      <div className="bg-white rounded-lg shadow-md p-6 w-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FaListUl className="text-blue-600" />
            <h3 className="text-lg font-semibold">Equipamentos em Estoque</h3>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Buscar equipamento..."
              value={busca}
              onChange={e => setBusca(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring focus:border-blue-500"
            />
            <FaSearch className="text-gray-500" />
          </div>
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-700 border-b">
              <th className="py-2">Código</th>
              <th className="py-2">Tipo</th>
              <th className="py-2">Descrição</th>
              <th className="py-2">Estado</th>
              <th className="py-2">Status</th>
              <th className="py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {equipamentosFiltrados.map((eq, i) => (
              <tr key={i} className="border-b last:border-0">
                <td className="py-2">{eq.codigo}</td>
                <td>{eq.tipo}</td>
                <td>{eq.descricao}</td>
                <td>{eq.estado}</td>
                <td>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    eq.status === "Disponível"
                      ? "bg-green-100 text-green-600"
                      : "bg-orange-100 text-orange-600"
                  }`}>
                    {eq.status}
                  </span>
                </td>
                <td className="flex gap-2">
                  {/* Ícones de editar/excluir */}
                <button
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => {
                    setEquipamentoEditando(eq)
                    setIndiceEditando(i)
                  }}
                >
                  ✏️
                </button>

                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() =>
                      setEquipamentos(prev => prev.filter((_, index) => index !== i))
                    }
                  >
                    🗑️
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {equipamentoEditando && indiceEditando !== null && (
        <FormEditarEquip
          equipamento={equipamentoEditando}
          onFechar={() => {
            setEquipamentoEditando(null)
            setIndiceEditando(null)
          }}
          onSalvar={(atualizado) => {
            setEquipamentos(prev => {
              const novos = [...prev]
              novos[indiceEditando] = atualizado
              return novos
            })
            setEquipamentoEditando(null)
            setIndiceEditando(null)
          }}
        />
      )}

      </div>

    </div>
  )
}
