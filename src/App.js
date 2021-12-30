import './styles/normalize.css';
import './styles/global.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";


function App() {


    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
     );
}

export default App;
