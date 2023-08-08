import './Contact.css'
import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() { 
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');  
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
   
        <div class="backgroundcolor">
            <form>
                <label className='inputs'>
                    name
                    <input type="text" name="name"/>
                    email
                    <input type="text" name="email"/>
                    message
                    <input type="text" name="message"/>
                </label>
            </form>
        </div>
    </>
    )
};

export default Contact;