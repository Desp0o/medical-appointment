import "./doctors.css";
import AddNewDoctor from "./AddNewDoctor";
import DocCard from "./DocCard";
import { UseDoctorDataBaseHook } from "../../hooks/UseDoctorDataBase";
import { useState } from "react";


const Doctors = () => {
    const { docDb } = UseDoctorDataBaseHook()

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handlePanelVisibility = (clickedIndex: number) => {
        if (clickedIndex === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(clickedIndex); 
        }
    };


    return (
        <div className="doctors_main_page">
            <AddNewDoctor />
            <div className="doctor_map">
                {docDb.length > 0 ? (
                    docDb.map((doc, index: number) => (
                        <DocCard
                            activeIndex={activeIndex}
                            index={index}
                            key={index}
                            id={doc.id}
                            name={doc.name}
                            avatar={doc.avatar}
                            workExp={doc.workExp}
                            profile={doc.profile}
                            handlePanelVisibility={handlePanelVisibility}
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
