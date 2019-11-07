import React from "react";

const NASACard = props => {
    console.log(props);

    return(
        <div className="nasaCard" key={props.date}>
            <h1>{props.title}</h1>
            <img src={props.Img} alt="space NASA" />
            <p>{props.explanation}</p>
        </div>
    )
}

export default NASACard;