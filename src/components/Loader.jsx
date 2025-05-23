import React from 'react'

const Loader = () => {
  return (
    <div className='text-black flex justify-center items-center h-full'>
      <div className='border-4 w-10 h-10 scale-200 rounded-full border-red-300 animate-spin border-t-transparent'></div>
    </div>
  )
}

export default Loader