import Project from '@/components/Project'

export default function FeaturedProjects() {
  const projects = [
    {
      id: 0,
      title: 'Login Informática',
      shortDescription: 'E-commerce',
      longDescription:
        'Projeto de Loja Virtual muito bacana feito para a Login Informática, grande empresa de comércio eletrônico do Nordeste. Fui responsável por desenvolver todo o front-end da loja e integrar com as APIs da plataforma Tray Commerce. Foi utilizado muito Vanilla JS, HTML, CSS, Bootstrap e VueJS.',
      url: 'https://login.com.br',
      image: {
        url: '/assets/projects/login.jpg',
      },
      badges: ['Vue.js', 'Javascript', 'HTML', 'CSS'],
    },
    {
      id: 1,
      title: 'Salvador Bus',
      shortDescription: 'E-commerce',
      longDescription:
        'Loja Virtual para a empresa Salvador Bus, empresa oficial da prefeitura de turismo em Salvador-BA. O desafio foi muito bacana pois o site é multilíngue (Inglês e Português). Fui responsável por desenvolver um tema e todo o front-end da página e integrar com as APIs do WooCommerce no WordPress.',
      url: 'https://salvadorbus.com.br',
      image: {
        url: '/assets/projects/salvador-bus.jpg',
      },
      badges: ['Javascript', 'HTML', 'CSS', 'PHP', 'WordPress'],
    },
    {
      id: 2,
      title: 'Adriano Costa',
      shortDescription: 'Landing Page',
      longDescription:
        'Landing Page com foco em Mobile e conversão. O Adriano queria uma página que fosse SUPER rápida e com boas práticas de SEO, então desenvolvi a página em Next.js utilizando o conceito de Server Components. Para a animação da frase inicial utilizei Framer Motion.',
      url: 'https://bpc-loas.adrianocosta.adv.br',
      image: {
        url: '/assets/projects/adriano-costa.jpg',
      },
      badges: ['Next.js', 'Typescript', 'TailwindCSS'],
      source: 'https://github.com/devalexsantos/adriano-costa-adv-bcp-loas',
    },
    {
      id: 3,
      title: 'Camarote Casa da Barra',
      shortDescription: 'E-commerce',
      longDescription: '',
      url: 'https://camarotecasadabarra.com.br',
      image: {
        url: '/assets/projects/camarote-casa-da-barra.jpg',
      },
    },
    {
      id: 4,
      title: 'Maison do Vidro',
      shortDescription: 'Site Institucional',
      longDescription: '',
      url: 'https://maisondovidro.com.br',
      image: {
        url: '/assets/projects/maison-do-vidro.jpg',
      },
    },
  ]

  return (
    <div className="mt-4 flex flex-col gap-3">
      <h2 className="text-2xl font-bold mb-2">
        Projetos legais que criei ou participei
      </h2>
      <div className="flex flex-wrap gap-2 justify-center sm:justify-normal items-start">
        {projects.map((item) => (
          <Project project={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
