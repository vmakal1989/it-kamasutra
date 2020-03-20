import React from 'react';
import s from './UserProfile.module.css'
import Preloader from "../../../common/Preloader/Preloader";

const UserProfile = (props) => {
    if (!props.userProfile) {
        return <div className={s.page}><Preloader/></div>
    }

    let u = props.userProfile;

    return (
        <div className={s.page}>
            <div className={s.userBlock}>
                <div className={s.oneColomn}>
                    <div>
                        <img src={u.photos.large} alt={u.photos.large}/>
                    </div>
                </div>
                <div className={s.twoColomn}>
                    <div className={s.status}>
                        <h5>{props.userStatus}</h5>
                    </div>
                    <div>
                        <div>
                            Обо мне: {u.aboutMe}
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserProfile;