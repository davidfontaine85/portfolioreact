import React from 'react';
import {Card, Button} from 'react-bootstrap';
import img1 from '../Img/MycaveExample1.png';
import img2 from '../Img/siteAssocExample1.png';
import img3 from '../Img/prodLocPres.jpg';

const Sect4Portfolio = () => {
    return(
        <div style={{padding: '0 150px'}}>
            <h3 className="text-light">Mes créations</h3>
            <p className="text-light mb-5">Différents Sites et projets</p>
            <div className="d-flex justify-content-around">
                <div>
                    <Card style={{ width: '16rem' , margin: '0.8rem' }}>
                    <Card.Img variant="top" src={img1} alt="MyCave"/>
                    <Card.Body  className="bg-dark">
                        <Card.Title  className="text-light">MyCave</Card.Title>
                        <Card.Text className="text-light">
                        Site Factice utilisé pour la présentation du dossier projet lors de mon Titre Professionnel en PhP, représentant une cave personnelle sous forme de base de données
                        </Card.Text>
                        <Button variant="outline-light" href="https://david.web-client.fr/my_cave/index.php">Aller Voir</Button>
                    </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '16rem' , margin: '0.8rem' }}>
                    <Card.Img variant="top" src={img2} alt="APERCE association"/>
                    <Card.Body className="bg-dark">
                        <Card.Title className="text-light">APERCE</Card.Title>
                        <Card.Text className="text-light">
                        Site de l'association des parents d'élèves créé lors du stage de formation, blog informatif en PhP et Ajax avec interface de gestion
                        </Card.Text>
                        <Button variant="outline-light" href="https://siteassocaperce.dafonfs.fr/index.php">Aller Voir</Button>
                    </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '16rem' , margin: '0.8rem' }}>
                    <Card.Img variant="top" src={img3} alt="ProdLoc Bio fruits légumes"/>
                    <Card.Body className="bg-dark">
                        <Card.Title className="text-light">ProdLoc Bio</Card.Title>
                        <Card.Text className="text-light">
                        Site Vitrine pour la Société ProdLoc Bio en HTML5 et effet css/js
                        </Card.Text>
                        <Button variant="outline-light" href="https://www.prodlocbio.fr/">Aller Voir</Button>
                    </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Sect4Portfolio;