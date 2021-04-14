import React from 'react';
import { fetchData } from '../actions';
import { connect } from 'react-redux';


class SearchResult extends React.Component {
    componentDidMount(){
        this.props.fetchData();
    }
    renderList() {
        console.log(this.props.names)
        return this.props.names.map(spell => {
            return (
                <li className="item" key={spell.name}>
                   <h4>{spell.name}</h4>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="row">
                    <h1>DnD 5e Spells</h1>
                    <ul class="namelist">
                        {this.renderList()}
                    </ul>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return { names: state.names };
}

export default connect(mapStateToProps, {fetchData})(SearchResult);

/*
    renderResult() {
        return this.props.names.map(spell => {
            return(
                <div>
                    <div className="item"> 
                    
                        <h2>{spell.name}</h2>
                        
                    </div>
                </div>
                
            )
        })
    }
    render() {
        return(
            <div>
                {this.renderResult}
            </div>
        )

    }
    */