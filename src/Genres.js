import React, {Component} from 'react';
import logo from './logo.svg';
import {NavLink} from 'react-router-dom';
import {connect} from 'redux-zero/react'
import './App.css';


const Genres = ({report}) => {
   return (
      <div className="bienvenida text-center">
        <header>
            <ul className="main-nav">
                <li><NavLink to={"/feautures"} exact path="/">Featured</NavLink></li>
                <li><NavLink to={"/genres"}>Genres music</NavLink></li>
                <li><NavLink to={"/news"}>News</NavLink></li>   
                <li><NavLink to={"/filtro"}>Discover</NavLink></li>       
            </ul>
        </header>
         Genres
      </div>
   );
}

const mapToProps = ({report}) => ({report})

export default connect(mapToProps)(Genres);