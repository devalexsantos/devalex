import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <HoverCard openDelay={0}>
      <HoverCardTrigger
        href="https://github.com/devalexsantos/devalex"
        target="_blank"
        className="flex gap-2 items-center"
      >
        <Image
          src="./assets/source-code.svg"
          width={24}
          height={24}
          alt="Ícone de Código Fonte"
        />
        SOURCE
      </HoverCardTrigger>
      <HoverCardContent>
        <Link
          href="https://github.com/devalexsantos/devalex"
          className="hover:underline"
          target="_blank"
        >
          Clique para ver o código fonte deste site no GitHub.
        </Link>
        <p className="text-xs mt-2">
          (React / Next.js, Typescript, Server Components, Tailwind)
        </p>
      </HoverCardContent>
    </HoverCard>
  )
}
