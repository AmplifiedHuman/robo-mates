import React from "react";
import CardList from "./CardList";
import Search from "./Search";
import Scrollable from "./Scrollable";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
      robots: [],
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ robots: users }));
  }

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
        <Scrollable>
          <CardList robots={filteredRobots} />
        </Scrollable>
      </div>
    );
  }
}

export default App;
