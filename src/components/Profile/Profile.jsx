import React from 'react';
import style from './Profile.module.css';
import Preloader from "../common/Preloader/Preloader";

const Profile = ({activateEditMode,deActivateEditMode ,onChangeStatus, profile, editMode, status, profilePreloaderStatus}) => {
    if(profilePreloaderStatus === 1) {
        return <div className={style.menu}>
            <div className={style.preloader}>
                <Preloader/>
            </div>
        </div>
    }
    return (
      <div className={style.menu}>
          { profile &&
              <div>
                  <div className={style.status}>
                      {!editMode &&
                          <h5 onDoubleClick={activateEditMode}>{status}</h5>
                      }
                      {editMode &&
                          <input onChange={onChangeStatus} autoFocus={true} onBlur={deActivateEditMode} value={status}/>
                      }
                  </div>
                  <div className={style.image} >
                      <img src={'profile.photos.small'}/>
                  </div>
                  <div className={style.name}>
                      <h1>{profile.fullName}</h1>
                  </div>
              </div> }
          { !profile &&
            <div>{"Advertising"}</div>
          }
      </div>
    )
}

export default Profile;