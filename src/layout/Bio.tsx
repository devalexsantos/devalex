import SubTitle from "@/components/SubTitle"
import Title from "@/components/Title"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Bio(){
    return(
        <div className="max-w-[470px]">
            <Title text="Desenvolvedor Front, comunicador e amante de café ☕" />
            <SubTitle>
            <p>Meu nome é Alex Santos, tenho 30 anos e trabalho há mais de 10 como 
            {' '}<Popover>
                <PopoverTrigger className="underline">Desenvolvedor Front</PopoverTrigger>
                <PopoverContent className="text-zinc-700">Mais de 05 anos de experiência no Desenvolvimento de <strong>Sites Institucionais</strong>, <strong>Landing Pages</strong>, <strong>E-Commerces</strong>, <strong>Dashboards Corporativos</strong>, etc.</PopoverContent>
            </Popover>
                , 
                {' '}<Popover>
                <PopoverTrigger className="underline">Designer</PopoverTrigger>
                <PopoverContent className="text-zinc-700"><strong>Certificado Adobe</strong> em todas as ferramentas de Design Gráfico da Adobe, domínio completo do <strong>Figma</strong> e mais de <strong>10 anos</strong> atuando com tarefas de Design.</PopoverContent>
            </Popover>
                , Vendedor e resolvedor de problemas.</p>
            <p>Tenho domínio em Javascript/Typescript e tenho facilidade em trabalhar com React/Next.js Figma, Adobe Collection.</p>
            </SubTitle>
        </div>
    )
}