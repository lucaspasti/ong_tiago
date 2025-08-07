"use client"

import { useState } from "react"
import { FaUserPlus } from "react-icons/fa"

export type Beneficiario = {
  nome: string
  cpf: string
  telefone: string
  email: string
  cep: string
  endereco: string
  bairro: string
  cidade: string
  observacoes: string
  status: "Ativo" | "Inativo"
}


type FormBeneficiarioProps = {
  adicionarBeneficiario: (b: Beneficiario) => void
}

export function FormBenef({ adicionarBeneficiario }: FormBeneficiarioProps) {
  const [form, setForm] = useState<Beneficiario>({
    nome: "",
    cpf: "",
    telefone: "", 
    email: "",
    cep: "",
    endereco: "",
    bairro: "",
    cidade: "",
    observacoes: "",
    status: "Ativo",
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    adicionarBeneficiario(form)
    setForm({
      nome: "",
      cpf: "",
      telefone: "",
      email: "",
      cep: "",
      endereco: "",
      bairro: "",
      cidade: "",
      observacoes: "",
      status:"Ativo"
    })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 w-full max-w-xs">
      <div className="flex items-center gap-2 mb-4">
        <FaUserPlus className="text-green-600" />
        <h2 className="text-lg font-semibold">Cadastrar Beneficiário</h2>
      </div>

      {[
        { label: "Nome Completo", name: "nome", type: "text", required: true },
        { label: "CPF", name: "cpf", type: "text", required: true },
        { label: "Telefone", name: "telefone", type: "text", required: true },
        { label: "Email", name: "email", type: "email", required: false },
        { label: "CEP", name: "cep", type: "text", required: true },
        { label: "Endereço", name: "endereco", type: "text", required: true },
        { label: "Bairro", name: "bairro", type: "text", required: true },
        { label: "Cidade", name: "cidade", type: "text", required: true },
      ].map(({ label, name, type, required }) => (
        <div className="mb-4" key={name}>
          <label className="block text-sm mb-1">{label} {required && "*"}</label>
          <input
            type={type}
            name={name}
            value={(form as any)[name]}
            onChange={handleChange}
            required={required}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
        </div>
      ))}

      <div className="mb-6">
        <label className="block text-sm mb-1">Observações</label>
        <textarea
          name="observacoes"
          value={form.observacoes}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
          rows={3}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-md text-sm transition"
      >
        + Cadastrar Beneficiário
      </button>
    </form>
  )
}
