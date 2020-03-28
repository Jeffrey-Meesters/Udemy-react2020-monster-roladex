import React, { Component } from "react";
import { Card } from "./../card/card.component";
import { SearchBox } from "./../../searchbox/search-box.component";
import "./card-list.styles.css";

class CardList extends Component {
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

  // es6 binds this so we don't need to bind in the constructor
  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(search.toLocaleLowerCase())
    );

    return (
      <>
        <SearchBox
          placeholder="Search monsters"
          handleChange={this.handleChange}
        />
        <div className="card-list">
          {filteredMonsters.map(monster => (
            <Card key={monster.id} monster={monster} />
          ))}
        </div>
      </>
    );
  }
}

export default CardList;
