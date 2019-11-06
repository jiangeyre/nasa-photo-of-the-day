import React from "react";

const NASACard = props => {
    console.log(props);

    return(
        <div className="nasaCard" key={props.date}>
            <img src={props.Img} alt="space NASA" />
            <h2>{props.title}</h2>
            <p>{props.explanation}</p>
        </div>
    )
}

export default NASACard;