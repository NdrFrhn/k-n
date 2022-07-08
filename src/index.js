import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './routers/App'

const ehila = document.getElementById('root');
const app = ReactDOMClient.createRoot(ehila);
app.render(<App />);