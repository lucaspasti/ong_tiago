import { useState, useEffect } from "react"
import { Equipamento } from "./form-equip"

type Props = {
  equipamento: Equipamento
  onSalvar: (equipamentoEditado: Equipamento) => void
  onFechar: () => void
}

export function FormEditarEquip({ equipamento, onSalvar, onFechar }: Props) {
  const [form, setForm] = useState(equipamento)

  useEffect(() => {
    setForm(equipamento)
  }, [equipamento])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
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
        <h2 className="text-lg font-semibold mb-4">Editar Equipamento</h2>

        <label className="block text-sm mb-1">Tipo de Equipamento</label>
        <select name="tipo" value={form.tipo} onChange={handleChange}
          className="mb-4 w-full border px-3 py-2 text-sm rounded bg-gray-100">
          <option value="Muleta">Muleta</option>
          <option value="Cadeira de Rodas">Cadeira de Rodas</option>
          <option value="Andador">Andador</option>
        </select>

        <label className="block text-sm mb-1">Descrição/Modelo</label>
        <input name="descricao" value={form.descricao} onChange={handleChange}
          className="mb-4 w-full border px-3 py-2 text-sm rounded" />

        <label className="block text-sm mb-1">Código/ID</label>
        <input name="codigo" value={form.codigo} onChange={handleChange}
          className="mb-4 w-full border px-3 py-2 text-sm rounded" />

        <label className="block text-sm mb-1">Estado</label>
        <select name="estado" value={form.estado} onChange={handleChange}
          className="mb-6 w-full border px-3 py-2 text-sm rounded bg-gray-100">
          <option value="Excelente">Excelente</option>
          <option value="Bom">Bom</option>
          <option value="Regular">Regular</option>
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
