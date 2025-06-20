import { Link } from "react-router-dom";

import headerCircle from "../assets/logo-circle.png";
import headerLogo from "../assets/logo-mgasingle.png";

import "../styles/header.css";

export default function Header(){
    return(
        <header className="header-section">
            <div className="header-container">

                <div className="header-logo-container">

                    <Link to="/"><img src={headerCircle} id="header-circle" /></Link>
                    <Link to="/"><img src={headerLogo}  id="header-logo"/></Link>

                </div>

                <div className="header-options-container">
                    
                    <Link to="/aboutus">Sobre Nós</Link>
                    <Link to="mailto:rh@mgabrazil.com">Trabalhe Conosco</Link>

                </div>
            </div>
        </header>
    )
}