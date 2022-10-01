import * as React from 'react';
import './style.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: '',
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
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }
  render() {
    const {monsters,searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((user) => {
      return user.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div>
        <input
          type="search"
          placeholder="SEARCH MONSTER.."
          onChange={onSearchChange}
        />
        <div>
          {filteredMonsters.map((e) => {
            return <h4 key={e.id}> {e.name} </h4>;
          })}
        </div>
      </div>
    );
  }
}
