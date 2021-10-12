import React from "react";
import "./style.scss";

function Card({ cardData }) {
    return (
        <div className="card">
            {cardData.image && (
                <div className="cardImg">
                    <img src={cardData.image} alt={cardData.name} />
                </div>
            )}
            <div className="cardText">
                {cardData.name && <div>Name: {cardData.name}</div>}
                {cardData.status && <div>Status: {cardData.status}</div>}
                {cardData.species && <div>Species: {cardData.species}</div>}
                {cardData.type && <div>Type: {cardData.type}</div>}
                {cardData.origin && <div>Origin: {cardData.origin?.name}</div>}
                {cardData.dimension && (
                    <div>Location: {cardData.dimension}</div>
                )}
                {typeof cardData.episode === "string" && (
                    <div>Episode: {cardData.episode}</div>
                )}
                {cardData.air_date && <div>Air Date : {cardData.air_date}</div>}
            </div>
        </div>
    );
}

export default Card;
