import React from 'react';

class SearchBar extends React.Component{
    state = {
        term: ''
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state.term);

        this.props.onSearchDnD(this.state.term);
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} role="search">
                <div className="input-group">
                    <input type="text" placeholder="search" value={this.state.term} 
                        onChange={ (e) => this.setState({term: e.target.value})}/>
                    {/* <div class="dropdown show">
                        <button class="btn btn-default dropdown-toggle" type="submit" id="dropdownMenuButton" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Category
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" type="button">Spells</a>
                            <a class="dropdown-item" type="button">Monsters</a>
                            <a class="dropdown-item" type="button">Classes</a>
                            <a class="dropdown-item" type="button">Features</a>
                        </div>
                    </div> */}
                   
                    <button className="btn btn-primary" onClick={this.onFormSubmit}>
                      <i>Search</i>
                    </button>
                </div>
            </form>
        )
    }
}
export default SearchBar;

