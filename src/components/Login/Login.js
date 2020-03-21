import React from 'react';
import style from './Login.module.css'
import {Field, reduxForm} from "redux-form";


const LoginForm =(props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.form}>
                <div className={style.signIn}>
                    Sign In
                </div>
                <Field className={style.loginInput} name={'login'} component={'input'} placeholder={'Login'}/>
                <Field className={style.passwordInput} name={'password'} component={'input'} placeholder={'Password'}/>
                <div className={style.checkBox}>
                    <Field type={'checkBox'} name={'rememberMe'} component={'input'} /> Remember Me
                </div>
                <button className={style.button}>
                    Sign In
                </button>
            </div>
        </form>
    )
};


const ReduxFormLogin = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    };

    return (
        <div className={style.page}>
            <ReduxFormLogin onSubmit={onSubmit}/>
        </div>
    )
};


export default Login;