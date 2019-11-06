import React, { useState, useEffect } from "react";
import axios from "axios";
import NASACard from "./NASACard";

function CardData(){
    const [nasaData, setNasaData] = useState({});

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=SrwRu3f53Cpx9VKUbjcZdHicRHLrpK0yFiUbRj5b').then(response => {
            console.log(response.data);
            setNasaData(response.data);
        }).catch(error => {
            console.log("The data was not returned.", error);
        });
    }, []);

    console.log("Image Test", nasaData.url);

    return (
        <div>
            {<NASACard key={nasaData.data} title={nasaData.title} explanation={nasaData.explanation} Img={nasaData.hdurl}/>}
        </div>
    )
}

export default CardData;