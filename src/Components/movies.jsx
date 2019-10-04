import React, { Component } from "react";
import Like from "./Like";
// const movies = getMovies();
// console.log(movies);
import Pagination from "./pagination";
import ListGroup from "./common/listGroup";

export default class Movies extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ListGroup
              currentSelection={this.props.currentFilter}
              items={this.props.genders}
              onChange={this.props.onFilterChange}
            />
          </div>
          <div className="col">
            {this.props.totalMovies > 0 && (
              <div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Genre</th>
                      <th>Stock</th>
                      <th>Rate</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.movies.map(movie => (
                      <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>
                          <Like
                            onClick={() => this.props.onLike(movie)}
                            liked={movie.liked}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => this.props.onDelete(movie._id)}
                            className="btn btn-danger btn-sm"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p>Showing {this.props.totalMovies} movies in the dababase.</p>
              </div>
            )}
            {this.props.totalMovies == 0 && <p>No result with this filter.</p>}
            <Pagination
              pageSize={this.props.itemsByPage}
              currentPage={this.props.currentPage}
              itemsCount={this.props.totalMovies}
              onPageChange={this.props.onPageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
