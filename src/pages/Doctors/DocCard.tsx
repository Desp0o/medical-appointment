import React, { useState } from 'react';
import FlexibleButton from '../../components/buttons/FlexibleButton';
import { DeleteDoctor } from './DeleteDoctor';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

interface DocProps {
    id: string;
    name: string;
    avatar: string;
    workExp: number;
    profile: string;
    index: number;
    activeIndex: number | null;
    handlePanelVisibility: (index: number) => void;
}

const DocCard: React.FC<DocProps> = ({ id, avatar, name, profile, workExp, index, activeIndex, handlePanelVisibility }) => {
    const { docDeleteHandler } = DeleteDoctor();
    const [doctor, setDoctor] = useState<any>(null); 

    const getSingleDocInfo = async () => {
        try {
            const docRef = doc(db, "doctors", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setDoctor(docSnap.data());
            } else {
                console.log("No such document!");
            }
        } catch (e) {
            
            console.error("Error fetching document: ", e);
        } finally {
            console.log(doctor);
        }
    }

    return (
        <div className="doc_card" key={id}>
            <div className='setting_dots_style'>
                <p onClick={() => handlePanelVisibility(index)}>. . .</p>

                {activeIndex === index && (
                    <div className='setting_panel'>
                        <p className='setting_pannel_paragraph' onClick={getSingleDocInfo}>Edit Doctor</p>
                        <p className='setting_pannel_paragraph del' onClick={() => docDeleteHandler(id)}>Delete Doctor</p>
                    </div>
                )}
            </div>
            <img src={avatar} alt="doc image" className="doc_avatar" />

            <div className="doc_desc">
                <h3 className="doc_name">{name}</h3>
                <h4 className="doc_profile">{profile}</h4>
                <h4 className="doc_profile">{workExp} years of experience</h4>
            </div>

            <FlexibleButton btnText={'Book now'} btnHeight={30} />
        </div>
    );
};

export default DocCard;
