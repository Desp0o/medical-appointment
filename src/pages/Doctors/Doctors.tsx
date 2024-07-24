import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useEffect, useState } from "react";
import "./doctors.css"
import AddCrossIcon from "../../assets/AddCrossIcon";

interface Doctor {
    id: string;
    [key: string]: any; // Allow any additional fields
}

const Doctors = () => {
    const [docDb, setDocDb] = useState<Doctor[]>([]);

    const getDataBase = async () => {
        const collectionRef = collection(db, "doctors");
        const querySnapshot = await getDocs(collectionRef);

        if (!querySnapshot.empty) {
            const documents: Doctor[] = [];
            querySnapshot.forEach((doc) => {
                documents.push({ id: doc.id, ...doc.data() });
            });
            setDocDb(documents);
        } else {
            console.log("No documents found!");
            setDocDb([]); // Ensure state is empty if no documents are found
        }
    };

    useEffect(() => {
        getDataBase();
        console.log(docDb);
    }, []);

    return (
        <div className="doctors_main_page">
            <div className="add_new_doc">
                <p className="add_new_doc_para">add new doctor</p>
                <AddCrossIcon />
            </div>

            <div className="doctor_map">
                {docDb.length > 0 ? (
                    docDb.map((doc) => (
                        <div className="doc_card" key={doc.id}>
                            <img src={doc.avatar} alt="doc image" className="doc_avatar" />

                            <div className="doc_desc">
                                <h3 className="doc_name">{doc.name}</h3>
                                <h4 className="doc_profile">{doc.profile}</h4>
                            </div>

                            <div className="doc_booking">
                                <p>Book now</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No documents available.</p>
                )}
            </div>
        </div>
    )
}

export default Doctors
