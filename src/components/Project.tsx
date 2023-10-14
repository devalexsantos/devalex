import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import IconGithub from './icons/IconGithub'

interface ProjectProps {
  project: {
    id: number
    title: string
    shortDescription: string
    longDescription: string
    url?: string
    image: {
      url: string
    }
    badges?: string[]
    source?: string
  }
}

export default function Project({ project }: ProjectProps) {
  return (
    <Dialog>
      <DialogTrigger className="text-left">
        <Card className="w-full sm:w-[300px] h-[300px] text-zinc-100 bg-zinc-900 hover:bg-zinc-950 border-zinc-800">
          <CardHeader>
            <Image
              src={project.image.url}
              width={300}
              height={200}
              alt={project.title}
              className="mb-4"
            />
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.shortDescription}</CardDescription>
          </CardHeader>
        </Card>
      </DialogTrigger>

      <DialogContent className="w-full max-w-[700px] bg-zinc-900 border-zinc-600">
        <DialogHeader>
          <Image
            src={project.image.url}
            width={700}
            height={400}
            alt={project.title}
            className="p-6 rounded-xl bg-cover"
          />
          <div className="flex flex-wrap gap-2 pb-2">
            {project.badges?.map((badge, index) => (
              <Badge key={index} variant={'secondary'}>
                {badge}
              </Badge>
            ))}
          </div>
          <DialogTitle className="flex flex-wrap gap-2 items-center">
            <div className="w-full sm:w-auto text-center">{project.title}</div>
            <div className="w-full sm:w-auto flex justify-center sm:justify-start gap-2">
              {project.url && (
                <Link
                  href={project.url}
                  target="_blank"
                  className="bg-green-600 hover:bg-green-500 font-normal text-sm px-4 py-1 rounded-full"
                >
                  ver online
                </Link>
              )}
              {project.source && (
                <Link
                  href={project.source}
                  target="_blank"
                  className="bg-zinc-800 font-normal text-sm px-4 py-1 rounded-full flex gap-2 items-center"
                >
                  <IconGithub width={22} height={22} />
                  código
                </Link>
              )}
            </div>
          </DialogTitle>
          <DialogDescription className="text-[#fff]">
            <p className="mt-4">{project.longDescription}</p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
