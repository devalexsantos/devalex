'use client'

import Project from '@/components/Project'
import { Navigation, Pagination } from 'swiper/modules'
import { projects } from '@/mocks/projects'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import IconArrowLeftCircle from '@/components/icons/IconLeftArrow'

export default function FeaturedProjects() {
  return (
    <div className="mt-4 flex flex-col gap-3">
      <h2 className="text-2xl font-bold mb-2">
        Projetos legais que criei ou participei
      </h2>
      <div className="flex flex-wrap gap-2 justify-center sm:justify-normal items-start">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={-50}
          slidesPerView={3}
          navigation={{
            nextEl: '.next-element-swiper',
            prevEl: '.prev-element-swiper',
          }}
          loop
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            680: {
              slidesPerView: 3,
              spaceBetween: -50,
            },
          }}
        >
          <div className="w-full flex gap-3 justify-between mt-4 pl-3">
            <div className="prev-element-swiper pointer flex items-center cursor-pointer">
              <IconArrowLeftCircle
                width={28}
                height={28}
                className="opacity-25 hover:opacity-100"
              />
            </div>
            <div className="next-element-swiper pointer flex items-center cursor-pointer rotate-180">
              <IconArrowLeftCircle
                width={28}
                height={28}
                className="opacity-25 hover:opacity-100"
              />
            </div>
          </div>
          {projects.map((item) => (
            <SwiperSlide key={item.id}>
              <Project project={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
