"use client"

import { useState } from "react"
import { FormEmprestimo, Emprestimo } from "./form-emprestimo"
import { FaUndo, FaClock } from "react-icons/fa"

export function EmprestimosSection() {
  const [emprestimos, setEmprestimos] = useState<Emprestimo[]>([
    {
      beneficiario: "Maria Silva",
      equipamento: "MUL001 - Muleta",
      dataEmprestimo: "2024-01-14",
      dataDevolucao: "2024-02-14",
    },
  ])

  function adicionarEmprestimo(novo: Emprestimo) {
    setEmprestimos(prev => [...prev, novo])
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-start">
      {/* form com largura fixa */}
      <div className="w-[320px] flex-none">
        <FormEmprestimo adicionarEmprestimo={adicionarEmprestimo} />
      </div>

      {/* painel da direita */}
      <div className="flex-1 self-start bg-white rounded-lg shadow-md p-6 w-full">
        <div className="flex items-center gap-2 mb-4">
          <FaClock className="text-orange-500" />
          <h3 className="text-lg font-semibold">Empréstimos Ativos</h3>
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-700 border-b">
              <th className="py-2">Beneficiário</th>
              <th className="py-2">Equipamento</th>
              <th className="py-2">Data Empréstimo</th>
              <th className="py-2">Previsão Devolução</th>
              <th className="py-2">Status</th>
              <th className="py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {emprestimos.map((e, i) => {
              const hoje = new Date()
              const previsao = new Date(e.dataDevolucao)
              const atrasado = previsao < hoje

              return (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-2">{e.beneficiario}</td>
                  <td>{e.equipamento}</td>
                  <td>{new Date(e.dataEmprestimo).toLocaleDateString()}</td>
                  <td className={atrasado ? "text-red-600 font-bold" : ""}>
                    {new Date(e.dataDevolucao).toLocaleDateString()}
                  </td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        atrasado ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
                      }`}
                    >
                      {atrasado ? "Atrasado" : "Ativo"}
                    </span>
                  </td>
                  <td className="py-2">
                    <div className="flex items-center">
                      <button
                        className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs flex items-center gap-1"
                        onClick={() => {}}
                      >
                        <FaUndo /> Devolver
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
