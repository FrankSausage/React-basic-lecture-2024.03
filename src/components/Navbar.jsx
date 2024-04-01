import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
            <Link to='/' style={{marginRight:'10px'}}>Home</Link>
            <Link to='/board'>Board</Link>
        </nav>
    );

}