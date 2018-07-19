import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
  console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {

    return (
      <div className="jumbotron">
        <div className="container-fixed">
          <form>
            <div className="form-group">
              <label htmlForm="search"></label>
              <input
                onChange={this.handleChange}
                value={this.search}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search for an Artist"
                id="searchInput"
              />
              <button type="button" className="btn btn-dark" id="searchButton"
                onClick={this.handleSubmit}
              >Search
      </button>
            </div>
          </form>
        </div>
      </div>

    );
  }
}
export default SearchForm;


