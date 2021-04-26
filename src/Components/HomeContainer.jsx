import React,{useEffect} from "react";
import { CardContainer } from "./index.js";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {animateScroll as scroll} from 'react-scroll';
const HomeContainer = () => {
  useEffect(()=>{
    scroll.scrollToTop();
  },[]);
  return (
    <>
      <div className="HomeContainer-home-container  animate__animated animate__fadeIn">
        <ResponsiveMasonry
          className="masonry"
          columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
        >
          <Masonry gutter="15px" columnsCount={4}>
            <CardContainer>
              <Link to="/home/id">
                <img
                  className="CardContainer-gallery_img"
                  src="https://picsum.photos/id/237/200/300"
                  alt="chi"
                />
              </Link>
            </CardContainer>
            <CardContainer>
              <Link to="/home/id">
                <img
                  className="CardContainer-gallery_img"
                  src="https://picsum.photos/id/237/200/300"
                  alt="chi"
                />
              </Link>
            </CardContainer>
            <CardContainer>
              <Link to="/home/id">
                <img
                  className="CardContainer-gallery_img"
                  src="https://picsum.photos/id/237/200/300"
                  alt="chi"
                />
              </Link>
            </CardContainer>
            <CardContainer>
              <Link to="/home/id">
                <img
                  className="CardContainer-gallery_img"
                  src="https://picsum.photos/id/237/200/300"
                  alt="chi"
                />
              </Link>
            </CardContainer>
            <CardContainer>
              <Link to="/home/id">
                <img
                  className="CardContainer-gallery_img"
                  src="https://picsum.photos/id/237/200/300"
                  alt="chi"
                />
              </Link>
            </CardContainer>
            <CardContainer>
              <Link to="/home/id">
                <img
                  className="CardContainer-gallery_img"
                  src="https://picsum.photos/id/237/200/300"
                  alt="chi"
                />
              </Link>
            </CardContainer>
            <CardContainer>
              <Link to="/home/id">
                <img
                  className="CardContainer-gallery_img"
                  src="https://picsum.photos/id/237/200/300"
                  alt="chi"
                />
              </Link>
            </CardContainer>
            <CardContainer>
              <Link to="/home/id">
                <img
                  className="CardContainer-gallery_img"
                  src="https://picsum.photos/id/237/1000/300"
                  alt="chi"
                />
              </Link>
            </CardContainer>
            <CardContainer>
              <Link to="/home/id">
                <img
                  className="CardContainer-gallery_img"
                  src="https://picsum.photos/id/237/200/500"
                  alt="chi"
                />
              </Link>
            </CardContainer>
            <CardContainer>
              <Link to="/home/id">
                <img
                  className="CardContainer-gallery_img"
                  src="https://picsum.photos/id/237/200/300"
                  alt="chi"
                />
              </Link>
            </CardContainer>
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default HomeContainer;
