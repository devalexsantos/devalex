import SubTitle from '@/components/SubTitle'
import Title from '@/components/Title'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Bio() {
  return (
    <div className="max-w-[470px]">
      <Title text="Desenvolvedor Front-end, eu crio soluções através da tecnologia." />
      <SubTitle>
        <p>
          Olá, meu nome é Alex Santos, tenho 30 anos e trabalho há{' '}
          <strong>mais de 10</strong> como{' '}
          <Popover>
            <PopoverTrigger className="underline">
              Desenvolvedor Front-end
            </PopoverTrigger>
            <PopoverContent className="text-zinc-700">
              Mais de 05 anos de experiência no Desenvolvimento de{' '}
              <strong>Sites Institucionais</strong>,{' '}
              <strong>Landing Pages</strong>, <strong>E-Commerces</strong>,{' '}
              <strong>Dashboards Corporativos</strong>, etc.
            </PopoverContent>
          </Popover>{' '}
          e{' '}
          <Popover>
            <PopoverTrigger className="underline">Designer</PopoverTrigger>
            <PopoverContent className="text-zinc-700">
              <strong>Certificado Adobe</strong> em todas as ferramentas de
              Design Gráfico da Adobe, domínio completo do{' '}
              <strong>Figma</strong> e mais de <strong>10 anos</strong> atuando
              com tarefas de Design.
            </PopoverContent>
          </Popover>
          .
        </p>
        <p className="mt-4">
          Resolvo problemas de empresas através da tecnologia. Estou sempre
          criando algum site, landing page, loja virtual, ou qualquer outro
          projeto de internet.
        </p>
        <Link
          href="https://wa.me/5571999937809?text=Ol%C3%A1%2C+vi+seu+site+pessoal+e+gostaria+de+conversar+mais+com+voc%C3%AA+%3A%29"
          target="_blank"
        >
          <Button
            variant="outline"
            className="text-[#1A1A1A] rounded-full mt-4 gap-2"
          >
            <Image
              src="./assets/whatsapp-icon.svg"
              width={22}
              height={22}
              alt="Logo do WhatsApp"
            />
            Vamos construir algo juntos?
          </Button>
        </Link>
      </SubTitle>
    </div>
  )
}
