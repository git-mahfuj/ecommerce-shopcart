import { ShoppingBag } from 'lucide-react'
import React from 'react'

const Carticon = () => {
  return (
    <div className='hoverEffect hover:text-green-700 relative cursor-pointer'>
      <ShoppingBag/>
      <span className='absolute -top-1 -right-1 h-4 w-4 bg-green-700 flex justify-center rounded-full item-center text-white text-[.7rem] font-medium'>0</span>
    </div>
  )
}

export default Carticon