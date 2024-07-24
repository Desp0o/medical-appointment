import { useState } from 'react'
import AddCrossIcon from "../../assets/AddCrossIcon";

const AddNewDoctor = () => {
    const [bgHandler, setBgHandler] = useState("add_new_doc")

    const mouseDownHandler = () => {
        setBgHandler("add_new_doc active")
    }

    const mouseUpHandler = () => {
        setBgHandler("add_new_doc")
    }
    return (
        <>
            <div className={bgHandler} onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler}>
                <p className="add_new_doc_para">add new doctor</p>
                <AddCrossIcon />
            </div>
        </>
    )
}

export default AddNewDoctor