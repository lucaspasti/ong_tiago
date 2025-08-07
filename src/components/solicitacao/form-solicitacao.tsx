'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function FormularioSolicitacaoModal({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-[680px] p-8">
        <ScrollArea className="max-h-[80vh]">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold">
              Solicitar Equipamento
            </DialogTitle>
            <p className="text-center text-sm text-gray-500 mt-1">
              Preencha seus dados e nos conte sobre sua necessidade. Entraremos em contato em breve!
            </p>
          </DialogHeader>
          
          <form className="grid grid-cols-2 gap-4 mt-6">
            {/* Primeira linha */}
            <input
              placeholder="Nome Completo *"
              className="col-span-1 h-12 px-4 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              placeholder="CPF *"
              className="col-span-1 h-12 px-4 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Segunda linha */}
            <input
              placeholder="Telefone *"
              className="col-span-1 h-12 px-4 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              placeholder="Email"
              className="col-span-1 h-12 px-4 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Terceira linha */}
            <input
              placeholder="CEP *"
              className="col-span-1 h-12 px-4 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              placeholder="Endereço Completo *"
              className="col-span-1 h-12 px-4 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Quarta linha */}
            <input
              placeholder="Cidade *"
              className="col-span-1 h-12 px-4 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              className="col-span-1 h-12 px-4 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Estado *</option>
            </select>

            {/* Quinta linha */}
            <select
              className="col-span-1 h-12 px-4 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Equipamento Necessário *</option>
            </select>
            <select
              className="col-span-1 h-12 px-4 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Tempo Estimado de Uso</option>
            </select>

            {/* Sexta linha */}
            <textarea
              placeholder="Motivo da Necessidade *"
              className="col-span-2 px-4 py-3 text-sm rounded-md border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />

            {/* Sétima linha */}
            <textarea
              placeholder="Observações Adicionais"
              className="col-span-2 px-4 py-3 text-sm rounded-md border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={2}
            />

            {/* Botões */}
            <div className="col-span-2 flex justify-end gap-4 mt-4">
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="h-12 px-6 bg-gray-200 text-gray-700 font-medium rounded hover:bg-gray-300 transition"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="h-12 px-6 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
              >
                Enviar Solicitação
              </button>
            </div>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
