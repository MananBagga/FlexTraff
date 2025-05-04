import React from 'react'
import { homeVideo } from '../../assets'

const Computers = () => {
  return (
    <div className="mt-6 w-full flex justify-center px-2 sm:px-4">
      <video
        controls
        className="w-full max-w-[55rem] rounded-lg shadow-lg"
        style={{ maxHeight: '60vh', objectFit: 'cover' }}
      >
        <source src={homeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Computers
