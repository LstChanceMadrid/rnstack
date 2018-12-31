import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'
import initialState from '../reducers/initialState';

let middleware = [thunk]

export default configureStore = (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    )
}