import AvatarBox from "@/components/AvatarBox"
import Bio from "@/layout/Bio"
import FeaturedProjects from "@/layout/FeaturedProjects"
import Image from "next/image"


export default function Home() {
  return (
    <main className='m-auto max-w-5xl flex flex-col p-4'>
      <div className="flex flex-col md:flex-row">
        <div>
          <AvatarBox />
          <Bio />
        </div>
        <div>
          <Image src="/assets/dev-alex-santos.png" width={560} height={560} alt="Foto de Alex Santos" />
        </div>
      </div>
      <FeaturedProjects />
    </main>
  )
}
