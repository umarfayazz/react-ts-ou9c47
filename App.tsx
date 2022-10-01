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
    .then(Response=> Response.json())
    .then(data => {
      this.setState(()=>{
        return {monsters:data}
      }),
      ()=>{
        console.log(this.state)
      }
    })
  }
  render(){
    
    return (
      <div>
        
        <div>{this.state.monsters.map(e=>{
          return <h1 key={e.id}> {e.name} </h1>
        })}</div>
      </div>
    );
  }
  }
