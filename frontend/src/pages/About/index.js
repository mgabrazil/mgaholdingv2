import { Link } from "react-router-dom";

import aboutLogo from "../../assets/logo-mgasingle.png";

import "../../styles/about.css";

export default function About(){
    return(
        <section className="about-section">
            <div className="about-container">

                <div className="about-logo">
                    <img src={aboutLogo} />
                </div>

                <div className="about-info">
                    <p> Somos um grupo inovador que gerencia empresas, cujo nosso objetivo é incrementar a eficiência.</p>
                    <p>Temos como objetivo prover uma administração profissional para nossas companhias.</p>
                </div>

                <div className="link-container">
                    <Link to="/">Conheça as empresas gerenciadas pela MGA Holding</Link>
                    <span class="material-symbols-outlined">arrow_right</span>
                </div>
            </div>
        </section>
    )
}