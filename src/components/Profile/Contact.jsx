import s from "./Profile.module.css";
import React from "react";

const Contact = ({contactName, contactLink}) => {
    return  <div className={s.contact}>
                <b>{contactName}: </b> {contactLink}
            </div>
};

export default Contact;