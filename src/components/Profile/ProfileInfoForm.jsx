import React from 'react';
import s from "./Profile.module.css";
import {reduxForm} from "redux-form";
import {createField, FormsControls} from "../common/FormsControls/FormControls";
import Contact from "./Contact";

const ProfileInfoForm = ({profile, setProfileEditMode, handleSubmit}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Name:</h3> {createField(null,'fullName',FormsControls,null,
                        'input',[],null)}
                </div>
                <div className={s.profileInfo}>
                    <div>
                        <b>LookingForAJob:</b> {createField(null,'LookingForAJob',FormsControls,null,
                            'input',[],'checkBox')}
                    </div>
                    <div >
                        <b>Skills: </b>{createField(null,'lookingForAJobDescription',FormsControls,null,
                        'textarea',[],null)}
                    </div>
                    <div >
                        <b>Contacts: </b>{Object.keys(profile.contacts).map(key => <Contact contactName={key}
                                                                                    contactLink={
                                        createField(null,key,FormsControls,null,
                                                    'input',[],null, profile.contacts[key])}/>)}
                    </div>
                </div>
                <button onClick={()=>{setProfileEditMode(false)}}>
                    save
                </button>
            </form>
            <button onClick={()=>{setProfileEditMode(false)}}>back</button>
        </div>
    )
};


const ProfileInfoReduxForm = reduxForm({form: 'profileInfo'})(ProfileInfoForm);

export default ProfileInfoReduxForm;