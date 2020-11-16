import React from 'react';
import './index.scss';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export default function Header(){
    return(
        <header>
            <div className="arrow-container">
                <a href="#">
                    <MdKeyboardArrowLeft />
                </a>
                <a href="#">
                    <MdKeyboardArrowRight />   
                </a>
            </div>
            <div className="options-container">
                <a href="#" className="options">Faça upgrade</a>
                <a href="#" className="options">usuário</a>
            </div>
        </header>
    );
}