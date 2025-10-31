import React from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const Logo = ({className , spanDesign}:{className?:string , spanDesign?:string}) => {
  return (
    <Link href={"/"} className='group'>
        <h2 className={cn("text-3xl font-bold text-green-900 hoverEffect group-hover:text-green-600", className)}>
            SHOPCAR<span className={cn("text-[2.1rem] font-bold text-green-600 hoverEffect group-hover:text-green-900", spanDesign)} >T</span>
        </h2>
    </Link>
  )
}

export default Logo