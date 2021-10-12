import React from "react";
import "./style.scss";
import Cards from "../../../../components/sharedComponents/Cards";

export default function ExampleCards({ cardsInfo }) {
    return (
        <div className="examplesCardsContainer">
            <h1 className="cardsTextExamples">Examples</h1>
            <div className="exampleCards">
                {cardsInfo &&
                    cardsInfo.map((cardData, key) => (
                        <div className="randomCards" key={key}>
                            <h2>{cardData.title && cardData.title}</h2>
                            <Cards cardData={cardData.item} />
                        </div>
                    ))}
            </div>
        </div>
    );
}
