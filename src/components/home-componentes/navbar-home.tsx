"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

// shadcn dialog
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (usuario === "admin" && senha === "admin") {
      setErro("");
      setOpen(false);
      router.push("/gestao");
    } else {
      setErro("Usuário ou senha inválidos.");
    }
  }

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white shadow-xl">
        <div className="h-24 flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-4">
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

          <div className="flex flex-row space-x-5">
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="flex gap-6">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#impacto"
                      className="text-lg font-semibold text-muted-foreground hover:text-foreground transition"
                    >
                      Impacto
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#sobre"
                      className="text-lg font-semibold text-muted-foreground hover:text-foreground transition"
                    >
                      Sobre
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#contato"
                      className="text-lg font-semibold text-muted-foreground hover:text-foreground transition"
                    >
                      Contato
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              className="flex items-center gap-2 text-xl bg-blue-500 h-10"
              onClick={() => setOpen(true)}
            >
              <LogIn size={14} />
              Entrar
            </Button>
          </div>
        </div>
      </header>

      {/* Modal de login */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-full max-w-sm p-6">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">Entrar</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="grid gap-3 mt-2">
            <input
              type="text"
              placeholder="Usuário"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {erro && (
              <p className="text-red-600 text-sm mt-1">{erro}</p>
            )}

            <Button
              type="submit"
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2"
            >
              Acessar
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
