"use client"

import { useMemo, useState } from "react"
import { FaHistory, FaFilter, FaEye } from "react-icons/fa"

// type local da seção (mesmo padrão que usamos nas outras)
export type EmprestimoHistorico = {
  id: number
  beneficiario: string
  equipamento: string          // ex: "CDR001 - Cadeira de Rodas"
  dataEmprestimo: string       // ISO "YYYY-MM-DD"
  dataDevolucao: string        // ISO "YYYY-MM-DD"
  devolvido: boolean
}

const MOCK_HISTORICO: EmprestimoHistorico[] = [
  {
    id: 1,
    beneficiario: "João Santos",
    equipamento: "CDR001 - Cadeira de Rodas",
    dataEmprestimo: "2023-11-30",
    dataDevolucao: "2023-12-19",
    devolvido: true,
  },
  {
    id: 2,
    beneficiario: "Maria Silva",
    equipamento: "MUL001 - Muleta",
    dataEmprestimo: "2024-01-14",
    dataDevolucao: "2024-02-14",
    devolvido: false, // vai aparecer como “Atrasado” se a data já passou
  },
]

function StatusBadge({ emprestimo }: { emprestimo: EmprestimoHistorico }) {
  if (emprestimo.devolvido) {
    return (
      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
        Devolvido
      </span>
    )
  }

  // se não devolvido, checa se está atrasado
  const hoje = new Date()
  const prev = new Date(emprestimo.dataDevolucao)
  const atrasado = prev < hoje

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${
        atrasado ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
      }`}
    >
      {atrasado ? "Atrasado" : "Em aberto"}
    </span>
  )
}

/** Modal simples de detalhes (apenas leitura) */
function ModalDetalhes({
  emprestimo,
  onClose,
}: {
  emprestimo: EmprestimoHistorico | null
  onClose: () => void
}) {
  if (!emprestimo) return null

  const fmt = (iso: string) => new Date(iso).toLocaleDateString()

  return (
    <div className="fixed inset-0 z-50 bg-black/10 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Detalhes do Empréstimo</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Beneficiário</p>
            <p className="font-medium">{emprestimo.beneficiario}</p>
          </div>
          <div>
            <p className="text-gray-500">Equipamento</p>
            <p className="font-medium">{emprestimo.equipamento}</p>
          </div>
          <div>
            <p className="text-gray-500">Data do Empréstimo</p>
            <p className="font-medium">{fmt(emprestimo.dataEmprestimo)}</p>
          </div>
          <div>
            <p className="text-gray-500">Data de Devolução</p>
            <p className="font-medium">{fmt(emprestimo.dataDevolucao)}</p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-gray-500 mb-1">Status</p>
            <StatusBadge emprestimo={emprestimo} />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  )
}

/** Seção principal do Histórico */
export function HistoricoSection() {
  const [busca, setBusca] = useState("")
  const [statusFiltro, setStatusFiltro] = useState<"todos" | "devolvido" | "aberto" | "atrasado">(
    "todos"
  )
  const [dados] = useState<EmprestimoHistorico[]>(MOCK_HISTORICO)
  const [detalhe, setDetalhe] = useState<EmprestimoHistorico | null>(null)

  const filtrados = useMemo(() => {
    const hoje = new Date()
    return dados
      .filter((d) => {
        // Busca por beneficiário/equipamento/ID
        const q = busca.trim().toLowerCase()
        const okBusca =
          !q ||
          d.beneficiario.toLowerCase().includes(q) ||
          d.equipamento.toLowerCase().includes(q) ||
          String(d.id).includes(q)

        if (!okBusca) return false

        if (statusFiltro === "todos") return true

        if (statusFiltro === "devolvido") return d.devolvido

        const atrasado = new Date(d.dataDevolucao) < hoje
        if (statusFiltro === "atrasado") return !d.devolvido && atrasado
        if (statusFiltro === "aberto") return !d.devolvido && !atrasado

        return true
      })
      .sort((a, b) => (a.id > b.id ? -1 : 1)) // mais recente primeiro
  }, [dados, busca, statusFiltro])

  const fmt = (iso: string) => new Date(iso).toLocaleDateString()

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6 w-full">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <FaHistory className="text-indigo-600" />
          <h3 className="text-lg font-semibold">Histórico de Empréstimos</h3>
        </div>

        {/* Filtros */}
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center mb-4">
          <input
            type="text"
            placeholder="Buscar no histórico..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full sm:w-72"
          />

          <select
            value={statusFiltro}
            onChange={(e) =>
              setStatusFiltro(e.target.value as "todos" | "devolvido" | "aberto" | "atrasado")
            }
            className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full sm:w-44 bg-gray-50"
          >
            <option value="todos">Todos os status</option>
            <option value="devolvido">Devolvido</option>
            <option value="aberto">Em aberto</option>
            <option value="atrasado">Atrasado</option>
          </select>

          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
            <FaFilter />
            Filtrar
          </button>
        </div>

        {/* Tabela */}
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-700 border-b">
              <th className="py-2 w-14">ID</th>
              <th className="py-2">Beneficiário</th>
              <th className="py-2">Equipamento</th>
              <th className="py-2">Data Empréstimo</th>
              <th className="py-2">Data Devolução</th>
              <th className="py-2">Status</th>
              <th className="py-2 text-center w-24">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((row) => (
              <tr key={row.id} className="border-b last:border-0">
                <td className="py-2">{row.id}</td>
                <td className="py-2">{row.beneficiario}</td>
                <td className="py-2">{row.equipamento}</td>
                <td className="py-2">{fmt(row.dataEmprestimo)}</td>
                <td className="py-2">{fmt(row.dataDevolucao)}</td>
                <td className="py-2">
                  <StatusBadge emprestimo={row} />
                </td>
                <td className="py-2">
                  <div className="flex items-center justify-center">
                    <button
                      onClick={() => setDetalhe(row)}
                      className="text-blue-600 hover:text-blue-800"
                      title="Ver detalhes"
                    >
                      <FaEye />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filtrados.length === 0 && (
              <tr>
                <td colSpan={7} className="py-8 text-center text-gray-500">
                  Nenhum registro encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal de Detalhes */}
      <ModalDetalhes emprestimo={detalhe} onClose={() => setDetalhe(null)} />
    </>
  )
}
