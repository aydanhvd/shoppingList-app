import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { MODULE_NAME as listModuleName, reducer as listReducer } from './list';
import { MODULE_NAME as settingsModuleName, reducer as settingsReducer } from './settings';
import { updateAS, getDataFromAS } from '../untils/storeDataAS';

const reducer = combineReducers({
	[listModuleName]: listReducer,
	[settingsModuleName]: settingsReducer
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => updateAS(store));
getDataFromAS(store);

export default store;
