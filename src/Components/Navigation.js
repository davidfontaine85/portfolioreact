import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import { AnimationWrapper } from 'react-hover-animation';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Navigation.css';


class Navigation extends Component {
    
    render(){
        return(
            <Navbar className="nav justify-content-end" sticky="top">
                <Nav
                className="justify-content-end"
                activeKey="/home"
                // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    
                    <Nav.Item>
                        <AnimationWrapper><Nav.Link className="text-white" href="/"><h2>Home</h2></Nav.Link></AnimationWrapper>
                    </Nav.Item>
                    <Nav.Item>
                        <AnimationWrapper><Nav.Link className="text-white" eventKey="link-2" href="/Competences"><h2>Compétences</h2></Nav.Link></AnimationWrapper>
                    </Nav.Item>
                    <Nav.Item>
                        <AnimationWrapper><Nav.Link className="text-white" eventKey="link-4" href="/Portfolio"><h2>Portfolio</h2></Nav.Link></AnimationWrapper>
                    </Nav.Item>
                    <Nav.Item>
                        <AnimationWrapper><Nav.Link className="text-white" eventKey="link-5" href="/Contact"><h2>Contact</h2></Nav.Link></AnimationWrapper>
                    </Nav.Item>
                </Nav>
            </Navbar>
            
        );
    }
}

export default Navigation