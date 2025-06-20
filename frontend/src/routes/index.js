import { Routes, Route } from "react-router-dom";

import Home from '../pages/Home';
import About from "../pages/About";

export default function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/aboutus" element={ <About/> } />
        </Routes>
    )
}