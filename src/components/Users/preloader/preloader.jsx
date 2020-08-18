import React from 'react';
import s from './preloader.module.css';

const Preloader = () => {
    return <div>
        <div class={s.loadingio}><div class={s.ldio}>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div></div>
    </div>
}

export default Preloader;