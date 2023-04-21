import React from 'react'

function Button({children}) {
  return (
    <button className='border rounded-2xl m-3 py-2 px-4'>{children}</button>
  )
}

export default Button