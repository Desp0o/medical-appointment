import { useState } from 'react'
import AddCrossIcon from "../../assets/AddCrossIcon";
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../../firebaseConfig";
import FlexibleButton from '../../components/buttons/FlexibleButton';
import CloseIcon from '../../assets/CloseIcon';
import { useDispatch } from 'react-redux';
import { setActivateTrigger } from '../../redux/triggerSlice';

const AddNewDoctor = () => {
    const dispatch = useDispatch()
    const [bgHandler, setBgHandler] = useState("add_new_doc")
    const [modalTrigger, setModalTrigger] = useState(false)
    const [docInfo, setDocInfo] = useState({
        avatar: '',
        name: '',
        profile: '',
        workExp: 0
    })

    const mouseDownHandler = () => {
        setModalTrigger(true)
    }

    const docSumbitHandler = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        console.log(docInfo);

        try {
            const collectionRef = collection(db, "doctors");
            const docRef = await addDoc(collectionRef, docInfo);
            console.log("Document written with ID: ", docRef.id);
            setModalTrigger(false)
            dispatch(setActivateTrigger())
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <>
            <div className={bgHandler} onClick={mouseDownHandler}>
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
                    <span className='add_modal_close' onClick={()=>setModalTrigger(false)}>
                        <CloseIcon />
                    </span>

                    <p style={{textAlign:"center", fontWeight:"500"}}>Doctor info</p>
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

                        <FlexibleButton btnHeight={40} btnText='Submit' />
                </form>
            </div>
            }
        </>
    )
}

export default AddNewDoctor