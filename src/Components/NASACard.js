import React from "react";

const NASACard = props => {
    console.log(props);

    return(
        <div className="nasaCard" key={props.date}>
            <h1>NASA Presents the Image of the Day</h1>
            <h2>{props.title}</h2>
            <img src={props.Img} alt="space NASA" />
            <p>{props.explanation}</p>
        </div>
    )
}

export default NASACard;