import React from 'react';
import styled from 'styled-components';
import '../Css/Sect5Contact.css';

const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 50px 0;
`;

const Sect5Contact = () => {
    return(
        <div>
            <h3 className="text-light">Pour me joindre</h3>
            <p className="text-light">Deux possibilités s'offrent à vous</p>
            <Wrapper>
                <div className="Sect5 d-flex justify-content-center align-items-end">
                    <div className="arrowLink d-flex flex-column justify-content-center">
                        <h4>Contact</h4>
                        <ul className="d-flex flex-column align-items-center">
                            <li><a href="https://www.linkedin.com/in/david-fontaine-65a442188/">Linkedin</a></li>
                            <li><a href="mailto:david.fontaine85@gmail.com">Mail</a></li>
                        </ul>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default Sect5Contact;