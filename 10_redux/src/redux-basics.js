const redux = require('redux');
const createStore = redux.createStore;
const initialState = {
    counter: 0,
    name: 'Maciuś'
}

// Reducer 
const rootReducer = (curState = initialState, action) => {
    switch (action.type) {
        case 'INC_COUNTER':
            return {
                ...curState, 
                counter: curState.counter + 1
            }
        case 'ADD_COUNTER':
            return {
                ...curState, 
                counter: curState.counter + action.value
            }
    }
    return curState;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription - attribute of subscribe is an function that will be executed whenever the state is updated
store.subscribe( () => {
    console.log('[Subscription]', store.getState());
});

// Dispatching Acion
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());