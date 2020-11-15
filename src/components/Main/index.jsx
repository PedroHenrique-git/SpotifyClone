import React from 'react';
import './index.scss';
import Aside from '../Aside';
import DownBar from '../DownBar';
import Header from '../Header';
import Conteudo from '../conteudo';

export default function Main(){
    return(
        <div onScroll={() => alert('Scrollado')} className="container">
            <Header />
            <Aside />
            <Conteudo />
            <DownBar />
        </div>    
    );
}