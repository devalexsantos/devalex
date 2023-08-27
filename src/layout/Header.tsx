import Nav from '@/components/Nav'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="m-auto max-w-5xl py-10 px-4 flex justify-between gap-8 items-center">
      <Image
        src="./assets/logo-devalex.svg"
        width={111}
        height={40}
        alt="Logo do Alex"
      />
      <Nav />
    </header>
  )
}
