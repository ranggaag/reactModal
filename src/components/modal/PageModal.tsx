import type React from "react"

type PageModalProps = {
  children : React.ReactNode
}

const PageModal = ({ children } : PageModalProps) => {
  return (
    <div className='absolute w-screen h-screen top-0 left-0 z-99 flex items-center justify-center bg-black/50'>
      <div className="p-6 w-90 lg:w-100 h-fit bg-gray-800 rounded-lg">
        {children}
      </div>
    </div>
  )
}

export default PageModal