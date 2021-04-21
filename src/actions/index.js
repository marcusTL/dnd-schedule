import dndapi from '../apis/dnd';

export const selectItem = (spell) => {
    return{
        type: 'ITEM_SELECTED',
        payload: spell
    }
}
export const fetchData = () => async dispatch => {
    const response = await dndapi.get('/api/spells')
    console.log("response.data.name")
    dispatch({type: 'FETCH_DATA', payload: response.data.results})
    //this is suppossed to fetch the name of all spells here https://www.dnd5eapi.co/api/spells
    
}