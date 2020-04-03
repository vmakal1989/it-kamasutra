import React from 'react';
import style from './FormControls.module.css';

export const FormsControls = ({input, meta, typeForm, ...props}) => {
    return (
        <div className={meta.error && meta.touched && style.inputField} >
            <div>
                {typeForm === 'input' ? <input {...input} {...props}/> : <textarea {...input} {...props}/>}
            </div>
            <span>
                {meta.error && meta.touched && meta.error}
            </span>
        </div>
    )
};