import React from 'react'

interface DocumentsLayoutProps{
    children:React.ReactNode
}

function DocumentsLayout({children}:DocumentsLayoutProps) {
  return (
    <div className='flex flex-col gap-y-4'>
      {children}
    </div>
  )
}

export default DocumentsLayout
