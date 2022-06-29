import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./styles/estilos.css"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDZWkJZBZGJWpxBuPtrZDuxzEI31ZRIQHU",
  authDomain: "react-1204d.firebaseapp.com",
  projectId: "react-1204d",
  storageBucket: "react-1204d.appspot.com",
  messagingSenderId: "324253435267",
  appId: "1:324253435267:web:d8f5ef636f0d4596daa2b6"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
