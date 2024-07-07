import React from "react"

export default function Card(props) {
    return (
        <section className="card">
            <img className="card--image" src={props.imageUrl} alt="" />
            <div className="card--info">
                <div className="card--location"><i class="fa-solid fa-location-dot"></i><h3>{props.location.toUpperCase()}</h3><a href={props.googleMapsUrl}>View on Google Maps</a></div>
                <h1 className="card--title">{props.title}</h1>
                <h3 className="card--date">{props.startDate} - {props.endDate}</h3>
                <p className="card--desc"> {props.description} </p>
            </div>
        </section>
    )
}