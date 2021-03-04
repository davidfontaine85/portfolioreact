import React from 'react';
import styled from 'styled-components';
import {Route} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sect1About from '../Sections/Sect1About';
import Sect2Skills from '../Sections/Sect2Skills';
import Sect4Portfolio from '../Sections/Sect4Portfolio';
import Sect5Contact from '../Sections/Sect5Contact';
import '../Css/Frame.css';

const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 50px 0;
    background-color: rgba(0, 0, 0, 0.1);
`;


const Frame = () => {
    /*const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        fade: true,
        variableWith: true,
        accessibility: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };*/
    return(
        <Wrapper>
            
                <div>
                    <Route path="/" exact component={Sect1About} />
                    <Route path="/Competences" component={Sect2Skills} />
                    <Route path="/Portfolio" component={Sect4Portfolio} />
                    <Route path="/Contact" component={Sect5Contact} />
                </div>
            
        </Wrapper>
    )
}

export default Frame;