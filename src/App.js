// import logo from './logo.svg';
import React, { Component } from "react";
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
        <div >
            <nav>
              <tr > 
                <th ><Link  to='/'> Home </Link></th> 
                <th ><Link  to='People'> People </Link></th>
                <th ><Link  to='Films'> Films </Link></th>
              </tr>
            </nav>
        </div>

          <div >
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
