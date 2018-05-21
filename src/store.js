import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootRecucer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootRecucer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;
