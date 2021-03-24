import react from 'react';

const SearchResult = props =>{
        return(
            <div className="searchresult">
                <h3>Result: </h3>
                <div>{props.SearchResult}</div>

            </div>
        )
}

export default SearchResult;