import React, { Component } from "react";
import {
  getMoviesByPage,
  getTotalMovies,
  saveMovie,
  deleteMovie
} from "./services/fakeMovieService";

import { getGenres } from "./services/fakeGenreService";

import Movies from "./components/movies";

class App extends Component {
  itemsByPage = 4;

  state = {
    movies: getMoviesByPage(1, this.itemsByPage),
    totalMovies: getTotalMovies(null),
    currentPage: 1,
    currentFilter: null,
    genders: getGenres()
  };

  handleLike = movie => {
    movie.liked = !movie.liked;
    saveMovie(movie);
    const movies = getMoviesByPage(
      this.state.currentPage,
      this.itemsByPage,
      this.state.currentFilter
    );
    this.setState({ movies });
  };

  handleDelete = id => {
    deleteMovie(id);
    this.setState({
      movies: getMoviesByPage(1, this.itemsByPage, this.state.currentFilter),
      totalMovies: getTotalMovies(this.state.currentFilter),
      currentPage: 1
    });
  };

  handlePagination = page => {
    const movies = getMoviesByPage(
      page,
      this.itemsByPage,
      this.state.currentFilter
    );
    this.setState({
      movies,
      currentPage: page
    });
  };

  handleFilterChange = genderId => {
    const movies = getMoviesByPage(1, this.itemsByPage, genderId);
    this.setState({
      movies,
      currentPage: 1,
      totalMovies: getTotalMovies(genderId),
      currentFilter: genderId
    });
  };

  render() {
    return (
      <React.Fragment>
        <Movies
          movies={this.state.movies}
          genders={this.state.genders}
          itemsByPage={this.itemsByPage}
          totalMovies={this.state.totalMovies}
          currentPage={this.state.currentPage}
          currentFilter={this.state.currentFilter}
          onPageChange={this.handlePagination}
          onFilterChange={this.handleFilterChange}
          onDelete={this.handleDelete}
          onLike={this.handleLike}
        />
      </React.Fragment>
    );
  }
}

export default App;
