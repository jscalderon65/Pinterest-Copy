import React,{useEffect} from 'react';
import {animateScroll as scroll} from 'react-scroll';
import NavbarSongsView from '../NavbarSongsView';
import { useHistory } from "react-router-dom";
const PhotosView = () => {
    const history = useHistory();
    const PlusFunction = () =>history.push("/pin-builder/photos");
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

export default PhotosView
