//1)Necesitamos a React
import React from 'react';// forma tradicional
//const React = require("react");// forma moderna
//2)Necesitamos a ReactDOM
import ReactDom from 'react-dom';
import App from './components/App/App';
import './stiles.css';
//4)Necesitamos mostrar el elemento
ReactDom.render(<App/>,document.getElementById('root'))
//JSX: Es como una extension de javascript que sirve de procesador y transforma el codigo a javascript