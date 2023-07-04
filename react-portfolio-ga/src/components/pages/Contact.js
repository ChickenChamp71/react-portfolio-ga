import React, { useState } from "react";
import "../../styles/Contact.css";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [textErr, setTextErr] = useState('');
    const [errTrue, setErr] = useState({
        name: true,
        email: true,
        text: true
    });

    const handleInputChange = (e) => {

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        };
        
        if (inputType === 'email') {
            setEmail(inputValue);
        }; 
        
        if (inputType === 'text') {
            setText(inputValue);
        };
    }

    const handleNameErr = () => {

        if (name === '') {
            setNameErr(`This field cannot be empty.`);
            setErr(prevState => ({
                ...prevState,
                name: true
            }));
        } else {
            setNameErr('');
            setErr(prevState => ({
                ...prevState,
                name: false
            }));
        };
    }

    const handleEmailErr = () => {

        if (email === '') {
            setEmailErr(`This field cannot be empty.`);
            setErr(prevState => ({
                ...prevState,
                email: true
            }));
        } else if (!validateEmail(email)) {
            setEmailErr(`Please enter a valid email address.`);
            setErr(prevState => ({
                ...prevState,
                email: true
            }));
        } else {
            setEmailErr('');
            setErr(prevState => ({
                ...prevState,
                email: false
            }));
        };
    }

    const handleTextErr = () => {

        if (text === '') {
            setTextErr(`This field cannot be empty.`);
            setErr(prevState => ({
                ...prevState,
                text: true
            }))
        } else {
            setTextErr('');
            setErr(prevState => ({
                ...prevState,
                text: false
            }))
        };
    };

    const handleFormSubmit = (e) => {
        
        e.preventDefault();

        if (!errTrue.name && !errTrue.email && !errTrue.text) {

            alert('Email sent!');

            setName('');
            setEmail('');
            setText('');

            setErr({
                name: true,
                email: true,
                text: true
            })

            return;
        }

        alert('Please enter valid information.')
        return;
    };

    return (
        <div className="sub-body">
            <h2>Contact Me</h2>
            <form className="contact-form">
                <h3 className="name-title">Name: </h3>
                <div className="name-input-box">
                    <input
                        value={name}
                        name="name"
                        onBlur={handleNameErr}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Name"
                    />
                    {nameErr && (
                        <div>
                            <p className="error-text" id="name-err">{nameErr}</p>
                        </div>
                    )}
                </div>
                <h3 className="email-title">Email: </h3>
                <div className="email-input-box">
                    <input
                        value={email}
                        name="email"
                        onBlur={handleEmailErr}
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Email"
                    />
                    {emailErr && (
                        <div>
                            <p className="error-text" id="email-err">{emailErr}</p>
                        </div>
                    )}
                </div>
                <h3 className="text-title">Message: </h3>
                <div className="text-input-box">
                    <textarea
                        value={text}
                        name="text"
                        onBlur={handleTextErr}
                        onChange={handleInputChange}
                        placeholder="Place your message in here!"
                    />
                    {textErr && (
                        <div>
                            <p className="error-text" id="text-err">{textErr}</p>
                        </div>
                    )}
                </div>
                <button type="button" onClick={handleFormSubmit} className="submit-btn">Submit</button>
            </form>
        </div>
    )
};