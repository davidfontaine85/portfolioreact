import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Footer.css';


function Footer() {
    return (
        <div className="footer">
            <div className="footerSect1 container-fluid d-flex align-items-end justify-content-center">
                <div className="footerSect2">
                    <p className="text-light">Fontaine David</p>
                    <p className="text-light">© 2020 | Tous droits réservés.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;