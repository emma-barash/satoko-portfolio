import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import SatokoProvider from './context/SatokoProvider'


ReactDOM.render(
<BrowserRouter>
    <SatokoProvider>
        <App />
    </SatokoProvider>
</BrowserRouter>,
document.getElementById('root')
)