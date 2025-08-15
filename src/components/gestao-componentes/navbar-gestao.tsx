import Link from "next/link"

import { User } from "lucide-react"
import { Button } from "@/components/ui/button";

export function NavbarGestao() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-xl">
      <div className="h-24 flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/gestao" className="flex items-center gap-4">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-full">
            <span className="text-white text-lg">🤍</span>
          </div>
          <div className="flex flex-col space-y-1 mt-2">
            <span className="text-xl font-bold leading-none">Lacre Fraterno</span>
            <span className="text-sm text-muted-foreground -mt-1">
              Transformando lacres em esperança
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">Bem-vindo, Administrador</span>
          <div className="bg-blue-500 p-2 rounded-full">
            <User className="text-white w-6 h-6" />
          </div>
          <Link href="/">
            <Button
                className="flex items-center gap-6 text-lg bg-blue-500 h-8"
              >
                Sair
            </Button>
          </Link>
        </div>
      </div>
      {/* Linha azul abaixo da navbar */}
      <div className="w-full h-1 bg-blue-400"></div>
    </header>
  );
}
