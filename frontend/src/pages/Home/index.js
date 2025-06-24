import { useState, useRef } from "react";

import { toast } from "react-toastify";

import logoHolding from "../../assets/images/logo-mgasingle.png";
import logoMgaTour from "../../assets/images/logo-mgatour.png";
import logoUnipaper from "../../assets/images/logo-unipaper.png";
import logoUsports from "../../assets/images/logo-usports.png";
import logoSchoolTravel from "../../assets/images/logo-schooltravel.png";

import cardMgaTour from "../../assets/images/tag-viagem(pexels-vincent-gerbouin-445991-1167021).jpg";
import cardUnipaper from "../../assets/images/tag-escolares(pexels-karolina-grabowska-54122290)-mirror.png";
import cardUsports from "../../assets/images/tag-sports(pexels-omar-ramadan-1739260-30726604).jpg";
import cardSchoolTravel from "../../assets/images/tag-schooltrip(pexels-wai-sing-278507525-26563309).jpg";

import "../../styles/home.css";
import '../../styles/mediaQuery-home.css';

export default function Home(){

    const [mouseOnCard, setMouseOnCard] = useState(null);

    const cardsInfo = {
        mgaTour: {
            title: ["Você sonha, ", "a MGA realiza."],
            logo: logoMgaTour,
            description: ["Atendimento empresarial", "Pacotes Personalizados", "Suporte Diário", "Planejamento de Itinerários", "Serviços Adicionais"],
            imgID: "mga-tour-info-logo",
            link: 'https://mgatourcorp.com',
            name: 'MGA Tour',
        },
        unipaper: {
            title: ["Muito mais que", "uma papelaria."],
            logo: logoUnipaper,
            description: ["Materiais escolares", "Uniformes Escolares", "Soluções Criativas"],
            imgID: "unipaper-info-logo",
            link: "https://www.unipaperbsb.com.br",
            name: 'Unipaper',
        },
        usports: {
            title: ["Seu time,", "sua identidade."],
            logo: logoUsports,
            description: ["Uniformes Personalizados", "Designs Exclusivos", "Qualidade", "Entrega Rápida"],
            imgID: "usports-info-logo",
            link: "#",
            name: 'Usports',
        },
        schoolTravel: {
            title: ["Conforto e", "segurança para estudantes."],
            logo: logoSchoolTravel,
            description: ["Viagens Escolares", "Passeios Escolares"],
            imgID: "school-travel-info-logo",
            link: "https://www.instagram.com/mgaschooltravel",
            name: 'School Travel',
        },
    }

    const leaveTimeOut = useRef(null);

    const handleMouseEnter = (cardInformation) => {
        clearTimeout(leaveTimeOut.current);
        setMouseOnCard(cardInformation);
    };

    const handleMouseLeave = () => {
        leaveTimeOut.current = setTimeout(() => {
            setMouseOnCard(null);
        }, 80);
    }

    function handleDelay(e, url, name) {
        e.preventDefault();
        
        toast.success(`Abrindo página da ${name}`, e)

        setTimeout(() => {
            window.open(url);
        }, 1000);
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
                
                    <a href={cardsInfo['mgaTour'].link} target="blank" 
                    onClick={(e) => handleDelay(e, cardsInfo['mgaTour'].link, cardsInfo['mgaTour'].name)} 
                    className="card" 
                    id="cardMgaTour" 
                    onMouseMove={() => handleMouseEnter('mgaTour')}
                    onMouseOut={handleMouseLeave}
                    >
                        <div className="title-cards">
                            <h2>Viagens</h2>
                            <h3>Gerais</h3>
                        </div>

                        <div className="img-container-cards">
                            <img className="normal" src={cardMgaTour} />
                            <img className="hover" id="cardLogoMgaTour" src={logoMgaTour} />
                        </div>
                    </a>

                    <a href={cardsInfo['unipaper'].link} target="blank" 
                    onClick={(e) => handleDelay(e, cardsInfo['unipaper'].link, cardsInfo['unipaper'].name)}
                    className="card" 
                    id="cardUnipaper"
                    onMouseMove={() => handleMouseEnter('unipaper')}
                    onMouseOut={handleMouseLeave}
                    >
                        <div className="title-cards">
                            <h2>Utensílios</h2>
                            <h3>Escolares</h3>
                        </div>

                        <div className="img-container-cards">
                            <img className="normal" src={cardUnipaper} />
                            <img className="hover" id="cardLogoUnipaper" src={logoUnipaper} />
                        </div>
                    </a>
                    
                    <a href={cardsInfo['usports'].link}
                    onClick={(e) => handleDelay(e, cardsInfo['usports'].link, cardsInfo['usports'].name)}
                    className="card" 
                    id="cardUsports"
                    onMouseMove={() => handleMouseEnter('usports')}
                    onMouseOut={handleMouseLeave}
                    >
                        <div className="title-cards">
                            <h2>Uniformes</h2>
                            <h3>Esportivos</h3>
                        </div>

                        <div className="img-container-cards">
                            <img className="normal" src={cardUsports} />
                            <img className="hover" id="cardLogoUsports" src={logoUsports} />
                        </div>
                    </a>

                    <a href={cardsInfo['schoolTravel'].link} 
                    target="blank"
                    onClick={(e) => handleDelay(e, cardsInfo['schoolTravel'].link, cardsInfo['schoolTravel'].name)}
                    className="card" 
                    id="cardSchoolTravel"
                    onMouseMove={() => handleMouseEnter('schoolTravel')}
                    onMouseOut={handleMouseLeave}
                    >
                        <div className="title-cards">
                            <h2>Passeios</h2>
                            <h3>Escolares</h3>
                        </div>

                        <div className="img-container-cards">
                            <img className="normal" src={cardSchoolTravel} />
                            <img className="hover" id="cardLogoSchoolTravel" src={logoSchoolTravel} />
                        </div>
                        
                    </a>

                </div>
            </div>

        </section>
    )
}