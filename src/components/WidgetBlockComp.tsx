import React, { ReactNode } from 'react'

interface WidgetBlockCompProps {
    icon: ReactNode,
    text: string,
    quantity: number,
    isFiled: Boolean,
}

const WidgetBlockComp:React.FC<WidgetBlockCompProps> = ({icon, text, quantity, isFiled}) => {
  return (
    <div className={isFiled ? "widget_1_block" : "widget_1_block transparent"}>
            <div className="widget_1_block_top">
                {icon}
                <p>{text}</p>
            </div>

            <p className="patient_number">{quantity}</p>
        </div>
  )
}

export default WidgetBlockComp