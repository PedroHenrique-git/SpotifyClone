import React from 'react';
import './index.scss';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { BiDownArrow } from 'react-icons/bi';

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
                <a href="#" className="options">
                    <div className="user-icon">
                        <img src="https://images.unsplash.com/photo-1602525968214-91f56579d036?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
                    </div>
                    <span>
                        usuário
                        <BiDownArrow />
                        <ul className="submenu">
                            <li><a href="#">Conta</a></li>
                            <li><a href="#">Perfil</a></li>
                            <li></li>
                            <li><a href="#">Sair</a></li>
                        </ul>
                    </span>
                </a>
            </div>
        </header>
    );
}