import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./Redux/Store";



ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));



serviceWorker.unregister();
