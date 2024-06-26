import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../img/photos/img1.jpeg';
import img2 from '../img/photos/img2.jpeg';
import img3 from '../img/photos/img3.jpeg';
import img4 from '../img/photos/img4.jpeg';
import img5 from '../img/photos/img5.jpeg';
import img6 from '../img/photos/img6.jpeg';
import img7 from '../img/photos/img7.jpeg';
import img8 from '../img/photos/img8.jpeg';

const Photography = () => {
  const slides = [{
    url:img1,
    caption:'Ethereal Beauty'
  },
  {
    url:img2,
    caption:' Where Petals meet Wings'
  },
  {
    url:img3,
    caption:'Dewdrop Jewles'
  },
  {
    url:img4,
    caption:'Cat Candid'
  },
  {
    url:img5,
    caption:'Endless Naps'
  },
  {
    url:img6,
    caption:'Golden Hour'
  }, {
    url:img7,
    caption:'Clouds'
  }, {
    url:img8,
    caption:'Spider'
  }





];

  const settings = {
    dots: true,
    infinite: true,
    speed:3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-full scroll-smooth  "  id='photography'  >
      <Slider {...settings}  >
        {slides.map((img, index) => (
          <div key={index} className="h-full relative " >
            <img
              src={img.url}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover hover:cursor-pointer"
              style={{ aspectRatio: '9/14' }}
            />
            <div className="absolute  bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-p opacity-0 transition-opacity duration-300 hover:opacity-100">
              <p className="text-sm">{`${img.caption}`}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Photography;
