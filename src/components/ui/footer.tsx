import { Rss, Camera, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white px-6 pt-16 pb-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12">
        {/* Coluna 1: Logo + descrição */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-xl">
              🤍
            </div>
            <div>
              <p className="font-bold text-white">Lacre Fraterno</p>
              <p className="text-sm text-muted">Transformando lacres em esperança</p>
            </div>
          </div>
          <p className="text-sm text-muted">
            Somos uma organização de Florianópolis dedicada a transformar lacres de alumínio
            em equipamentos médicos e ortopédicos, oferecendo empréstimos gratuitos para quem mais precisa em nossa cidade.
          </p>

          <div className="flex gap-4 mt-4 text-muted">
            <Rss />
            <Camera />
            <Phone />
          </div>
        </div>

        {/* Coluna 2: Links úteis */}
        <div>
          <h4 className="font-semibold text-white mb-4">Links Úteis</h4>
          <ul className="space-y-2 text-muted">
            <li><a href="#" className="hover:text-white">Sobre Nós</a></li>
            <li><a href="#" className="hover:text-white">Nosso Impacto</a></li>
            <li><a href="#" className="hover:text-white">Contato</a></li>
            <li><a href="#" className="hover:text-white">Como Ajudar</a></li>
          </ul>
        </div>

        {/* Coluna 3: Equipamentos */}
        <div>
          <h4 className="font-semibold text-white mb-4">Equipamentos</h4>
          <ul className="space-y-2 text-muted">
            <li><a href="#" className="hover:text-white">Muletas</a></li>
            <li><a href="#" className="hover:text-white">Cadeiras de Rodas</a></li>
            <li><a href="#" className="hover:text-white">Andadores</a></li>
            <li><a href="#" className="hover:text-white">Bengalas</a></li>
          </ul>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-zinc-700 mt-10 pt-6 text-center text-sm text-muted">
        © 2024 Lacre Fraterno. Todos os direitos reservados.
      </div>
    </footer>
  );
}