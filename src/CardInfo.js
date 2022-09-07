import React from "react"
import Card from "./Card"
import data from "./data"

export default function CardInfo() {
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
        <div className="grid">
            {cardInfo}
        </div>
    )
}


