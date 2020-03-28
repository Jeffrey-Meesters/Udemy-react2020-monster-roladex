import React, { Component } from "react";
import { CardList } from "./components/card/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(monsters => this.setState({ monsters: monsters }));
  }
  render() {
    return (
      <div className="App">
        <CardList monsters="{this.monsters}">
          {this.state.monsters.map(monster => (
            <h1 key={monster.username}>{monster.username}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
