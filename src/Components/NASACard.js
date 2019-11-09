import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    border: 1px solid black;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const PresentContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Present = styled.h1`
    font-size: 3rem;
    font-family: 'ZCOOL XiaoWei', serif;

    text-transform: uppercase;
    letter-spacing: 4px;
    overflow: hidden;
    background: linear-gradient(90deg, #000, #fff, #000);
    background-repeat: no-repeat;
    background-size: 80%;
    animation: animate 15s linear infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
  }
  
  @keyframes animate {
    0% {
      background-position: -500%;
    }
    100% {
      background-position: 500%;
    }
  }
`;


const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Title = styled.h2`
    font-size: 2.5rem;
    font-family: 'ZCOOL XiaoWei', serif;
`;

const DescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Description = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    width: 69%;
    border: 1px solid black;
    background-color: gainsboro;
    padding: 3%;
`;

const NASACard = props => {
    console.log(props);

    return(
        <div className="nasaCard" key={props.date}>
            <PresentContainer>
                <Present className="present">NASA Presents the Image of the Day</Present>
            </PresentContainer>
            <CardContainer>
                <TitleContainer>
                    <Title className="title">{props.title}</Title>
                </TitleContainer>
                <div className="img-cont">
                    <img src={props.Img} alt="space NASA" />
                </div>
                <DescriptionContainer>
                    <Description>{props.explanation}</Description>
                </DescriptionContainer>
            </CardContainer>
        </div>
    )
}

export default NASACard;