import React from 'react';
import SearchBar from './SearchBar';
import api from '../api/apiCalls';


class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async term => {
        api.getUnsplashImages(term).then((data) => {
            console.log('image search data : ', data);  
            this.setState({ images: data.data.results });          
        }).catch((err) => {
            console.log('image search error : ', err);
        })
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