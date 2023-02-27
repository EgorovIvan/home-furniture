import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import {Provider} from "react-redux";
import createStore from "./store";
import reportWebVitals from './reportWebVitals';

const store = createStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
reportWebVitals();
