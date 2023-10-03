import { configureStore } from "@reduxjs/toolkit"; // createStore Replacement
import thunk from 'redux-thunk';
import subjectsReducer from './reducers/subjects';

const middleware = [thunk]

const store = configureStore({
    reducer: {
        subjectsData: subjectsReducer
    },
    middleware: middleware,
});

export default store;