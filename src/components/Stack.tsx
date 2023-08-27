import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import Image from 'next/image'

export default function Stack() {
  const stack = [
    {
      id: 0,
      title: 'React',
      image: '/assets/stack/react.svg',
    },
    {
      id: 1,
      title: 'Next.js',
      image: '/assets/stack/next.svg',
    },
    {
      id: 2,
      title: 'Typescript',
      image: '/assets/stack/typescript.svg',
    },
    {
      id: 3,
      title: 'HTML5',
      image: '/assets/stack/html.svg',
    },
    {
      id: 4,
      title: 'CSS3',
      image: '/assets/stack/css.svg',
    },
    {
      id: 5,
      title: 'HTML5',
      image: '/assets/stack/html.svg',
    },
    {
      id: 6,
      title: 'Tailwind',
      image: '/assets/stack/tailwind.svg',
    },
    {
      id: 7,
      title: 'Wordpress',
      image: '/assets/stack/wordpress.svg',
    },
    {
      id: 8,
      title: 'Servicenow',
      image: '/assets/stack/servicenow.svg',
    },
  ]

  return (
    <div className="flex flex-col gap-2">
      <div>Stack principal:</div>
      <div className="flex flex-wrap gap-2">
        {stack.map((stack) => (
          <HoverCard openDelay={0} key={stack.id}>
            <HoverCardTrigger className="flex items-center p-2 px-3 rounded-xl bg-[#fff] bg-opacity-90">
              <Image
                src={stack.image}
                width={24}
                height={24}
                alt={stack.title}
              />
            </HoverCardTrigger>
            <HoverCardContent className="w-auto">
              <p className="text-sm mt-2 text-center">{stack.title}</p>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  )
}
