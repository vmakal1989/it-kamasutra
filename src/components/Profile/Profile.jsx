import React, {useState} from 'react';
import style from './Profile.module.css';
import Preloader from "../common/Preloader/Preloader";

const Profile = ({activateEditMode,deActivateEditMode ,onChangeStatus, profile, editMode, status,
                 profilePreloaderStatus, addPhotoFile}) => {

    const photoFile = (e) => {
        if(e.target.files.length) {
            addPhotoFile(e.target.files[0]);
        }
    };

    let [currentWindow, setCurrentWindow] = useState(0);

    if(profilePreloaderStatus === 1) {
        return <div className={style.menu}>
            <div className={style.preloader}>
                <Preloader/>
            </div>
        </div>
    } else if(currentWindow === 1) {
        return <div className={style.menu}>
            <input type="file" onChange={photoFile}/>
            <button onClick={() => {setCurrentWindow(currentWindow = 0)}}>Close</button>
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
                      <img src={profile.photos.large} onClick={()=>{setCurrentWindow(currentWindow = 1)}}/>
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