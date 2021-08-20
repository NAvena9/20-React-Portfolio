import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { validateEmail } from '../../utils/helpers';



//Contact Form Component Defined
const ContactForm = () => {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const [formMessage, setFormMessage] = useState('');

    // Handler 
    function handleChange(e) {
        if (e.target.name === 'email') {
            const validated = validateEmail(e.target.value);
            if (!validated) {
                setFormMessage('Your email is invalid.');
            } else {
                setFormMessage(''); //this first comparison block checks for an email as event, then validates it as an actual email
            }
        } else {
            if (!e.target.value.length) {
                const name = e.target.name;
                setFormMessage(`${name.charAt(0).toUpperCase() + name.slice(1)}`); //capitalizing the first letter of
            } else {
                setFormMessage('');
            }
        }

        if (!formMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    //Setting upg email function (the code is provided in emails.com)
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_x7dv62f', '#contactForm', 'user_9mYLL37Eg4rdWbfJGSlI7')
            .then((result) => {
                console.log(result.text);
                setFormMessage("Message sent!");
            },  (error) => {
                console.log(error.text);
                setFormMessage("Your message couldn't be sent");
            });
    }

//cambiar los id
    return (
        <Form onSubmit={sendEmail} id="contactForm"> 
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control required name="name" placeholder="Input your name" onBlur={handleChange} />
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control required name="email" type="email" placeholder="Input your email" onBlur={handleChange} />
            </Form.Group>

            <Form.Group controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control required name="subject" placeholder="Subject" onBlur={handleChange} />
            </Form.Group>

            <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control required name="message" as="textarea" rows="5" placeholder="Message" onBlur={handleChange} />
            </Form.Group>

            {formMessage && <p className="form-message">{formMessage}</p>}

            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default ContactForm;