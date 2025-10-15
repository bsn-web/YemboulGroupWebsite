'use client'

import { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

const projects = [
    { title: 'Events', image: '/images/services/Events.jpg' },
  { title: 'Interior Workspace Development', image: '/images/services/Interior design.jpg' },
  { title: 'Sanitization', image: '/images/services/Désinféctation.jpg' },
  { title: 'Cleaning', image: '/images/services/Cleaning2.jpg' },
  { title: 'Catering', image: '/images/services/Catering2.jpg' },
  { title: 'Landscaping', image: '/images/services/Landscaping.png' },
  { title: 'Car Rental', image: '/images/services/Location de voiture.jpg' },
  { title: 'Safety & Security System', image: '/images/services/Security.jpg' },
  { title: 'IT & Network', image: '/images/services/IT network.jpg' },
  { title: 'Maintenance', image: '/images/services/Maintenance.jpg' },
  { title: 'HVAC', image: '/images/services/HVAC.jpg' },
  { title: 'Manutention', image: '/images/services/Manutention.jpg' },
  { title: 'Transport', image: '/images/services/Transport.jpg' },
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      (prev - 1 + projects.length) % projects.length
    )
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const getVisibleProjects = () => {
    const visible = []
    for (let i = 0; i < 4; i++) {
      visible.push(projects[(currentIndex + i) % projects.length])
    }
    return visible
  }

  return (
    <section className="relative h-screen w-full">
      <h2 className="text-5xl md:text-6xl font-bold text-center my-12 text-gray-800">
        Our Services
      </h2>
      <div className="hidden sm:flex h-full">
        {getVisibleProjects().map((project, index) => (
          <div key={index} className="relative w-1/4 h-full group overflow-hidden">
           <img
  src={project.image}
  alt={project.title}
  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 w-full h-full"
  loading={index === 0 ? "eager" : "lazy"}
/>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300 z-10" />
            <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center text-white uppercase text-xl font-semibold tracking-wide z-20">
              {project.title}
            </div>
          </div>
        ))}
      </div>

      <div className="sm:hidden relative w-full h-full">
        <div className="relative w-full h-full">
          <img
  src={projects[currentIndex].image}
  alt={projects[currentIndex].title}
  className="object-cover w-full h-full"
  loading="eager"
/>
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center text-white uppercase text-xl font-semibold tracking-wide z-20">
            {projects[currentIndex].title}
          </div>
        </div>
<div className="absolute top-1/2 left-0 right-0 flex justify-between px-6 z-30 transform -translate-y-1/2">
  <button
    onClick={handlePrev}
    className="text-white bg-black/50 p-3 rounded-full hover:bg-black/70"
  >
    <FaArrowLeft size={16} />
  </button>
  <button
    onClick={handleNext}
    className="text-white bg-black/50 p-3 rounded-full hover:bg-black/70"
  >
    <FaArrowRight size={16} />
  </button>
</div>
</div>

      <button
        onClick={handlePrev}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white items-center gap-1 hover:text-gray-300"
      >
        <FaArrowLeft size={18} />
        <span className="text-sm uppercase">Prev</span>
      </button>
      <button
        onClick={handleNext}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white items-center gap-1 hover:text-gray-300"
      >
        <span className="text-sm uppercase">Next</span>
        <FaArrowRight size={18} />
      </button>
    </section>
  )
}
