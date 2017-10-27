import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'redux-zero/react';
import {Redirect, NavLink} from 'react-router-dom';
import './App.css';


const Feautures = ( {playList}) =>  {
  return (<div>
    <div className="bienvenida text-center">
    <header>
        <ul className="main-nav">
            <li><NavLink to={"/feautures"} exact path="/">Feautures</NavLink></li>
            <li><NavLink to={"/genres"}>Genres Musica</NavLink></li>
            <li><NavLink to={"/news"}>News</NavLink></li>  
            <li><NavLink to={"/filtro"}>Filtro</NavLink></li>       
        </ul>
    </header>
    {
      playList.map(playList=>{
        return(
            <div className="col-md-3 playlist">
              <img src={playList.image} width="150" height="150"/>
              <audio src={playList.audio} controls ></audio>
            <div>
              {playList.title}
            </div>
          </div>
        );
      })
    }
    
     </div> 
  </div>)
  }

  const mapToProps = ({ playList}) => ({ playList});
  export default connect(mapToProps)(Feautures);
