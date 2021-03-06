import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const { name, email, message } = formState
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value})

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Please enter a valid email');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (e.target.name === 'message') {

        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        console.log('errorMessage', errorMessage);
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value});
        }
    }

        function handleSubmit(e) {
            e.preventDefault();
            console.log(formState);
        }

        return (
            <section className="">
                <h1 className="contact-container">Contact Me</h1>
                <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                    </div>
                    <div>
                        <input className="form-input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email Address:</label>
                    </div>
                    <div>
                        <input className="form-input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                    </div>
                    <div>
                        <input className="form-input" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                    </div>
                </form>
            </section>
        )
};

export default Contact;