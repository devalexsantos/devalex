import AvatarBox from "@/components/AvatarBox"
import Bio from "@/layout/Bio"
import FeaturedProjects from "@/layout/FeaturedProjects"


export default function Home() {
  return (
    <main className='m-auto max-w-5xl flex flex-col p-4'>
      <AvatarBox />
      <Bio />
      <FeaturedProjects />
    </main>
  )
}
