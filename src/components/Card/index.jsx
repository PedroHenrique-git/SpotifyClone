import React from 'react';
import './card.scss';
import { BsFillPlayFill } from 'react-icons/bs'

export default function Card({ image, nameMusic, nameArtist}){
    return(
        <div className="card">
            <div className="music-image">
                <img src={image} alt="music"/>
            </div>
            <div className="music-info">
                <h3>{nameMusic}</h3>
                <p>{nameArtist}</p>
            </div>
            <div className="btn-play">
                <BsFillPlayFill />
            </div>
        </div>
    );
}