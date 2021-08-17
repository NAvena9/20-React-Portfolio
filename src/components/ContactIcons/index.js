
import React from 'react';

function ContactIcons() {
    const contactLinks = [
        {
            "name": "email",
            "url": "mailto:nicolas.cedano.avena@gmail.com",
            "classes": "far fa-envelope"
        },
        {
            "name": "linkedin",
            "url": "https://www.linkedin.com/in/nicolas-cedano-avena-55a04043/",
            "classes": "fab fa-linkedin"
        },
        {
            "name": "github",
            "url": "https://www.linkedin.com/in/nicolas-cedano-avena-55a04043/",
            "classes": "fab fa-github"
        },
        {
            "name": "instagram",
            "url": "https://www.instagram.com/nico.avena/?hl=es",
            "classes": "fab fa-instagram"
        },
    ]

    return (
        <div className="mt-2 mt-lg-0">
            {contactLinks.map((contactLink) => {
                return (
                    <a href={contactLink.url}
                        key={contactLink.name}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m-3">
                        <span><i className={contactLink.classes}></i></span>
                    </a>
                )
            })}
        </div>
    )
}

export default ContactIcons;