import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import axios from 'axios';  // Important!!!

axios.defaults.baseURL = 'https://api.nasa.gov';
axios.defaults.params = {};
axios.defaults.params['api_key'] = 'KHefOpgTeBukhQAgBb8Zu14XaBjXXea4oXsascUF';
axios.defaults.params['thumbs'] = 'true';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)