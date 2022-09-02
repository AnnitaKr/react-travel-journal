import React from "react"
import {Boop} from "./Boop"

export default function Navbar() {
    return (
        <nav>
              <Boop rotation="60" timing="200">
              <i className="fa-solid fa-earth-americas"></i>
              </Boop> 
                <p className="nav--text">my travel journal.</p>
        </nav>
    )
}