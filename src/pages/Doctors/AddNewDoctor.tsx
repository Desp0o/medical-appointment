import { useEffect, useState } from 'react'
import AddCrossIcon from "../../assets/AddCrossIcon";
import FlexibleButton from '../../components/buttons/FlexibleButton';

const AddNewDoctor = () => {
    const [bgHandler, setBgHandler] = useState("add_new_doc")
    const [modalTrigger, setModalTrigger] = useState(false)
    const [docInfo, setDocInfo] = useState({
        avatar: '',
        name: '',
        profile: '',
        workExp: 0
    })

    const mouseDownHandler = () => {
        setBgHandler("add_new_doc active")
        setModalTrigger(true)
    }

    const mouseUpHandler = () => {
        setBgHandler("add_new_doc")
    }

    const docSumbitHandler = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        console.log(docInfo);
    }

    return (
        <>
            <div className={bgHandler} onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler}>
                <p className="add_new_doc_para">add new doctor</p>
                <AddCrossIcon />
            </div>

            {modalTrigger && (
                <div
                    className='overlay'
                    onClick={() => {
                        setModalTrigger(false);
                        setBgHandler("add_new_doc");
                    }}
                />
            )}            
            {
                modalTrigger && <div className='new_doc_add_modal'>
                <form className='new_doc_form' onSubmit={docSumbitHandler}>
                    <div>
                        <label className='doctor_input_labels'>Name</label>
                        <input
                            type='text'
                            name="name"
                            placeholder='doctor name'
                            className='new_doc_input'
                            value={docInfo.name}
                            onChange={(e) => setDocInfo({ ...docInfo, name: e.target.value })}
                            required
                        />

                    </div>
                    <div>
                        <label className='doctor_input_labels'>Profile</label>
                        <input
                            type='text'
                            name="profile"
                            placeholder='doctor profile'
                            className='new_doc_input'
                            value={docInfo.profile}
                            onChange={(e) => setDocInfo({ ...docInfo, profile: e.target.value })}
                            required
                        />
                    </div>

                    <div>
                        <label className='doctor_input_labels'>Work Experience</label>
                        <input
                            type='number'
                            name="workExp"
                            placeholder='doctor work experience'
                            className='new_doc_input'
                            value={docInfo.workExp}
                            onChange={(e) => setDocInfo({ ...docInfo, workExp: parseInt(e.target.value) })}
                            required
                        />
                    </div>

                    <span onClick={docSumbitHandler}>
                        <FlexibleButton btnHeight={40} btnText='Submit' />
                    </span>
                </form>
            </div>
            }
        </>
    )
}

export default AddNewDoctor