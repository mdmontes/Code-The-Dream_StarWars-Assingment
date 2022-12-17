import React from "react";
import './App.css';

export default class TestHome extends React.Component {

TestHome(){
    return(
        <main>
        <h1> Welcome to Star Wars!!!</h1>
        <h2>To see a list of Top 10 Star Wars Charaters, Click "People"</h2>
        <h2>To see a list of Top 6 Star Wars Films, Click "Films"</h2>
        </main>
    )
}

render(){
    return(<div
    >{this.TestHome()}
    </div>
    )
}
}