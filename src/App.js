import React from "react";
import CardList from "./CardList";
import Search from "./Search";
import { robots } from "./robots";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
      robots: robots,
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div>
        <h1 className="text-6xl text-center p-6 robot text-pink-800 tracking-wide">
          ROBO FRIENDS
        </h1>
        <Search searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
