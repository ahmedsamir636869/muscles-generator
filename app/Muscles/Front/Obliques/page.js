import React from 'react'
import './page.css'


function chest() {
  return (
    <div className="workout-container">
      <div className='workout'>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
        alt=""
        src="https://planfit-images.s3.ap-northeast-2.amazonaws.com/training-videos-watermarked/5019.mp4"
        className="w-full h-full object-cover"
        />

  <div className="bg-white p-4 sm:p-6">
    <a href="#">
      <h3 className="mt-0.5 text-lg text-gray-900">Hand Side Plank</h3>
    </a>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li>Press your hand into the ground and pick up your hip off the ground.</li>
      <br></br>
      <li>Open your chest and maintain this position for the allotted amount of time</li>
      <br></br>
      <li>Open your chest and maintain </li>
    </ol>
  </div>
      </article></div>

      <div className='workout'>
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt=""
    src=""
    className="h-full w-full object-cover"
  />

  <div className="bg-white p-4 sm:p-6">

    <h3 className="mt-0.5 text-lg text-gray-900"></h3>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li> </li>
      <br></br>
      <li></li>
      <br></br>
      <li></li>
    </ol>
    
    {/* <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      
    </p> */}
  </div>
      </article>
      </div>

      <div className='workout'>
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <img
        alt=""
        src=""
        className="h-full w-full object-cover"
      />

        <div className="bg-white p-4 sm:p-6">

    <h3 className="mt-0.5 text-lg text-gray-900"></h3>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li> </li>
      <br></br>
      <li></li>
      <br></br>
      <li></li>
    </ol>
    
    {/* <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      
    </p> */}
  </div>
      </article>
      </div>

      <div className='workout'>
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt=""
    src=""
    className="h-full w-full object-cover"
  />

  <div className="bg-white p-4 sm:p-6">

    <h3 className="mt-0.5 text-lg text-gray-900"></h3>

    <ol className='mt-2 text-sm text-gray-500 pl-2'>
      <li> </li>
      <br></br>
      <li></li>
      <br></br>
      <li></li>
    </ol>
    
    {/* <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      
    </p> */}
  </div>
      </article>
      </div>

      
      
    </div>
  )
}

export default chest