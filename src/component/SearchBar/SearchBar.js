import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from "../../actions/SearchAction.js";
import  { getResults}  from "../../actions/ResultsAction.js";
import "./SearchBar.css";
class Searchbar extends Component {

    state = {
        currentSearchInput: ""
    }

handleInput = (event) => {
    let newSearchInput = event.target.value;

    this.setState({
        currentSearchInput: newSearchInput
    });
}

handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(this.state.currentSearchInput);
    this.props.search(this.state.currentSearchInput);
    this.props.getResults(this.state.currentSearchInput);
}

    render() {
        return (
            <div className="search__home-container">
                <a href="/" className="title-ref"><h1>Hacker News Search</h1></a>  
            <div>
                <form className="form-inline" onSubmit={this.handleFormSubmit}>
                    <input className="search-input" type="search" 
                    onChange={this.handleInput} placeholder="Search Hacker News Articles" aria-label="Search">
                    </input>
               </form>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searches: state.searches,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        search: (terms) => { dispatch(search(terms)) },
        getResults: (query) => { dispatch(getResults(query)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);