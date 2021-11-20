//1)Necesitamos a React
import React from 'react';// forma tradicional
//const React = require("react");// forma moderna
//2)Necesitamos a ReactDOM
import ReactDom from 'react-dom';
import Header from './components/Header';
//4)Necesitamos mostrar el elemento
ReactDom.render(<Header/>,document.getElementById('root'))
//JSX: Es como una extension de javascript que sirve de procesador y transforma el codigo a javascript