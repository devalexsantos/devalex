import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import Image from 'next/image'

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
      <HoverCardContent>Veja o código fonte deste site.</HoverCardContent>
    </HoverCard>
  )
}
