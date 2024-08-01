import { deleteDoc, doc } from 'firebase/firestore';
import { db } from "../../firebaseConfig";
import { useDispatch } from 'react-redux';
import { setActivateTrigger } from '../../redux/triggerSlice';


export const DeleteDoctor = () => {
    const dispatch = useDispatch()

    const docDeleteHandler = async (docIdToDelete: string) => {
        if (docIdToDelete) {
            try {
                const docRef = doc(db, "doctors", docIdToDelete);
                await deleteDoc(docRef);
                dispatch(setActivateTrigger());
            } catch (e) {
                console.error("Error deleting document: ", e);
            }
        }
    };

  return { docDeleteHandler }
}
