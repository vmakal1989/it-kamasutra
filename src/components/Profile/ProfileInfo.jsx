import React from 'react';
import s from "./Profile.module.css";
import Contact from "./Contact";

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
                    <b>LookingForAJob: </b> {profile.lookingForAJob}
                </div>
                <div >
                    <b>Skills: </b>{profile.lookingForAJobDescription}
                </div>
                <div >
                    <b>Contacts: </b>{Object.keys(profile.contacts).map(key => <Contact key={key} contactName={key}
                                                                                        contactLink={profile.contacts['key']}/>)}
                </div>
            </div>
            <button onClick={()=>{setProfileEditMode(true)}}>edit</button>
        </div>
    )
};

export default ProfileInfo