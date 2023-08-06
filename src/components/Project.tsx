import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  interface ProjectProps {
    project: {
        id: number
        title: string
        shortDescription: string
        longDescription: string
        url: string
        image: {
            url: string
        }
    }
  }
    

export default function Project({project}: ProjectProps){
    return(
        <Dialog>
            <DialogTrigger className="text-left">
                <Card className="w-[300px] text-zinc-100 bg-zinc-900 hover:bg-zinc-950 border-zinc-800">
                    <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.shortDescription}</CardDescription>
                    </CardHeader>
                </Card>
            </DialogTrigger>

            <DialogContent className="bg-zinc-900 border-zinc-600" >
                <DialogHeader>
                <DialogTitle>{project.title}</DialogTitle>
                <DialogDescription>
                    {project.longDescription}
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}