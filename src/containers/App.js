import React from "react";
import CardList from "../components/CardList";
import Search from "../components/Search";
import ErrorBoundary from "../components/ErrorBoundary";
import Spinner from "react-spinkit";

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

    let content =
      this.state.robots.length > 0 ? (
        <div className="loading-animation mt-32">
          <Spinner
            name="folding-cube"
            className="m-auto w-full h-full"
            color="white"
          />
        </div>
      ) : (
        <CardList robots={filteredRobots} />
      );

    return (
      <div>
        <h1 className="text-6xl text-center p-6 robot text-pink-800 tracking-wide">
          ROBO FRIENDS
        </h1>
        <Search searchChange={this.onSearchChange} />
        <ErrorBoundary>{content}</ErrorBoundary>
      </div>
    );
  }
}

export default App;
