import React,{Component} from 'react';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import IndexPage from '../src/components/index/index';
import PortfolioPage from '../src/components/portfolio/portfolio';
import ContactPage from '../src/components/contact/contact'



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <IndexPage/>
      <PortfolioPage/>
      <ContactPage/>
      </header>
    </div>
  );
}

export default App;
