import React from 'react';
import './App.css';
import {HashRouter, Link} from 'react-router-dom';
import Header from './components/Header';
import House from './components/House';
import routes from "./routes";


class App extends React.Component{
  constructor(){
    super()
  }
  render(){
  return (
    <HashRouter> 
    <div className="App">
      <nav className='nav'>
      <Header />
      <Link to='/wizard'>Wizard</Link>
      <House />
      <Link to='/'>Dashboard</Link>
      </nav>
      {routes}
    </div>
    </HashRouter>
  );
}}

export default App;
