import React from 'react';
import logo from '../../images/logo.png';
import './index.scss';
import { VscLibrary } from 'react-icons/vsc';
import { RiHomeFill, RiSearch2Fill } from 'react-icons/ri';
import { IoMdAdd } from 'react-icons/io';
import { AiFillHeart } from 'react-icons/ai';

export default function Aside(){
    return(
        <aside>
            <nav>
                <ul className="nav">
                    <li>
                        <h1>
                            <img src={logo} alt="logo-spotify"/>
                        </h1>
                    </li>
                    <li>
                        <a href="#">
                            <RiHomeFill />
                            Início
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <RiSearch2Fill />
                            Buscar
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <VscLibrary />
                            Sua Biblioteca
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="playlist">
                <div className="playlist-el-1">
                    <div>
                        Playlist
                    </div>
                    <div>
                        <IoMdAdd />
                        Criar Playlist
                    </div>
                    <div>
                        <AiFillHeart />
                        Músicas curtidas
                    </div>
                </div>
                <div className="playlist-el-2">
                    <ul>
                        <li>
                            <a href="#">Playlist 1</a>
                        </li>
                        <li>
                            <a href="#">Playlist 2</a>
                        </li>
                        <li>
                            <a href="#">Playlist 3</a>
                        </li>
                        <li>
                            <a href="#">Playlist 4</a>
                        </li>
                        <li>
                            <a href="#">Playlist 5</a>
                        </li>
                        <li>
                            <a href="#">Playlist 6</a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}