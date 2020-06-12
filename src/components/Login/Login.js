import React from 'react';
import style from './Login.module.css'
import {reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {sendLoginData} from "../../Redux/login-reducer";
import {createField, FormsControls} from "../common/FormsControls/FormControls";
import {minLength, required} from "../../helpers/validators/validators";

const minLength8 = minLength(8);


const LoginForm =({handleSubmit,error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={style.form}>
                <div className={style.signIn}>
                    Sign In
                </div>
                {createField(style.loginInput,'email',FormsControls,'Login',
                    'input',[required, minLength8],null)}
                {createField(style.passwordInput,'Password',FormsControls,'Password',
                    'input',[required, minLength8],'password')}
                <div className={style.checkBox}>
                {createField(null,'rememberMe','input',null,
                    null,null,'checkBox')}
                    Remember Me
                </div>
                <button className={style.button}>
                    Sign In
                </button>
                {error &&
                    <div className={style.errorMessage}>
                        {error}
                    </div>
                }
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