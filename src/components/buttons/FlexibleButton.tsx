import React from 'react'
import "./buttonsStyles.css"

interface FlexibleButtonProps {
    btnWidth?: number;
    btnHeight?: number;
    btnText: string;
}

const FlexibleButton:React.FC<FlexibleButtonProps> = ({btnWidth, btnHeight, btnText}) => {
  return (
    <button className='flexible_btn' style={{width: `${btnWidth}px`, height:`${btnHeight}px`}}>
        <p>{btnText}</p>
    </button>
  )
}

export default FlexibleButton