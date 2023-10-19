import React from "react";
// import Slider from "react-slick";
import '../App.css';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ImageCarousel = (props) => {
    function CheckImage(path) {
        axios
            .get(path)
            .then(() => {
                return true;
            })
            .catch(() => {
                return false;
            });
    }
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className='Carousel-container'>
            {/* <Slider {...settings}>
                {props.input.images.map((entry) => {
                    return(
                        <div>
                            <img width = {750} height = {750} src = {entry}/>
                        </div>
                    )
                })}
            </Slider> */}
            <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={10}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            focusOnSelect={true}
            
            >
                {props.input.images.map((entry) => {
                    return(
                        <div>
                            <img width = {750} height = {750} src = {entry}/>
                        </div>
                    )
                })}
            </Carousel>
        </div>
        //debug
        // <div>
        //     <button onClick = {() => console.log(props.input.images)}>test inside carousel</button>
        // </div>
    );
}

export default ImageCarousel