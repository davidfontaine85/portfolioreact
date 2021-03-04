import React from 'react';
import Coverflow from 'react-coverflow';
import htmlImg from '../Img/html.png';
import phpImg from '../Img/php.png';
import javascriptImg from '../Img/javascript.png';
import jQueryImg from '../Img/jQuery (2).png';
import reactImg from '../Img/react.png';
import angularImg from '../Img/angular.png';

const Sect2Skills = () => {
    return(
        <div>
            <h3 className="text-light">Mes Compétences</h3>
            <p className="text-light">Language, Librairies et Frameworks</p>
            <Coverflow width="900" height="800" classes={{background: 'rgb(233, 23, 23)'}} className=''
                displayQuantityOfSide={2}
                navigation={false}
                enableScroll={false}
                clickable={true}
                active={0}
            >
            <div
                onClick=""
                onKeyDown=""
                role="menuitem"
                tabIndex="0"
            >
            <img
                src={htmlImg}
                alt='html icone'
                style={{
                display: 'block',
                width: '100%',
                }}
            />
            </div>
                <img
                    src={phpImg}
                    alt='PHP'
                    style={{
                    display: 'block',
                    width: '100%',
                    }}
                />
                <img
                    src={javascriptImg}
                    alt='Javascript'
                    style={{
                    display: 'block',
                    width: '100%',
                    }}
                />
                <img
                    src={jQueryImg}
                    alt='jQuery'
                    style={{
                    display: 'block',
                    width: '100%',
                    }}
                />
                <img
                    src={reactImg}
                    alt='Notions REACT'
                    style={{
                    display: 'block',
                    width: '100%',
                    }}
                />
                <img
                    src={angularImg}
                    alt='Notions AngularJS'
                    style={{
                    display: 'block',
                    width: '100%',
                    }}
                />
            </Coverflow>

        </div>
    );
}

export default Sect2Skills;