import dndapi from '../apis/dnd';

export const fetchData = () => async dispatch => {
    const response = await dndapi.get('/api/spells/lightning-bolt')
    dispatch({type: 'FETCH_DATA', payload: response.data.name}) 

    //this is suppossed to fetch the name from https://www.dnd5eapi.co/api/spells/lightning-bolt
}

