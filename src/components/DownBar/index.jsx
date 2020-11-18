import React from 'react';
import './index.scss';
import { FiPlayCircle } from 'react-icons/fi';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import { FiRepeat } from 'react-icons/fi';
import { GiMicrophone } from 'react-icons/gi';
import { MdQueueMusic } from 'react-icons/md';
import { BsVolumeUpFill } from 'react-icons/bs';
import { TiDeviceLaptop } from 'react-icons/ti';

export default function DownBar(){
    return (
        <footer className="footer">
            <div className="music-info">
                <img src="https://1.bp.blogspot.com/-aqWRWMuaHF8/V7Y07HBM2CI/AAAAAAAAJB0/qiuNqvso9nQD31dfbTgI_oO2vZ5bj8NYQCEw/s1600/Folder.jpg" />
                <div className="infomations">
                    <h4>Metallica</h4>
                    <p>Phantom lord</p>
                </div>
            </div>
            <div className="music-control">
                <div className="controls">
                    <a href="#"><BiSkipPrevious /></a>
                    <a href="#"><FiPlayCircle /></a>
                    <a href="#"><BiSkipNext /></a>
                    <a href="#"><FiRepeat /></a>
                </div>
                <div className="progressBar"></div>
            </div>
            <div className="music-other-options">
                <a href="#"><GiMicrophone /></a>
                <a href="#"><MdQueueMusic/></a>
                <a href="#"><TiDeviceLaptop /></a>
                <a href="#"><BsVolumeUpFill /></a>
                <div className="volume"></div>
            </div>
        </footer>
    );
}