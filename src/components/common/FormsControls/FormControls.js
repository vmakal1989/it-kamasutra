import React from 'react';
import style from './FormControls.module.css';
import {Field} from "redux-form";

export const FormsControls = ({input, meta:{error,touched}, typeForm, ...props}) => {
    return (
        <div className={error && touched && style.inputField} >
            <div>
                {typeForm === 'input' ? <input {...input} {...props}/> : <textarea {...input} {...props}/>}
            </div>
            <span>
                {error && touched && error}
            </span>
        </div>
    )
};

export const createField = (className,name,component,placeholder,typeForm,validate,type) => (
    <Field className={className}
           name={name}
           type={type}
           component={component}
           placeholder={placeholder}
           typeForm={typeForm}
           validate={validate}/>
)