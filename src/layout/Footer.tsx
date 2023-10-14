import AvatarBox from '@/components/AvatarBox'
import IconEmailArrowRightOutline from '@/components/icons/IconEmailArrowRightOutline'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="m-auto max-w-5xl py-10 px-4">
      <Card className="bg-zinc-950 bg-opacity-50 border-none">
        <CardHeader className="items-center sm:items-start">
          <CardTitle className="text-white text-center">
            Vamos construir algo juntos?
          </CardTitle>
          <CardDescription>
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
                Conversar comigo
              </Button>
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent className="text-white flex flex-col gap-3">
          <div className="flex gap-3 justify-center sm:justify-start">
            <IconEmailArrowRightOutline width={24} height={24} />
            <span>devalexsantos@gmail.com</span>
          </div>
          <AvatarBox />
        </CardContent>
        <CardFooter className="text-zinc-400 text-sm text-center">
          <p>©Copyright - Alex Santos - 2023 - CNPJ: 49.957.258/0001-70</p>
        </CardFooter>
      </Card>
    </footer>
  )
}
