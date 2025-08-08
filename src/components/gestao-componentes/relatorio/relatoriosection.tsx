"use client"

import { useMemo } from "react"
import {
  FaHandshake,
  FaCheckCircle,
  FaCalendarAlt,
  FaCrutch
} from "react-icons/fa"

import { Equipamento } from "../estoque/form-equip"
import { Accessibility, } from "lucide-react"

type Emprestimo = {
  id: number
  beneficiario: string
  equipamento: string      // "CDR001 - Cadeira de Rodas"
  dataEmprestimo: string   // ISO yyyy-mm-dd
  dataDevolucao: string    // ISO yyyy-mm-dd
  devolvido: boolean
}

export const MOCK_EQUIPAMENTOS: Equipamento[] = [
  {
    codigo: "MUL001",
    tipo: "Muleta",
    descricao: "Muleta axilar adulto",
    estado: "Excelente",
    status: "Emprestado",
  },
  {
    codigo: "MUL002",
    tipo: "Muleta",
    descricao: "Muleta axilar adulto",
    estado: "Bom",
    status: "Disponível",
  },
  {
    codigo: "CDR001",
    tipo: "Cadeira de Rodas",
    descricao: "Cadeira de rodas manual",
    estado: "Excelente",
    status: "Disponível",
  },
  {
    codigo: "AND001",
    tipo: "Andador",
    descricao: "Andador com rodas",
    estado: "Bom",
    status: "Disponível",
  },
]


const MOCK_EMPRESTIMOS: Emprestimo[] = [
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
    devolvido: false,
  },
]

function fmt(d: string) {
  return new Date(d).toLocaleDateString()
}

export function RelatoriosSection() {
  // KPIs + agrupamentos calculados a partir dos mocks
  const {
    totalEquip,
    ativos,
    disponiveis,
    emprestimosEsteMes,
    porTipo,
    recentes,
  } = useMemo(() => {
    const totalEquip = MOCK_EQUIPAMENTOS.length
    const ativos = MOCK_EQUIPAMENTOS.filter(e => e.status === "Emprestado").length
    const disponiveis = MOCK_EQUIPAMENTOS.filter(e => e.status === "Disponível").length

    const now = new Date()
    const ymAtual = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`
    const emprestimosEsteMes = MOCK_EMPRESTIMOS.filter(e =>
      e.dataEmprestimo.startsWith(ymAtual)
    ).length

    // contagem por tipo
    const porTipo = MOCK_EQUIPAMENTOS.reduce<Record<string, number>>((acc, e) => {
      acc[e.tipo] = (acc[e.tipo] ?? 0) + 1
      return acc
    }, {})

    // recentes (máx 5) por data de empréstimo desc
    const recentes = [...MOCK_EMPRESTIMOS]
      .sort((a, b) => (a.dataEmprestimo > b.dataEmprestimo ? -1 : 1))
      .slice(0, 5)

    return { totalEquip, ativos, disponiveis, emprestimosEsteMes, porTipo, recentes }
  }, [])

  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <CardKpi
          icon={<FaCrutch />}
          title="Total de Equipamentos"
          value={totalEquip}
          iconBg="bg-blue-100"
          iconColor="text-blue-600"
        />
        <CardKpi
          icon={<FaHandshake />}
          title="Empréstimos Ativos"
          value={ativos}
          iconBg="bg-green-100"
          iconColor="text-green-600"
        />
        <CardKpi
          icon={<FaCheckCircle />}
          title="Disponíveis"
          value={disponiveis}
          iconBg="bg-purple-100"
          iconColor="text-purple-600"
        />
        <CardKpi
          icon={<FaCalendarAlt />}
          title="Empréstimos Este Mês"
          value={emprestimosEsteMes}
          iconBg="bg-orange-100"
          iconColor="text-orange-600"
        />
      </div>

      {/* Linhas com listas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Equipamentos por Tipo</h3>
          <div className="divide-y">
            {Object.entries(porTipo).map(([tipo, qtd]) => (
              <div key={tipo} className="flex items-center justify-between py-3">
                <span className="text-gray-800">{tipo}</span>
                <span className="inline-flex items-center justify-center min-w-6 h-6 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                  {qtd}
                </span>
              </div>
            ))}
            {Object.keys(porTipo).length === 0 && (
              <p className="text-sm text-gray-500 py-8 text-center">Sem dados.</p>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Empréstimos Recentes</h3>
          <div className="space-y-3">
            {recentes.map((r) => (
              <div
                key={r.id}
                className="rounded-md border p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-semibold text-gray-900">{r.beneficiario}</p>
                  <p className="text-sm text-gray-600">{r.equipamento}</p>
                </div>
                <div className="text-sm text-gray-500 mt-2 sm:mt-0">
                  {fmt(r.dataEmprestimo)}
                </div>
              </div>
            ))}
            {recentes.length === 0 && (
              <p className="text-sm text-gray-500 py-8 text-center">Sem registros recentes.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

//
// Subcomponent: cartão KPI
//
function CardKpi({
  icon,
  title,
  value,
  iconBg,
  iconColor,
}: {
  icon: React.ReactNode
  title: string
  value: number | string
  iconBg: string
  iconColor: string
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-3xl font-bold mt-1">{value}</p>
      </div>
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${iconBg}`}>
        <div className={`text-xl ${iconColor}`}>{icon}</div>
      </div>
    </div>
  )
}
