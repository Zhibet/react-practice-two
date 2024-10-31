import React from 'react';
import ReactDOM from 'react-dom/client';
import DataComponent from './dataComponent'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <App name='amadou'/>
        <DataComponent/>
    </div>
);
