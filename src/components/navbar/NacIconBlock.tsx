import React, { ReactNode } from 'react'

interface NacIconBlockProps {
    child: ReactNode
}

const NacIconBlock:React.FC<NacIconBlockProps> = ({child}) => {
  return (
    <div className='NacIconBlock'>
        {child}
    </div>
  )
}

export default NacIconBlock