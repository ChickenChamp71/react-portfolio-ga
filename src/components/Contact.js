import React, { useState } from "react";
import { validateEmail } from '../utils/helpers';

export default function Contact({ handleFailState, handleSuccessState, notifState }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [subjectErr, setSubjectErr] = useState('');
    const [messageErr, setMessageErr] = useState('');
    const [redName, setRedName] = useState(false);
    const [redEmail, setRedEmail] = useState(false);
    const [redSubject, setRedSubject] = useState(false);
    const [redMessage, setRedMessage] = useState(false);
    const [errTrue, setErr] = useState({
        name: true,
        email: true,
        subject: true,
        message: true
    })

    const handleInputChange = (e) => {
        
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'entry.1560707200') {
            setName(inputValue);
        };

        if (inputType === 'entry.547367803') {
            setEmail(inputValue);
        };

        if (inputType === 'entry.1792417998') {
            setSubject(inputValue);
        };

        if (inputType === 'entry.73408052') {
            setMessage(inputValue);
        };
    };

    const handleNameErr = () => {
        if (name === '') {
            setNameErr(`This field cannot be empty.`);

            setErr(prevState => ({
                ...prevState,
                name: true
            }));
            setRedName(true);
        } else {
            setNameErr('');
            setErr(prevState => ({
                ...prevState,
                name: true
            }));
            setRedName(false);
        };
    };

    const handleEmailErr = () => {
        if (email === '') {
            setEmailErr(`This field cannot be empty.`);

            setErr(prevState => ({
                ...prevState,
                email: true
            }));
            setRedEmail(true);
        } else if (!validateEmail(email)) {
            setEmailErr(`Please enter a valid email address.`);
            setErr(prevState => ({
                ...prevState,
                email: true
            }));
            setRedEmail(true);
        } else {
            setEmailErr('');
            setErr(prevState => ({
                ...prevState,
                email: true
            }));
            setRedEmail(false);
        };
    };

    const handleSubjectErr = () => {
        if (subject === '') {
            setSubjectErr(`This field cannot be empty.`);

            setErr(prevState => ({
                ...prevState,
                subject: true
            }));
            setRedSubject(true);
        } else {
            setSubjectErr('');
            setErr(prevState => ({
                ...prevState,
                subject: true
            }));
            setRedSubject(false);
        };
    };

    const handleMessageErr = () => {
        if (message === '') {
            setMessageErr(`This field cannot be empty.`);

            setErr(prevState => ({
                ...prevState,
                message: true
            }));
            setRedMessage(true);
        } else {
            setMessageErr('');
            setErr(prevState => ({
                ...prevState,
                message: true
            }));
            setRedMessage(false);
        };
    };

    const handleFormSubmit = (e) => {

        e.preventDefault();

        if (!errTrue.name && !errTrue.email && !errTrue.subject && !errTrue.message) {

            setName('');
            setEmail('');
            setSubject('');
            setMessage('');

            setErr({
                name: true,
                email: true,
                subject: true,
                message: true
            });

            successStateCheck();
            return;
        };

        failStateCheck();
        return;
    };

    const successStateCheck = () => {
        handleSuccessState(true);
        return;
    }

    const failStateCheck = () => {
        handleFailState(true);
        return;
    };

    return (

        <section className='contact'>

            <h2>Contact</h2>

            <div className='contact-container'>
                <form action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSf1XaEdUL4RVONh9bzPDyq3GoOmiXB1PeoUXlez5gtcMBqt1A/formResponse' method='post'>
                
                    <input 
                        value={name}
                        type='text'
                        placeholder='Name'
                        name='entry.1560707200'
                        onBlur={handleNameErr}
                        onChange={handleInputChange}
                        className={`name-input ${redName? 'red' : 'not-red'} ${notifState? 'dialog' : ''}`}
                    />
                    {nameErr && (
                        <div className='err-or-div' id='id-name-err'>
                            
                        </div>
                    )}

                </form>
            </div>
        </section>
    )
}