import React, { Component } from "react";
import Counters from "./counters";
import Navbar from "./navbar";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import Movies from "./movies";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ],
    movies: getMovies()
  };

  handleDelete = counter => {
    const counters = [...this.state.counters.filter(c => c.id !== counter.id)];
    this.setState({ counters });
  };
  handleIncrement = counter => {
    const counters = this.state.counters;
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(co => {
      return { ...co, value: 0 };
    });
    this.setState({ counters });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleDeleteMovie = id => {
    console.log("Delete", id);
    deleteMovie(id);
    this.setState({ movies: getMovies() });
  };

  render() {
    return (
      <React.Fragment>
        {/*<Navbar
          totalCount={this.state.counters.filter(c => c.value > 0).length}
        />
         <Counters
          onReset={this.handleReset}
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          counters={this.state.counters}
        /> */}
        <Movies
          movies={this.state.movies}
          onDelete={this.handleDeleteMovie}
          onLike={this.handleLike}
        />
      </React.Fragment>
    );
  }
}

export default App;
