import React from "react"
import {Boop} from "./Boop"
import { Link } from "react-router-dom"


export default function Navbar() {
    return (
        <nav>
            
              <Boop rotation="60" timing="200">
              <i className="fa-solid fa-earth-americas"></i>
              </Boop> 
            <Link to="/"><p className="nav--text">my travel journal.</p></Link>
            
              
        </nav>
    )
}