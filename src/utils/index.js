import c from './index.module.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Overlay = ({callback, type}) => {
    return (
        <div onClick={() => {callback(false)}} className={c.overlay}></div>
    )
}

export { Overlay }