import React, {Component} from 'react';
import logo from './logo.svg';
import {connect} from 'redux-zero/react'
import './App.css';


const Genres = ({report}) => {
   return (
      <div>
         Genres
      </div>
   );
}

const mapToProps = ({report}) => ({report})

export default connect(mapToProps)(Genres);