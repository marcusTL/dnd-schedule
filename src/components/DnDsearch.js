import react, {Component} from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import axios from 'axios';

class DnDsearch extends Component {

    state = {
        results: null
      }
      onSearchSubmit = async (input) =>{
        const response = await axios.get('https://www.dnd5eapi.co/api/'+input)
        this.setState({results: response.data.results});
      }

    /*
    dndSelect = (result) => {
        this.props.
    }
    */
    //<SearchResult searchresult={this.state.searchresult}/>
    render(){
        return(
            <div Class="col-sm-12">
                <div Class="col-sm-4">
                    <div Class="row">
                        <h1>DnD Search</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis blandit blandit. Vestibulum
                         vestibulum dolor lectus, quis rhoncus enim egestas quis. Etiam sollicitudin vitae metus vel mattis. Praesent
                          a nulla aliquam, rutrum eros vitae, dictum enim. Integer a auctor mi. Cras pulvinar dolor nisi, malesuada bibendum
                           ipsum congue sit amet. Nulla euismod, purus sed cursus maximus, mi massa aliquet sem, vitae accumsan arcu ante id
                            ex. Fusce quis venenatis eros, quis dignissim turpis.</p>
                
                        <SearchBar/>
                    </div>
                </div>
                <div Class="col-sm-3">
                    <h1>Content</h1>
                    
                  <SearchResult/> 

                </div>
            </div>
        );
    }
}
   
            



/*
const DnDSearch = () =>{
        <div className="DnDSearch">

        </div>
    );
}
*/
export default DnDsearch;