import React from 'react';
import styled from 'styled-components';
import {Route} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sect1AboutMobile from '../Sections/Sect1AboutMobile';
import Sect2SkillsMobile from '../Sections/Sect2SkillsMobile';
import Sect4PortfolioMobile from '../Sections/Sect4PortfolioMobile';
import Sect5Contact from '../Sections/Sect5Contact';
import '../Css/Frame.css';

const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 50px 0;
    background-color: rgba(0, 0, 0, 0.1);
`;


const Frame = () => {
    
    return(
        <Wrapper>
            
                <div>
                    <Route path="/" exact component={Sect1AboutMobile} />
                    <Route path="/Competences" component={Sect2SkillsMobile} />
                    <Route path="/Portfolio" component={Sect4PortfolioMobile} />
                    <Route path="/Contact" component={Sect5Contact} />
                </div>
            
        </Wrapper>
    )
}

export default Frame;