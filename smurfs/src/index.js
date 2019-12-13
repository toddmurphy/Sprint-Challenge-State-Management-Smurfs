import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import "./index.css";
import App from "./components/App";

//import --> 'SmurfReducer'
import SmurfReducer from './reducers/SmurfReducer';


//Step 1: Create the store and add 'SmurfReducer' and 'applyMiddleWare(thunk)'
const store = createStore(SmurfReducer, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));
