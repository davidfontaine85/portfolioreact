import React from 'react';
import styled from 'styled-components';
import img from '../Img/maPhoto.jpg';
import '../Css/Sect1About.css';

const Portrait = styled.div`
    background-image: url(${img});
    background-position: center;
    background-size: cover;
    width: auto;
    height: 60vh;
`;

const Sect1AboutMobile = () => {
    return(
        <div className="Section1 d-flex flex-column" style={{width: 'auto', margin: '0 2rem'}}>
            <Portrait />
            <div className="part2Sect1 text-light d-flex flex-column justify-content-center" style={{width: 'auto', padding: '2rem'}}>
                <p>Dirigé vers des études Littéraires à mes débuts, mon parcours professionnel n’a pas suivi un chemin tout tracé. Visant à me faire une première expérience dans la documentation et les médias, je me suis vu travailler pour des archives hospitalières.</p>
                <p>Mais ce tournant à l’époque m’a poussé à essayer ce que je ne connaissais pas, le milieu Médical. J’y suis resté pendant plus d’une dizaine d’année en passant de Paris à Bordeaux. Aujourd’hui j’y ai accomplis ce que je voulais y faire. Et le besoin du changement s’est fait sentir.</p>
                <p>Ayant eu un père me baignant dans le milieu de l’informatique et des nouvelles technologies digitales, je me suis recentré sur mes passions, et, ainsi commencé une reconversion professionnelle. Après quelques mois de remises à niveau et une formation de six mois pour le Titre de Développeur Web et Web Mobile débouchant sur l’acquisition de mon diplôme, me voilà fin prêt à relever les nouveaux défis du numérique.</p>
            </div>
        </div>
    )
}

export default Sect1AboutMobile;