import React from 'react';
import ReactDOM from 'react-dom';

import Main from './Main';
import "./index.css";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Main />,
    document.getElementById("root")
);

serviceWorker.unregister();