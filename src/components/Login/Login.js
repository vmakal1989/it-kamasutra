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


const LoginForm =({handleSubmit,error,captchaImageUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={captchaImageUrl ? style.formWithCaptcha : style.form }>
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
                {captchaImageUrl &&
                    <div>
                        <div className={style.captcha}>
                            <img src={captchaImageUrl}/>
                        </div>
                        <div className={style.captchaField}>
                            {createField('','captcha',FormsControls,'Enter the captcha text',
                                'input',[],null)}
                        </div>
                    </div>
                }
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

const LoginContainer = ({auth, sendLoginData, captchaImageUrl}) => {

    const onSubmit = (formData) => {
        sendLoginData(formData);
    };

    return (
        auth ? <Redirect to={'/'}/> :
            <div className={style.page}>
                <ReduxFormLogin onSubmit={onSubmit} captchaImageUrl={captchaImageUrl}/>
            </div>
    )
};

const mapStateToProps =(state) => {
    return {
        auth: state.auth.isAuth,
        captchaImageUrl: state.login.captchaImageUrl
    }
};

export default compose(connect(mapStateToProps,{sendLoginData}))(LoginContainer);