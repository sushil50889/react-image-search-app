import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onFormSubmit = event => {
        event.preventDefault();
        // console.log('search value :.................', this.state.term);        
        this.props.getSearchTerm(this.state.term);
    };

    render() {
        return (
        <div style="{{ marginBottom: '20px'}}">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <label>Image Search</label>
              <input
                type="text"
                value={this.state.term}
                onChange={e => this.setState({ term: e.target.value })}
              />
            </div>
          </form>
        </div>
        );
    }
}

export default SearchBar;