import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LogIn } from "lucide-react"

export function Navbar() {
  return (
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
                  <Link href="#impacto" className="text-lg font-semibold text-muted-foreground hover:text-foreground transition">
                    Impacto
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="#sobre" className="text-lg font-semibold text-muted-foreground hover:text-foreground transition">
                    Sobre
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="#contato" className="text-lg font-semibold text-muted-foreground hover:text-foreground transition">
                    Contato
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="flex items-center gap-2 text-xl bg-blue-500 h-10">
            <LogIn size={14} />
            Entrar
          </Button>
        </div>
      </div>
    </header>
  );
}
