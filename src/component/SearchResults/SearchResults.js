import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getResults } from '../../actions/ResultsAction.js';
import "./SearchResults.css";

class Searchresults extends Component {

    handleSearchInfo = () => {
        
        if (this.props.results === undefined) {
            return (
                <p className="no__result-undefined">There are currently no results to display</p>
            )
        }   else 

        {
            const { results }= this.props;
     
                return (
            <div>
                <h2 className="text-header">Search Results</h2>
                {results.map(result => {
                return(      
                    <div className="result-block">
                    <a href={result.url} className="result-text" key={result.objectID}><strong className="result-title">{result.title}</strong><br></br><strong>Author: </strong>{result.author}</a>
                    </div>

                )}
                )}
            </div>
                
            )
        }
    }

      render() {
        return(
            <div>
                {this.handleSearchInfo()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        results: state.results
    }
}

export default connect(mapStateToProps)(Searchresults);

