import React from 'react';
import s from "./Profile.module.css";
import {reduxForm} from "redux-form";
import {createField, FormsControls} from "../common/FormsControls/FormControls";

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
                        <b>About Me:</b> {createField(null,'aboutMe',FormsControls,null,
                        'textarea',[],null)}
                    </div>
                    <div>
                        <b>LookingForAJob:</b> {createField(null,'lookingForAJob',FormsControls,null,
                            'input',[],'checkBox')}
                    </div>
                    <div >
                        <b>Skills: </b>{createField(null,'lookingForAJobDescription',FormsControls,null,
                        'textarea',[],null)}
                    </div>
                    <div >
                        <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                         return <div className={s.contact} key={key}>
                            <b>{key}: </b> {createField(null,'contacts.'+ key,FormsControls,key,
                             'input',[],null)}
                        </div>
                        })}
                    </div>
                </div>
                <button>
                    save
                </button>
            </form>
            <button onClick={()=>{setProfileEditMode(false)}}>back</button>
        </div>
    )
};


const ProfileInfoReduxForm = reduxForm({form: 'profileInfo'})(ProfileInfoForm);

export default ProfileInfoReduxForm;