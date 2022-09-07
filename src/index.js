import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import App from './App';
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./style.css";
import Sydney from "./routes/sydney"
import Tenerife from "./routes/tenerife"
import Tulum from "./routes/tulum"
import Mexico from "./routes/mexico"
import Mauritius from "./routes/mauritius"
import StTropez from "./routes/st-tropez"
import Boston from "./routes/boston"
import Paris from "./routes/paris"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Router>
                <App />
        </Router>
      
);



