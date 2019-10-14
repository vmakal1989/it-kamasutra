import React from 'react';
import style from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={style.dialogsBody}>
            <div className={style.dialogs}>
                <div>
                  Artur
                </div>
                <div>
                    Valera
                </div>
                <div>
                    Kris
                </div>
            </div>
            <div className={style.comments}>
              Messages
            </div>
        </div>
    )
}

export default Dialogs;