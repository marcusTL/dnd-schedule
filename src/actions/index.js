import dndapi from '../apis/dnd';

export const fetchData = () => async dispatch => {
    const response = await dndapi.get('/api/spells')
    console.log("response.data.name")
    dispatch({type: 'FETCH_DATA', payload: response.data.results}) 

    //this is suppossed to fetch the name of https://www.dnd5eapi.co/api/spells/lightning-bolt
}
/*
export const fetchDrivers = () => async dispatch => {
    const response = await ergast.get('/api/f1/2019/drivers.json');
    dispatch({type: 'FETCH_DRIVERS', payload: response.data.MRData.DriverTable.Drivers})
};
*/