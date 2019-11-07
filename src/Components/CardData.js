import React, { useState, useEffect } from "react";
import axios from "axios";
import NASACard from "./NASACard";
import styled from "styled-components";

const Button = styled.button`
    font-size: 1.2rem;
    font-family: 'Lato', sans-serif;
    background-color: silver;
    border-radius: 20px;
    width: 125px;
    height: 40px;
`;

let datee;
window.addEventListener("load", () => {
    datee = document.getElementsByClassName("currentDate")[0].textContent;
})

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

    let update = () => {
        setNasaData({});
        datee = document.getElementsByClassName("currentDate")[0].textContent;
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=87hNAagthnGAhl8upa8HuDVjX2oNSbfl18FsyPLu&date=${datee}`)
        .then(response => {
            console.log(response.data);
            setNasaData(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    console.log("Image Test", nasaData.url);

    return (
        <div>
            <Button className="refreshBtn" onClick={update} >Blast off!</Button>
            <NASACard key={nasaData.data} title={nasaData.title} explanation={nasaData.explanation} Img={nasaData.hdurl}/>
        </div>
    )
}

export default CardData;