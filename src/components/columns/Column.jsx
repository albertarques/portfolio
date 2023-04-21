import React from 'react'

export default function Column({children, bg, className}) {
  if(className){
    return (
      <div className={[`w-full px-4 ${bg} ${className}`]}>
        {children}
      </div>
    )  
  }
  return (
    <div className={[`w-full px-4 ${bg}`]}>
      {children}
    </div>
  )
}