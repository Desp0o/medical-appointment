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

            <div className='overlay' />
            <div className='new_doc_add_modal'>
                    <form className='new_doc_form'>
                        <input type='text' name="name" placeholder='doc name' className='new_doc_input'/>
                        <input type='text' name="profile" placeholder='doc profile' className='new_doc_input'/>
                    </form>
            </div>
        </>
    )
}

export default AddNewDoctor