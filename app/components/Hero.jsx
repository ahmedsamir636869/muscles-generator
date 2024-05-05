import React from 'react'
import "../components/Hero.css"
import Link from 'next/link'

function Hero() {
  return (
    
    <section
    className="bg-cover bg-center h-screen"
    style={{ backgroundImage: `url("https://a.top4top.io/p_3038nserp1.jpg")` }}
  >
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
  <div className="mx-auto max-w-xl text-center">
   <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
    Muscle Generator.
    <strong className="bg-gradient-to-r from-red-600 via-red-500 to-red-300 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"> Make It Pump. </strong>
   </h1>
  
        <p className="mt-4 sm:text-xl/relaxed">
        We deliver our service in the easiest way for you to get in form.

        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
  class="group relative inline-flex items-center overflow-hidden rounded bg-gradient-to-r from-red-900 via-red-700 to-orange-700 px-8 py-3 text-white focus:outline-none focus:ring active:bg-red-500"
  href="/Muscles"
>
  <span class="absolute -end-full transition-all group-hover:end-4">
    <svg
      class="size-5 rtl:rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>

  <span class="text-sm font-medium transition-all group-hover:me-4"> Get Started </span>
</Link>
  
          <a
            className="block w-full rounded px-12 py-3 text-sm font-medium text-white shadow hover:text-red-500 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero