import React from "react";

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <img src={props.data.imageUrl} alt="Location" className="card-img"/>
            <div>
                <div className="card-location">
                    <p>{props.data.location}</p>
                    <a href={props.data.googleMapsUrl}>View on Google Maps</a>
                </div>
                <p className="card-title">{props.data.title}</p>
                <p className="card-dates">{props.data.startDate} - {props.data.endDate}</p>
                <p className="card-body">{props.data.description}</p>
            </div>
            <br/>
        </div>
    )
}