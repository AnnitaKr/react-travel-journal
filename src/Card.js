import React from "react"
import { Link } from "react-router-dom"


export default function Card(props) {


    return (
    
        <section className="card-container">
            <img className="main--image" src={props.imageUrl} alt="travel" />
            <h1 className="main--heading">{props.title}</h1>
            <h3 className="main--date">{props.startDate} - {props.endDate}</h3>
            <div className="location">
                <i className="fa-solid fa-location-dot"></i>
                <p className="main--location">{props.location}</p>
                <a href={props.googleMapsUrl} className="main--google-link">View on Google Maps</a>
            </div>
            <p className="main--description">{props.description}<Link to={props.readMoreUrl}>Read my story</Link></p>
        </section>
        
    )
}