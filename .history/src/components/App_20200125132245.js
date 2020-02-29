import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';


class App extends React.Component {
    // state = { images: [] };

    onSearchSubmit = async term => {
        console.log('search term :...................', term);
    };


    render() {
        return ( 
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar getSearchTerm={this.onSearchSubmit}/>
            </div>
        ) 
    }
    
}


export default App;