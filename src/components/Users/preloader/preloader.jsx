import React from 'react';
import s from './preloader.module.css';

const Preloader = () => {
    return <div>
        <div className={s.loadingio}><div className={s.ldio}>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div></div>
    </div>
}

export default Preloader;