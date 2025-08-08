"use client"

import { useState } from "react"
import { FaHandshake } from "react-icons/fa"

export type Emprestimo = {
    beneficiario: string
    equipamento: string
    dataEmprestimo: string
    dataDevolucao: string
  }

type Props = {
adicionarEmprestimo: (e: Emprestimo) => void
}

export function FormEmprestimo({ adicionarEmprestimo }: Props) {
const [form, setForm] = useState<Emprestimo>({
beneficiario: "",
equipamento: "",
dataEmprestimo: "",
dataDevolucao: ""
})

function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
const { name, value } = e.target
setForm(prev => ({ ...prev, [name]: value }))
}

function handleSubmit(e: React.FormEvent) {
e.preventDefault()
adicionarEmprestimo(form)
setForm({
    beneficiario: "",
    equipamento: "",
    dataEmprestimo: "",
    dataDevolucao: ""
})
}

return (
<form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 w-full max-w-xs">
    <div className="flex items-center gap-2 mb-4">
    <FaHandshake className="text-green-600" />
    <h2 className="text-lg font-semibold">Novo Empréstimo</h2>
    </div>

    <label className="block text-sm mb-1">Beneficiário</label>
    <select name="beneficiario" value={form.beneficiario} onChange={handleChange}
    className="mb-3 w-full border px-3 py-2 text-sm rounded bg-gray-100">
    <option value="">Selecione o beneficiário</option>
    <option value="Maria Silva">Maria Silva</option>
    <option value="João Souza">João Souza</option>
    </select>

    <label className="block text-sm mb-1">Equipamento</label>
    <select name="equipamento" value={form.equipamento} onChange={handleChange}
    className="mb-3 w-full border px-3 py-2 text-sm rounded bg-gray-100">
    <option value="">Selecione o equipamento</option>
    <option value="MUL001 - Muleta">MUL001 - Muleta</option>
    <option value="CAD002 - Cadeira de Rodas">CAD002 - Cadeira de Rodas</option>
    </select>

    <label className="block text-sm mb-1">Data de Empréstimo</label>
    <input type="date" name="dataEmprestimo" value={form.dataEmprestimo} onChange={handleChange}
    className="mb-3 w-full border px-3 py-2 text-sm rounded" />

    <label className="block text-sm mb-1">Previsão de Devolução</label>
    <input type="date" name="dataDevolucao" value={form.dataDevolucao} onChange={handleChange}
    className="mb-6 w-full border px-3 py-2 text-sm rounded" />

    <button type="submit"
    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-md text-sm transition">
    + Registrar Empréstimo
    </button>
</form>
)
}
