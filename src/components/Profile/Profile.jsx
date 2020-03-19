import React from 'react';
import style from './Profile.module.css';

const Profile = (props) => {
    return (
      <div className={style.menu}>
          <div className={style.status}>
              {!props.editMode &&
                  <h5 onDoubleClick={props.activateEditMode}>Hello, today is fantastic day!!!</h5>
              }
              {props.editMode &&
                  <input autoFocus={true} onBlur={props.deActivateEditMode} value={'Hello, today is fantastic day!!!'}/>
              }
          </div>
          <div className={style.image} >
              <img src={'https://specials-images.forbesimg.com/imageserve/5d8bac4f22254b0008e17703/960x0.jpg?fit=scale'}/>
          </div>
          <div className={style.name}>
              <h1>{props.auth.login}</h1>
          </div>
      </div>
    )
}

export default Profile;