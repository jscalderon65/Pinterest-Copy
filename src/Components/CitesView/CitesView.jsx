import React,{useEffect} from 'react';
import {animateScroll as scroll} from 'react-scroll';
import NavbarSongsView from '../NavbarSongsView';
import { useHistory } from "react-router-dom";
const CitesView = () => {
    const history = useHistory();
    const PlusFunction = () =>history.push("/pin-builder/cites");
    useEffect(()=>{
        scroll.scrollToTop();
    },[]);
    return (
        <>
        <NavbarSongsView NavbarTitle={"Todas las canciones"} PlusFunction={PlusFunction}/>        
        <div>
            Hola mundo
        </div>
        </>
    )
}

export default CitesView
