// import logo from './logo.svg';
import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import StarWarsPeople from './starwarsPeople';
import StarWarsFilm from './starwarsFilms'
import TestHome from './TestHome';
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

class App extends Component {
  componentDidMount(){
    setTimeout(() => {
      this.props.navigate('/');
      this.props.navigate('/People');
      this.props.navigate('/Films');
    }, 5000);
  }

  render() {
    return (
      <div className="App">
        <header className= 'App-header'>
          <img src={logo} className="App-logo" alt="logo" />
              <nav > 
                <Link  to='/' style={{ color: '#FFF', textDecoration: 'none', marginRight: '5rem', fontSize: 30}}> Home </Link>
                <Link  to='People' style={{ color: '#FFF', textDecoration: 'none', marginRight: '5rem',fontSize: 30 }}> People </Link>
                <Link  to='Films' style={{ color: '#FFF', textDecoration: 'none', fontSize: 30 }}> Films </Link>
              </nav>
        </header>
          <div className="App-header">
              <Routes>
                <Route path='/' element={<TestHome></TestHome>}></Route>
                <Route path='People' element={<StarWarsPeople></StarWarsPeople>}></Route>
                <Route path='Films' element={<StarWarsFilm></StarWarsFilm>}></Route>
              </Routes>
          </div>
      </div>
    );
  }
}
export function APPWithRouter(props){
  const navigate =  useNavigate()
  return(<App>navigate-{navigate}</App>)
}
export default App;
