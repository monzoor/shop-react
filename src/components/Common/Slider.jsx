import React from "react";
import Slider from "react-slick";


class SimpleSlider extends React.Component {
    render() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true
    };

    const images = [
      {
          imgSrc: "//images.shoparu.com/2018/05/06/top_slide/20180506_1525601659_724845.png",
          alt: "test",
          link: "#"
      },
      {
          imgSrc: '//images.shoparu.com/2018/05/06/top_slide/20180506_1525601793_479084.jpeg',
          alt: "test",
          link: "#"
      },
      {
          imgSrc: '//images.shoparu.com/2018/05/06/top_slide/20180506_1525601972_422241.jpeg',
          alt: "test",
          link: "#"
      },
      {
          imgSrc: '//images.shoparu.com/2018/05/06/top_slide/20180506_1525602033_857403.jpeg',
          alt: "test",
          link: "#"
      },
      {
          imgSrc: '//images.shoparu.com/2018/05/06/top_slide/20180506_1525601659_724845.png',
          alt: "test",
          link: "#"
      }
    ];
    return (
      <div className="col-12 p-0">
        <Slider {...settings}>
            {images.map((image, key) => <div key={key}><a href={image.link}><img src={image.imgSrc} alt={image.alt} /></a></div>)}
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
