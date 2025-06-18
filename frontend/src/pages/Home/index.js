import { useState } from "react";

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

    const [mouseOnCard, setMouseOnCard] = useState(null);

    const cardsInfo = {
        mgaTour: {
            title: ["Você sonha, ", "a MGA realiza."],
            logo: logoMgaTour,
            description: ["Atendimento empresarial", "Pacotes Personalizados", "Suporte Diário", "Planejamento de Itinerários", "Serviços Adicionais"],
            imgID: "mga-tour-info-logo",
        },
        unipaper: {
            title: ["Muito mais que", "uma papelaria."],
            logo: logoUnipaper,
            description: ["Materiais escolares", "Uniformes Escolares", "Soluções Criativas"],
            imgID: "unipaper-info-logo",
        },
        usports: {
            title: ["Seu time,", "sua identidade."],
            logo: logoUsports,
            description: ["Uniformes Personalizados", "Designs Exclusivos", "Qualidade", "Entrega Rápida"],
            imgID: "usports-info-logo",
        },
        schoolTravel: {
            title: ["Conforto e", "segurança para estudantes."],
            logo: logoSchoolTravel,
            description: ["Viagens Escolares", "Passeios Escolares"],
            imgID: "school-travel-info-logo",
        },
    }

    
    return(
        <section className="home-section">

            <div className="middle-container">

                {mouseOnCard && cardsInfo[mouseOnCard] ? (

                <div className="middle-info-cards">

                    <div className="middle-info-phrase">
                        {cardsInfo[mouseOnCard].title.map((line, index) => (
                            <h1 key={index}>{line}</h1>
                        ))}
                    </div>

                    <img src={cardsInfo[mouseOnCard].logo} alt="logo" className="logo-cards-info" id={cardsInfo[mouseOnCard].imgID}/>
                    <div className="middle-info-description">
                        {cardsInfo[mouseOnCard].description.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="middle-info">
                    <h1>INOVAÇÃO E EFICIÊNCIA NO GERENCIAMENTO DE EMPRESAS.</h1>
                    <img src={logoHolding} alt="MGA Holding" className="logo-holding"/>
                </div>
            )}
            

            </div>

            <div className="bottom-container">
                <div className="holding-bottom-cards">

                    <div 
                    className="card" 
                    id="cardMgaTour" 
                    onMouseEnter={() => setMouseOnCard("mgaTour")}
                    onMouseLeave={() => setMouseOnCard(null)}
                    >
                        <div className="title-cards">
                            <h2>Viagens</h2>
                            <h3>Gerais</h3>
                        </div>

                        <div className="img-container-cards">
                            <img className="normal" src={cardMgaTour} />
                            <img className="hover" src={logoMgaTour} />
                        </div>
                    </div>

                    <div 
                    className="card" 
                    id="cardUnipaper"
                    onMouseEnter={() => setMouseOnCard("unipaper")}
                    onMouseLeave={() => setMouseOnCard(null)}
                    >
                        <div className="title-cards">
                            <h2>Utensílios</h2>
                            <h3>Escolares</h3>
                        </div>

                        <div className="img-container-cards">
                            <img className="normal" src={cardUnipaper} />
                            <img className="hover" src={logoUnipaper} />
                        </div>
                    </div>
                    
                    <div 
                    className="card" 
                    id="cardUsports"
                    onMouseEnter={() => setMouseOnCard("usports")}
                    onMouseLeave={() => setMouseOnCard(null)}
                    >
                        <div className="title-cards">
                            <h2>Uniformes</h2>
                            <h3>Esportivos</h3>
                        </div>

                        <div className="img-container-cards">
                            <img className="normal" src={cardUsports} />
                            <img className="hover" id="cardLogoUsports" src={logoUsports} />
                        </div>
                    </div>

                    <div 
                    className="card" 
                    id="cardSchoolTravel"
                    onMouseEnter={() => setMouseOnCard("schoolTravel")}
                    onMouseLeave={() => setMouseOnCard(null)}
                    >
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