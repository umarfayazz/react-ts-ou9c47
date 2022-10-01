import * as React from 'react';
import './style.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((Response) => Response.json())
      .then((data) => {
        this.setState(() => {
          return { monsters: data };
        });
      });
  }
  render() {
    return (
      <div>
        <input
          type="search"
          placeholder="SEARCH MONSTER.."
          onChange={(event) => {
            const searchFiled = event.target.value.toLocaleLowerCase();
            const filteredArray = this.state.monsters.filter((user) => {
              return user.name.toLocaleLowerCase().includes(searchFiled);
            });
            this.setState(() => {
              return { monsters: filteredArray };
            });
          }}
        />
        <div>
          {this.state.monsters.map((e) => {
            return <h4 key={e.id}> {e.name} </h4>;
          })}
        </div>
      </div>
    );
  }
}
