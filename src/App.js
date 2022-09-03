import React from "react"
import Card from "./Card.js"
import data from "./data.js"
import LandingPage from "./LandingPage"
import {Link} from "react-router-dom"



export default function App() {
    const cardInfo = data.map(element => {
        return (
        <Card 
        key={element.id}
        title={element.title}
        location={element.location} 
        googleMapsUrl={element.googleMapsUrl}
        startDate={element.startDate}
        endDate={element.endDate}
        description={element.description}
        imageUrl={element.imageUrl}
        readMoreUrl={element.readMoreUrl}  
        />
        )
        
    })
  return ( 

      <div className="container">

      
        <LandingPage />
        <div className="grid">
            {cardInfo}
        </div>
       
      </div>
      
    ) 
}