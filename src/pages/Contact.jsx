import './Contact.css'
import React, { useState } from 'react';
import { validateEmail } from '../utils/validate';

function Contact() { 
    const [formState, setFormState] = useState({ name: '', email: '', message: '', });
    const [errorMessage, setErrorMessage] = useState('');  
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
        console.log('Submit Form', formState);
    }
} 
const handleChange = (e) => {
    if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        console.log(isValid);
        if (!isValid) {
            setErrorMessage('Your email is invalid.');
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
    if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
}     
    return (
    <>
   <section>
    <form onSubmit={ handleSubmit }>
        <div class="backgroundcolor">
            <div>
                <label className='inputs' htmlFor='name'>Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                    </div>
                    <div>
                    <label className='inputs' htmlFor='email'>Email Address:</label>
                    <input type="text" name="email" defaultValue={email} onBlur={handleChange}/>
                    </div>
                    <div>
                    <label className='inputs' htmlFor='message'>Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
                </div> 

            </form>
    </section>
    </>
    )
};

export default Contact;