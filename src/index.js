import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var root = document.getElementById('root');

ReactDOM.render(<App />, root);


serviceWorker.unregister();
