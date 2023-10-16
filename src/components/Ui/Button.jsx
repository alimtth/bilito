import React from 'react'

function Button({children,variant = "outline",...props}) {
    
const variants = {
    fill:"rounded-lg px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 ",
    outline:"border border-blue-500 text-blue-500 hover:border-blue-600 hover:text-blue-600 font-sans",
}

  return (
  <button className={`p-4 rounded font-serif ${variants[variant]}`} {...props}>{children}</button>
 
  )
}

export default Button