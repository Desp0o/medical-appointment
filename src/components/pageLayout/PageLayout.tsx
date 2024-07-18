import React, { ReactNode } from 'react'
import "./PageLayout.css"

interface PageLayoutProps{
    children: ReactNode
}

const PageLayout:React.FC<PageLayoutProps> = ({children}) => {
  return (
    <div className='PageLayout'>
        {children}
    </div>
  )
}

export default PageLayout