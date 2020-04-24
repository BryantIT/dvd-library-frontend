import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


function searchParams(term){
  return function(x){
    return x.attributes.title.toLowerCase().includes(term.toLowerCase()) || !term
  }
}

class MoviesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: this.props.movies,
      term: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(event){
    this.setState({
        term: event.target.value
    });
  }

  render() {
    const {term, movies} = this.state
    return (
      <div className="w3-row-padding w3-container w3-padding-32 w3-center">
      <div className="search-container">
          <input type="text" className="search-input" onChange={this.handleChange} value={term}></input>
      </div>
          {
            this.props.movies.sort((a, b) => a.attributes.title.localeCompare(b.attributes.title)).filter(searchParams(term)).map(t => (
              <div key={t.id} className="w3-quarter w3-margin-bottom">
                <div className="box gallery">
                  <div className="card">
                    <div className="background">
                      <div className="info">
                        <Link className="overlay" to={`/movies/${t.id}`}></Link>
                        <h2>{t.attributes.title}</h2>
                        <p><small>by: </small>{t.attributes.year}</p>
                        <div className="foot">
                          <i className="line"></i>
                          <p>{t.attributes.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>))
          }
      </div>
    )
  }

}
const mapStateToProps = state => ({ movies: state.userMovies })

export default connect(mapStateToProps)(MoviesContainer)
