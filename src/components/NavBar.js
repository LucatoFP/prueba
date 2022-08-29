import React from 'react';
import '../app/App.css';
import Logo from '../assets/Logo.png';
import MoreOptionsIcon from '../assets/MoreOptionsIcon.png';
import CartWidget from './CartWidget';
import Username from './Username';

const NavBar = () => {
    return (
        <div className="BarraNav">
            <ul className="ListaNav">
                <li><a href=" "><img src={MoreOptionsIcon} className="MOIcon" alt="" width="20" height="20" /></a></li>
                <li><a href=" ">Inicio</a></li>
                <li><a href=" ">Paises</a>
                    <ul className="ContinentList">
                        <li><a href=" ">Sudamerica</a>
                            <ul className="SAList">
                                <li><a href=" ">Argentina</a></li>
                                <li><a href=" ">Brasil</a></li>
                                <li><a href=" ">Ecuador</a></li>
                                <li><a href=" ">Uruguay</a></li>
                            </ul>
                        </li>
                        <li><a href=" ">Centro y Norteamerica</a>
                            <ul className="NAList">
                                <li><a href=" ">EEUU</a></li>
                                <li><a href=" ">Canada</a></li>                                    <li><a href=" ">Mexico</a></li>
                                <li><a href=" ">Costa Rica</a></li>
                            </ul>
                        </li>
                        <li><a href=" ">Africa</a>
                            <ul className="AfricaList">
                                <li><a href=" ">Senegal</a></li>
                                <li><a href=" ">Ghana</a></li>
                                <li><a href=" ">Marruecos</a></li>
                                <li><a href=" ">Tunez</a></li>
                                <li><a href=" ">Camerun</a></li>
                            </ul>
                        </li>
                        <li><a href=" ">Asia</a>
                            <ul className="AsiaList">
                                <li><a href=" ">Qatar</a></li>
                                <li><a href=" ">Iran</a></li>
                                <li><a href=" ">Corea del Sur</a></li>
                                <li><a href=" ">Japon</a></li>
                                <li><a href=" ">Arabia Saudita</a></li>
                            </ul>
                        </li>
                        <li><a href=" ">Europa</a>
                            <ul className="EuropaList">
                                <li><a href=" ">Alemania</a></li>
                                <li><a href=" ">Dinamarca</a></li>
                                <li><a href=" ">Francia</a></li>
                                <li><a href=" ">Belgica</a></li>
                                <li><a href=" ">Croacia</a></li>
                                <li><a href=" ">España</a></li>
                                <li><a href=" ">Serbia</a></li>
                                <li><a href=" ">Inglaterra</a></li>
                                <li><a href=" ">Suiza</a></li>
                                <li><a href=" ">Paises Bajos</a></li>
                                <li><a href=" ">Portugal</a></li>
                                <li><a href=" ">Polonia</a></li>
                                <li><a href=" ">Gales</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="SearchBar2"><input placeholder="Escribi el nombre de un continente, pais o jugador..." className="SearchBar" type="text" /></li>
            </ul>
            <div className="Logo"><img src={Logo} alt="" width="50" height="50" /></div>
            <div className="CartUser">
                <CartWidget Carrito={4} />
                <Username User={"Lucato"} />
            </div>
        </div>
    )
}

export default NavBar;