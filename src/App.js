import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'redux-zero/react'
import './App.css';


const App = (image, audio, title) => (
  <div>
      <img src={image}/>
      <audio src={audio} preload="auto" controls></audio>
      <div>
          {title}
      </div>
  </div>
  )

  const mapToProps = ({ image, audio, title}) => ({ image, audio, title });
  export default connect(mapToProps)(App);
