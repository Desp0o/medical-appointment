import { useState } from 'react'
import { updateDoc, doc } from 'firebase/firestore';
import { db } from "../../firebaseConfig";
import FlexibleButton from '../../components/buttons/FlexibleButton';
import CloseIcon from '../../assets/CloseIcon';
import { useDispatch } from 'react-redux';
import { setUpdateDoctorInfo } from '../../redux/UpdateDocSlicer';
import { useFetchedDoctorHook } from '../../hooks/useFetchedDoctorHook';
import { setActivateTrigger } from '../../redux/triggerSlice';


const UpdateDoctor = () => {
    const dispatch = useDispatch()
    const { doctorForEdit } = useFetchedDoctorHook()

    const [docInfo, setDocInfo] = useState({
        avatar: doctorForEdit.avatar,
        name: doctorForEdit.name,
        profile: doctorForEdit.profile,
        workExp: doctorForEdit.workExp
    })


    const updateDoctor = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const docRef = doc(db, "doctors", doctorForEdit.docId);
            await updateDoc(docRef, docInfo);

            dispatch(setActivateTrigger())
            dispatch(setUpdateDoctorInfo({ isFetched: false }))
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    };


    return (
        <>
            <div
                className='overlay'
                onClick={() => dispatch(setUpdateDoctorInfo({ isFetched: false }))}
            />
            <div className='new_doc_add_modal'>
                <form className='new_doc_form' onSubmit={updateDoctor}>
                    <span className='add_modal_close' onClick={() => dispatch(setUpdateDoctorInfo({ isFetched: false }))}>
                        <CloseIcon />
                    </span>

                    <p style={{ textAlign: "center", fontWeight: "500" }}>Update Doctor info</p>
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

                    <span style={{ marginTop: "8px" }} />
                    <FlexibleButton btnHeight={40} btnText='Submit' />
                </form>
            </div>

        </>
    )
}

export default UpdateDoctor