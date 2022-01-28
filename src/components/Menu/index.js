import React from 'react';
import Logo from '../../assets/image/logo.png';
import { Link } from 'react-router-dom';
import { ButtonItem, NavDiv} from './styles';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie,faCog } from '@fortawesome/free-solid-svg-icons';
import {IoMdAnalytics} from "react-icons/io";

function Menu() { 
  return (                  
        <NavDiv>
            <img src={Logo} width="60%" alt="Logo Solar Energy"/>                      
            <ButtonItem><FontAwesomeIcon icon={faChartPie} /><Link to="/dashboard">Dashboard</Link></ButtonItem>
            <ButtonItem><IoMdAnalytics/><Link to="/listaunidades">Unidades</Link></ButtonItem>
            <ButtonItem><FontAwesomeIcon icon={faCog}/><Link to="/lancamentodegeracao">Cadastro de{<br/>} enegia gerada</Link></ButtonItem>
        </NavDiv>       
  );
}

export default Menu;