import React, {Component} from 'react';
import logo from './logo.svg';
import {NavLink} from 'react-router-dom';
import {connect} from 'redux-zero/react'
import './App.css';


const Filtro = ({report}) => {
   return (
      <div className="bienvenida text-center">
        <header>
            <ul className="main-nav">
                <li><NavLink to={"/feautures"} exact path="/">Feautures</NavLink></li>
                <li><NavLink to={"/genres"}>Genres music</NavLink></li> 
                <li><NavLink to={"/filtro"}>Filtro</NavLink></li>       
            </ul>
        </header>
         {report}
      </div>
   );
}

const mapToProps = ({report}) => ({report})

export default connect(mapToProps)(Filtro);

