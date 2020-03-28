import React, { Component } from "react";
import { CardList } from "./components/card/card-list/card-list.component";
import { SearchBox } from "./components/searchbox/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      search: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(monsters =>
        this.setState({
          monsters: monsters
        })
      );
  }
  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(search.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="Search monsters"
          handleChange={e => this.setState({ search: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
