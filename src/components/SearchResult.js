import React from 'react';
import { fetchData } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectItem } from '../actions';


class SearchResult extends React.Component {
    componentDidMount(){
        this.props.fetchData();
    }
    renderList() {
        console.log(this.props.spells)
        return this.props.spells.map(spell => {
            return <Link to={`/spellDetails/${spell.index}`}>
                <li key={spell} onClick={() => this.props.selectItem(spell)} >
                   <h4>{spell.name}</h4>
                </li>
                </Link>
            
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

const mapStateToProps = (state) => {return { spells: state.spells,
    selectItem: selectItem};}

const mapDispatchToProps = {selectItem: selectItem} 

export default connect(mapStateToProps ,{fetchData,selectItem})(SearchResult);

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