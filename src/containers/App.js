import React from "react";
import CardList from "../components/CardList";
import Search from "../components/Search";
import ErrorBoundary from "../components/ErrorBoundary";
import HashLoader from "react-spinners/HashLoader";

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
    fetch("https://jsonplaceholder.typicode.com/users", { mode: "cors" })
      .then((res) => res.json())
      .then((users) => this.setState({ robots: users }));
  }

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    let content =
      this.state.robots.length === 0 ? (
        <div className="flex justify-center m-32">
          <HashLoader size={100} color={"#ffffff"} />
        </div>
      ) : (
        <CardList robots={filteredRobots} />
      );

    return (
      <div>
        <h1 className="text-6xl text-center p-6 robot text-pink-800 tracking-wide">
          Robo Mates
        </h1>
        <Search searchChange={this.onSearchChange} />
        <ErrorBoundary>{content}</ErrorBoundary>
      </div>
    );
  }
}

export default App;
