import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import IconInstagram from "./icons/IconInstagram"
import IconLinkedin from "./icons/IconLinkedin"
import IconGithub from "./icons/IconGithub"
import Link from "next/link"

export default function AvatarBox(){
    return(
        <div className="font-light text-zinc-400 flex flex-col justify-center items-center gap-3 md:flex-row md:justify-normal">
            <Avatar className="border border-sm border-zinc-600 w-[64px] h-[64px]">
                <AvatarImage src="https://github.com/devalexsantos.png" />
                <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <ul className="flex gap-3 text-center">
                <li className="flex gap-1 items-center"><Link href="https://www.instagram.com/alexnsjr/" target="_blank"><IconInstagram width={28} height={28}/></Link></li>
                <li className="flex gap-1 items-center"><Link href="https://www.linkedin.com/in/alex-santos-427a92205/" target="_blank"><IconLinkedin width={22} height={22}/></Link></li>
                <li className="flex gap-1 items-center"><Link href="https://github.com/devalexsantos" target="_blank"><IconGithub width={28} height={28}/></Link></li>
            </ul>
        </div>
    )
}