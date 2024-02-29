import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import "@fontsource/inter/300.css"; // Light
import "@fontsource/inter/400.css"; // Regular
import "@fontsource/inter/500.css"; // Medium
import "@fontsource/inter/600.css"; // Semi-Bold
import "@fontsource/inter/700.css"; // Bold
import "@fontsource/inter/800.css"; // Extra-Bold
import "@fontsource/inter/900.css"; // Black
import {initializeApp} from 'firebase/app';

export const FIREBASE_CONFIG = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
initializeApp(FIREBASE_CONFIG);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

