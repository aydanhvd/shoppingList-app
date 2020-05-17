import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { dataReducer } from './data'


const reducer = combineReducers({
    data: dataReducer,
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;