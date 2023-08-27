import Project from '@/components/Project'

export default function FeaturedProjects() {
  const projects = [
    {
      id: 0,
      title: 'Salvador Bus',
      shortDescription:
        'Site multilíngue feito para a empresa Salvador Bus. Empresa oficial de turismo em Salvador-BA.',
      longDescription:
        'Site multilíngue feito para a empresa Salvador Bus. Empresa oficial de turismo em Salvador-BA.',
      url: 'https://instagram.com/alexnsjr',
      image: {
        url: 'https://github.com/devalexsantos.png',
      },
    },
    {
      id: 1,
      title: 'Revenda Login',
      shortDescription:
        'Site de Revendas feito para a Login Informática, grande empresa de informática de Salvador-BA.',
      longDescription:
        'Site multilíngue feito para a empresa Salvador Bus. Empresa oficial de turismo em Salvador-BA.',
      url: 'https://instagram.com/alexnsjr',
      image: {
        url: 'https://github.com/devalexsantos.png',
      },
    },
  ]

  return (
    <div className="mt-4 flex flex-col gap-3">
      <h2 className="text-2xl font-bold mb-2">
        Projetos legais que participei
      </h2>
      <div className="flex flex-wrap gap-2 justify-center sm:justify-normal">
        {projects.map((item) => (
          <Project project={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
