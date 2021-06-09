import React from 'react';
import './Socials.scss';
import Instagram from './img/instagram.png';
import TikTok from './img/tiktok.png';
import YouTube from './img/youtube.png';

const Social = ()=>{
    return(
        <div id="socials">
            <img src={Instagram} width="50" height="50" alt="Instagram" onClick={()=>window.open('https://www.instagram.com/teoriadecuerdas_oficial/')}/>
            <img src={YouTube}   width="50"             alt="YouTube"   onClick={()=>window.open('https://www.youtube.com/channel/UCNI_nHxEBy4_YWx6EQ38NKg')}/>
            <img src={TikTok}    width="45" height="45" alt="TikTok"    onClick={()=>window.open('https://www.tiktok.com/@teoriadecuerdas')}/>
        </div>
    )
}

export default Social;
