import React from 'react'
import FlexibleButton from '../../components/buttons/FlexibleButton';
import { DeleteDoctor } from './DeleteDoctor';

interface DocProps {
    id: string;
    name: string;
    avatar: string;
    workExp: number;
    profile: string;
}

const DocCard: React.FC<DocProps> = ({ id, avatar, name, profile, workExp }) => {

    const { docDeleteHandler } = DeleteDoctor()

    return (
        <div className="doc_card" key={id}>
            <div className='setting_dots_style' onClick={()=>docDeleteHandler(id)}>
                <p>. . .</p>
            </div>
            <img src={avatar} alt="doc image" className="doc_avatar" />

            <div className="doc_desc">
                <h3 className="doc_name">{name}</h3>
                <h4 className="doc_profile">{profile}</h4>
                <h4 className="doc_profile">{workExp} years of experience</h4>
            </div>

            <FlexibleButton btnText={'Book now'} btnHeight={30} />
        </div>
    )
}

export default DocCard

