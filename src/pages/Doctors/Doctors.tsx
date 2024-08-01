import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useEffect, useState } from "react";
import "./doctors.css"
import AddNewDoctor from "./AddNewDoctor";
import DocCard from "./DocCard";
import { UseTriggerHook } from "../../hooks/UseTriggerHook";

interface Doctor {
    id: string;
    [key: string]: any; // Allow any additional fields
}

const Doctors = () => {
    const [docDb, setDocDb] = useState<Doctor[]>([]);
    const { activateTrigger } = UseTriggerHook()

    const getDataBase = async () => {
        const collectionRef = collection(db, "doctors");
        const querySnapshot = await getDocs(collectionRef);

        if (!querySnapshot.empty) {
            const documents: Doctor[] = [];
            querySnapshot.forEach((doc) => {
                documents.push({ id: doc.id, ...doc.data() });
            });
            setDocDb(documents);
            console.log(documents.length);
            
        } else {
            console.log("No documents found!");
            setDocDb([]);
        }
    };

    useEffect(() => {
        getDataBase();
        console.log(docDb);
    }, [activateTrigger]);



    return (
        <div className="doctors_main_page">
            <AddNewDoctor />
            <div className="doctor_map">
                {docDb.length > 0 ? (
                    docDb.map((doc, index) => (
                        <DocCard 
                            key={index}
                            id={doc.id} 
                            name={doc.name} 
                            avatar={doc.avatar} 
                            workExp={doc.workExp} 
                            profile={doc.profile} 
                        />
                    ))
                ) : (
                    <p>No doctors available please add new one</p>
                )}
            </div>
        </div>
    )
}

export default Doctors
