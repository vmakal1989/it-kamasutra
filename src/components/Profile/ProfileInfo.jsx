import React from 'react';
import s from "./Profile.module.css";

const ProfileInfo = ({profile,setProfileEditMode}) => {
    return (
        <div>
            <div className={s.name}>
                <h3>{profile.fullName}</h3>
            </div>
            <div className={s.profileInfo}>
                <div >
                    <b>About Me: </b> {profile.aboutMe}
                </div>
                <div >
                    <b>LookingForAJob: </b> {profile.lookingForAJob ? 'Yes' : 'No'}
                </div>
                <div >
                    <b>Skills: </b>{profile.lookingForAJobDescription}
                </div>
                <div >
                    <b>Contacts: </b>{Object.keys(profile.contacts).map(key =>
                        <div key={key} className={s.contact}>
                            <b>{key}: </b> {profile.contacts[key]}
                        </div>
                    )}
                </div>
            </div>
            <button onClick={()=>{setProfileEditMode(true)}}>edit</button>
        </div>
    )
};

export default ProfileInfo