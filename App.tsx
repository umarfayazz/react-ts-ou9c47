import * as React from 'react';
import './style.css';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      monsters : []
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response=> Response.json)
    .then(data => {
      this.setState({
        monsters: data.name
      })
    })
  }
  render(){

    return (
      <div>
        <h1>{this.state.monsters.map(m=>{
          
        })}</h1>
      </div>
    );
  }
  }
