import React from 'react';
import axios from 'axios';


export default class StarWarsPeople extends React.Component {
  state = {
    films: []
  }

  componentDidMount() {
    axios.get('https://swapi.dev/api/films')
      .then(res => {
        const films = res.data.results;
        // films.map(p =>console.log('film title is ' + p.title));
        this.setState({ films });
        // console.log(this.state.films[3].title);
      });

  }
  // Table obtained from https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg//
  renderTableData() {
    return this.state.films.map((film, index) => {
       const {title, episode_id, director, producer, release_date} = film //destructuring
       return (
          <tr>
             <td>{title}</td>
             <td>{episode_id}</td>
             <td>{director}</td>
             <td>{producer}</td>
             <td>{release_date}</td>
          </tr>
       )
    })
 }

   renderTableHeader() {
      return  <tr>
      <th>Title</th>
      <th>Episode_id</th>
      <th>Director</th>
      <th>Producer</th>
      <th>Release Date</th>
    </tr>
      }
      
  render() {
   return (
       <div className="App-films">
         <h1 id='title'>Top 6 Star Wars Films</h1>
         <table id='films'>
             <tbody>
               {this.renderTableHeader()}
               {this.renderTableData()}
             </tbody>
         </table>
       </div>
     )
   }
}