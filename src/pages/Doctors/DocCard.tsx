import React from 'react'

interface DocProps {
    id: number;
    name: string;
    avatar: string;
    workExp: number;
    profile: string;
}

const DocCard: React.FC<DocProps> = ({id, avatar, name, profile, workExp}) => {
    return (
        <div className="doc_card" key={id}>
            <img src={avatar} alt="doc image" className="doc_avatar" />

            <div className="doc_desc">
                <h3 className="doc_name">{name}</h3>
                <h4 className="doc_profile">{profile}</h4>
                <h4 className="doc_profile">{workExp} years of experience</h4>
            </div>

            <div className="doc_booking">
                <p>Book now</p>
            </div>
        </div>
    )
}

export default DocCard

