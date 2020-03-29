import React from 'react';
import style from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {sendLoginData} from "../../Redux/login-reducer";
import {FormsControls} from "../common/FormsControls/FormControls";
import {minLength, required} from "../../helpers/validators/validators";

const minLength8 = minLength(8);


const LoginForm =(props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.form}>
                <div className={style.signIn}>
                    Sign In
                </div>
                <Field className={style.loginInput}
                       name={'email'}
                       component={FormsControls}
                       placeholder={'Login'}
                       type={'input'}
                       validate={[required, minLength8]}/>
                <Field className={style.passwordInput}
                       type={'password'}
                       name={'Password'}
                       type={'input'}
                       component={FormsControls}
                       placeholder={'Password'}
                       validate={[required, minLength8]}/>
                <div className={style.checkBox}>
                    <Field type={'checkBox'}
                           name={'rememberMe'}
                           component={'input'} />
                           Remember Me
                </div>
                <button className={style.button}>
                    Sign In
                </button>
            </div>
        </form>
    )
};


const ReduxFormLogin = reduxForm({form: 'login'})(LoginForm);

const LoginContainer = (props) => {

    const onSubmit = (formData) => {
        props.sendLoginData(formData);
    };

    return (
        props.auth ? <Redirect to={'/'}/> :
            <div className={style.page}>
                <ReduxFormLogin onSubmit={onSubmit}/>
            </div>
    )
};

const mapStateToProps =(state) => {
    return {
        auth: state.auth.isAuth
    }
};

export default compose(connect(mapStateToProps,{sendLoginData}))(LoginContainer);