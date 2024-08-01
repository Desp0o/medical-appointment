import "./doctors.css";
import AddNewDoctor from "./AddNewDoctor";
import DocCard from "./DocCard";
import { Key } from "react";
import { UseDoctorDataBaseHook } from "../../hooks/UseDoctorDataBase";


const Doctors = () => {
    const { docDb } = UseDoctorDataBaseHook()

    return (
        <div className="doctors_main_page">
            <AddNewDoctor />
            <div className="doctor_map">
                {docDb.length > 0 ? (
                    docDb.map((doc, index: Key) => (
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
                    <p>No doctors available, please add a new one</p>
                )}
            </div>
        </div>
    );
};

export default Doctors;
