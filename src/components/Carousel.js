import React from "react";
import Slider from "react-slick";

const Carousel = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings}>
                {props.input.images.map((entry) => {
                    return(
                        <div>
                            <img src = {entry}/>
                        </div>
                    )
                })}
            </Slider>
        </div>
        //debug
        // <div>
        //     <button onClick = {() => console.log(props.input.images)}>test inside carousel</button>
        // </div>
    );
}

export default Carousel