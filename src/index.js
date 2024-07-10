import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Favicon from "react-favicon"

// const faviconUrl = './codepen.ico';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        {/* <link rel="icon" type="image/png" href={faviconUrl} /> */}
        {/* <link rel="icon" type="image/png" href="/codepen.png" /> */}
        {/* <Favicon url={faviconUrl} /> */}

        <App />
    </div>
 

);
