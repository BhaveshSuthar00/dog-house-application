import { dataReducer } from "./Data/Reducer";
import {loginReducer} from './Login/Reducer'
import {compose, combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({data : dataReducer, login : loginReducer});

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)