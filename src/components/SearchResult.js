import React from 'react';
import { fetchData } from '../actions';
import { connect } from 'react-redux';


class SearchResult extends React.Component {
    componentDidMount(){
        this.props.fetchData();
    }
    render(){
        return this.props.name.map(spell => {
            return(
                <div>
                    <div className="item" key={spell.name}>
                        {spell.name}
                    </div>
                </div>
                
            )
        })
    }
}

const mapStateToProps = state => {
    return { name: state.name };
}

export default connect(mapStateToProps, {fetchData})(SearchResult);

/*
        (
            <div className="searchresult">
                <div className="results-group">
                    <h2>Results: </h2>
                    
                    
                </div>
            </div>
        )

    }
*/  