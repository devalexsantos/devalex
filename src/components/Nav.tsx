import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"

export default function Nav(){
    return (
        <Menubar className="bg-zinc-800 rounded-full border-none">
            <MenubarMenu>
                <MenubarTrigger className="cursor-pointer rounded-full">
                    Início
                </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="cursor-pointer rounded-full">
                    Sobre
                </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="cursor-pointer rounded-full">
                    Posts
                </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="cursor-pointer rounded-full">
                    Projetos
                </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="cursor-pointer rounded-full">
                    Contato
                </MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    )
}