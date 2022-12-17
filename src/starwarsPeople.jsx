import React from 'react';
import axios from 'axios';


export default class StarWarsPeople extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        const persons = res.data.results;
        // persons.map(p =>console.log('character name is ' + p.name));
        this.setState({ persons });
        // console.log(this.state.persons[3].name);
      });

  }
  // Table obtained from https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg//
  renderTableData() {
    return this.state.persons.map((person, index) => {
       const {name, height, mass, hair_color, skin_color} = person //destructuring
       return (
          <tr>
             <td>{name}</td>
             <td>{height}</td>
             <td>{mass}</td>
             <td>{hair_color}</td>
             <td>{skin_color}</td>
          </tr>
       )
    })
 }

   renderTableHeader() {
      return(  
      <tr>
        <th>Name</th>
        <th>Height</th>
        <th>Mass</th>
        <th>Hair Color</th>
        <th>Skin Color</th>
      </tr>)
      }
      

  render() {
   return (
       <div>
         <h1 id='title'>StarWars Characters</h1>
         <table id='Persons'>
             <tbody>
               {this.renderTableHeader()}
               {this.renderTableData()}
             </tbody>
         </table>
       </div>
     )
   }
}