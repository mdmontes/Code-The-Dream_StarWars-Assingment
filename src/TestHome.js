import React from "react";
import './App.css';

export default class TestHome extends React.Component {

TestHome(){
    return(
        <h1> Welcome to StartWars</h1>
    )
}

render(){
    return(<div className=".App-div"
    >{this.TestHome()}
    </div>
    )
}
}