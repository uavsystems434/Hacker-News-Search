import React, { Component } from 'react';
import Searchbar from './component/SearchBar/SearchBar.js';
import Searchresults from './component/SearchResults/SearchResults.js';

class App extends React.Component {
    render() {
        return (
            <div>
            <Searchbar />
            <Searchresults />
            </div>
        );
    }
}

export default App;