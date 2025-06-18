import logoHolding from "../../assets/logo-mgasingle.png";
import logoMgaTour from "../../assets/logo-mgatour.png";
import logoUnipaper from "../../assets/logo-unipaper.png";
import logoUsports from "../../assets/logo-usports.png";
import logoSchoolTravel from "../../assets/logo-schooltravel.png";

import cardMgaTour from "../../assets/tag-viagem(pexels-vincent-gerbouin-445991-1167021).jpg";
import cardUnipaper from "../../assets/tag-escolares(pexels-karolina-grabowska-54122290)-mirror.png";
import cardUsports from "../../assets/tag-sports(pexels-omar-ramadan-1739260-30726604).jpg";
import cardSchoolTravel from "../../assets/tag-schooltrip(pexels-wai-sing-278507525-26563309).jpg";

import "../../styles/home.css";

export default function Home(){
    return(
        <section className="home-section">

            <div className="middle-container">
                <div className="holding-middle-info">
                    <h1>Inovação e eficiência no gerenciamento de empresas.</h1>
                    <img src={logoHolding} alt="MGA Holding" className="logo-holding"/>
                </div>
            </div>

            <div className="bottom-container">
                <div className="holding-bottom-cards">

                    <div className="card" id="cardMgaTour">
                        <div className="title-cards">
                            <h2>Viagens</h2>
                            <h3>Gerais</h3>
                        </div>

                        <div className="img-container-cards">
                            <img className="normal" src={cardMgaTour} />
                            <img className="hover" src={logoMgaTour} />
                        </div>
                    </div>

                    <div className="card" id="cardUnipaper">
                        <div className="title-cards">
                            <h2>Utensílios</h2>
                            <h3>Escolares</h3>
                        </div>

                        <div className="img-container-cards">
                            <img className="normal" src={cardUnipaper} />
                            <img className="hover" src={logoUnipaper} />
                        </div>
                    </div>
                    
                    <div className="card" id="cardUsports">
                        <div className="title-cards">
                            <h2>Uniformes</h2>
                            <h3>Esportivos</h3>
                        </div>

                        <div className="img-container-cards">
                            <img className="normal" src={cardUsports} />
                            <img className="hover" id="cardLogoUsports" src={logoUsports} />
                        </div>
                    </div>

                    <div className="card" id="cardSchoolTravel">
                        <div className="title-cards">
                            <h2>Passeios</h2>
                            <h3>Escolares</h3>
                        </div>

                        <div className="img-container-cards">
                            <img className="normal" src={cardSchoolTravel} />
                            <img className="hover" src={logoSchoolTravel} />
                        </div>
                        
                    </div>

                </div>
            </div>

        </section>
    )
}