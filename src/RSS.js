//Action creators
const standardView = () => ({ type: 'STANDARD'}); 
const RSSView = () => ({ type: 'RSSVIEW'}); 


//Reducers
const bannerReducer = (customView="standardView", action) => {
    if (action.type === 'STANDARD') { return "ui label massive red"; }
    if (action.type === 'RSSVIEW') { return "ui label massive blue"; }
    return customView;
};


//Store
const store = Redux.createStore(bannerReducer);


//update html
function render(){
   document.getElementById("value").className = store.getState().toString();
}


//Subscribe på ændringer, dvs callback-funktionen render() kaldes når store opdateres
store.subscribe(render);