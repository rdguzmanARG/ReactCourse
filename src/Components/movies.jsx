import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

// const movies = getMovies();
// console.log(movies);

export default class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDeleteClick(id) {
    deleteMovie(id);
    this.setState({ movies: getMovies() });
    // this.setState({
    //   movies: this.state.movies.filter(movie => movie._id !== id)
    // });
  }

  render() {
    const { length: moviesCount } = this.state.movies;
    if (moviesCount === 0) return <p>There are no movies in the dababase.</p>;

    return (
      <React.Fragment>
        <p>Showing {moviesCount} movies in the dababase.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDeleteClick(movie._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
