import { useState, useEffect } from "react"
import { Beneficiario } from "./form-benef"

type Props = {
  beneficiario: Beneficiario
  onSalvar: (editado: Beneficiario) => void
  onFechar: () => void
}

export function FormEditarBenef({ beneficiario, onSalvar, onFechar }: Props) {
  const [form, setForm] = useState(beneficiario)

  useEffect(() => {
    setForm(beneficiario)
  }, [beneficiario])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSalvar(form)
  }

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex justify-center items-center z-50">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Editar Beneficiário</h2>

        <label className="block text-sm mb-1">Nome Completo</label>
        <input name="nome" value={form.nome} onChange={handleChange}
          className="mb-3 w-full border px-3 py-2 text-sm rounded" />

        <label className="block text-sm mb-1">CPF</label>
        <input name="cpf" value={form.cpf} onChange={handleChange}
          className="mb-3 w-full border px-3 py-2 text-sm rounded" />

        <label className="block text-sm mb-1">Telefone</label>
        <input name="telefone" value={form.telefone} onChange={handleChange}
          className="mb-3 w-full border px-3 py-2 text-sm rounded" />

        <label className="block text-sm mb-1">Email</label>
        <input name="email" value={form.email} onChange={handleChange}
          className="mb-3 w-full border px-3 py-2 text-sm rounded" />

        <label className="block text-sm mb-1">CEP</label>
        <input name="cep" value={form.cep} onChange={handleChange}
          className="mb-3 w-full border px-3 py-2 text-sm rounded" />

        <label className="block text-sm mb-1">Endereço</label>
        <input name="endereco" value={form.endereco} onChange={handleChange}
          className="mb-3 w-full border px-3 py-2 text-sm rounded" />

        <label className="block text-sm mb-1">Bairro</label>
        <input name="bairro" value={form.bairro} onChange={handleChange}
          className="mb-3 w-full border px-3 py-2 text-sm rounded" />

        <label className="block text-sm mb-1">Cidade</label>
        <input name="cidade" value={form.cidade} onChange={handleChange}
          className="mb-3 w-full border px-3 py-2 text-sm rounded" />

        <label className="block text-sm mb-1">Observações</label>
        <textarea name="observacoes" value={form.observacoes} onChange={handleChange}
          className="mb-3 w-full border px-3 py-2 text-sm rounded resize-none" rows={3} />

        <label className="block text-sm mb-1">Status</label>
        <select name="status" value={form.status} onChange={handleChange}
          className="mb-6 w-full border px-3 py-2 text-sm rounded bg-gray-100">
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
        </select>

        <div className="flex justify-end gap-2">
          <button type="button" onClick={onFechar}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            Cancelar
          </button>
          <button type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Salvar Alterações
          </button>
        </div>
      </form>
    </div>
  )
}
