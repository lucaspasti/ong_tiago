"use client"

import { useState } from "react"
import { FormBenef, Beneficiario } from "./form-benef"
import { FaSearch, FaListUl, FaEdit, FaTrash } from "react-icons/fa"
import { FormEditarBenef } from "./form-editarbenef"

const MOCK_BENEFICIARIOS: Beneficiario[] = [
    {
      nome: "Maria Silva",
      cpf: "123.456.789-00",
      telefone: "(48) 99999-1111",
      email: "maria@example.com",
      cep: "88000-000",
      endereco: "Rua das Flores, 123",
      bairro: "Centro",
      cidade: "Florianópolis",
      observacoes: "Prefere contato por e-mail",
      status: "Ativo"
    },
    {
      nome: "João Pereira",
      cpf: "987.654.321-00",
      telefone: "(48) 98888-2222",
      email: "joao@example.com",
      cep: "88001-000",
      endereco: "Av. Beira Mar, 456",
      bairro: "Trindade",
      cidade: "Florianópolis",
      observacoes: "",
      status: "Inativo"
    }
  ]
  

export function BeneficiariosSection() {
  const [beneficiarios, setBeneficiarios] = useState<Beneficiario[]>(MOCK_BENEFICIARIOS)
  const [busca, setBusca] = useState("")
  const [editando, setEditando] = useState<Beneficiario | null>(null)

  const beneficiariosFiltrados = beneficiarios.filter(b =>
    b.nome.toLowerCase().includes(busca.toLowerCase()) ||
    b.cpf.includes(busca)
  )

  function atualizarBeneficiario(editado: Beneficiario) {
    setBeneficiarios(prev =>
      prev.map(b => (b.cpf === editado.cpf ? editado : b))
    )
    setEditando(null)
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <FormBenef
        adicionarBeneficiario={novo => setBeneficiarios(prev => [...prev, novo])}
      />

      <div className="bg-white rounded-lg shadow-md p-6 w-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FaListUl className="text-blue-600" />
            <h3 className="text-lg font-semibold">Beneficiários Cadastrados</h3>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Buscar beneficiário..."
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
              <th className="py-2">Nome</th>
              <th className="py-2">CPF</th>
              <th className="py-2">Telefone</th>
              <th className="py-2">Cidade</th>
              <th className="py-2">Status</th>
              <th className="py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {beneficiariosFiltrados.map((b, i) => (
              <tr key={i} className="border-b last:border-0">
                <td className="py-2">{b.nome}</td>
                <td>{b.cpf}</td>
                <td>{b.telefone}</td>
                <td>{b.cidade}</td>
                <td>
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">
                    Ativo
                  </span>
                </td>
                <td className="flex gap-2">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => setEditando(b)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => setBeneficiarios(prev => prev.filter((_, j) => j !== i))}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    {editando && (
    <FormEditarBenef
        beneficiario={editando}
        onSalvar={atualizarBeneficiario}
        onFechar={() => setEditando(null)}
    />
    )}

    </div>
  )
}
