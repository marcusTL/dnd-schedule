import React from 'react';

class SearchBar extends React.Component{
    state = {
        term: ''
    };

    render(){
        return(
            <form role="search">
                <div>
                    <input type="text"/>
                    <button className="btn btn-default">
                      <i>Search</i>
                    </button>
                </div>
            </form>
        )
    }
}
export default SearchBar;