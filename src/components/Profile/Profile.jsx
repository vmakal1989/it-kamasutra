import React, {useState} from 'react';
import s from './Profile.module.css';
import Preloader from "../common/Preloader/Preloader";
import ProfileInfo from "./ProfileInfo";
import ReduxFormProfileInfo from "./ProfileInfoForm";

const Profile = ({activateEditMode,deActivateEditMode ,onChangeStatus, profile, editMode, status,
                 profilePreloaderStatus, addPhotoFile}) => {

    const photoFile = (e) => {
        if(e.target.files.length) {
            addPhotoFile(e.target.files[0]);
        }
    };

    let [currentWindow, setCurrentWindow] = useState(0);
    let [profileEditMode, setProfileEditMode] = useState(false);

    if(profilePreloaderStatus === 1) {
        return <div className={s.menu}>
            <div className={s.preloader}>
                <Preloader/>
            </div>
        </div>
    } else if(currentWindow === 1) {
        return <div className={s.menu}>
            <input type="file" onChange={photoFile}/>
            <button onClick={() => {setCurrentWindow(0)}}>Close</button>
        </div>
    }

    const onSubmit = (formData) => {
        console.log(formData);
    };

    return (
      <div className={s.menu}>
          { profile &&
              <div>
                  <div className={s.status}>
                      {!editMode &&
                          <h5 onDoubleClick={activateEditMode}>{status}</h5>
                      }
                      {editMode &&
                          <input onChange={onChangeStatus} autoFocus={true} onBlur={deActivateEditMode} value={status}/>
                      }
                  </div>
                  <div className={s.image} >
                      <img src={profile.photos.large} onClick={()=>{setCurrentWindow( 1)}}/>
                  </div>
                  {!profileEditMode && <ProfileInfo profile={profile} setProfileEditMode={setProfileEditMode}/>}
                  {profileEditMode && <ReduxFormProfileInfo initialValues={profile} profile={profile}
                                                            setProfileEditMode={setProfileEditMode}
                                                            onSubmit={onSubmit}/>}
              </div> }
          { !profile &&
            <div>{"Advertising"}</div>
          }
      </div>
    )
};

export default Profile;