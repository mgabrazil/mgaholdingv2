import logoHolding from "../../assets/logo-mgasingle.png";

import "../../styles/home.css";

export default function Home(){
    return(
        <section className="middle-section">
            <div className="middle-container">
                <div className="holding-middle-info">
                    <h1>Inovação e eficiência no gerenciamento de empresas.</h1>
                    <img src={logoHolding} alt="MGA Holding" className="logo-holding"/>
                </div>
            </div>
        </section>
    )
}