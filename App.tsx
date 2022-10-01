import * as React from 'react';
import CardList from './Components/CardList';
import SearchBox from './Components/SearchBox';
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
  };
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((user) => {
      return user.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div>
        <SearchBox
          placeholder="search monster"
          onChangeHandler={onSearchChange}
        />
        <CardList filteredMonsters={filteredMonsters} />
      </div>
    );
  }
}
