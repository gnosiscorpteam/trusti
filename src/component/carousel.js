import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { brands } from '../const/brand'

export default function Carousel() {

  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 3000,
    variableWidth : true,
    // slidesToShow: brands.length > 4 ? 4 : brands.length,
    slidesToScroll : 1,
 slidesToScroll: 1,
    // centerMode: true
    // fade: true ,
    // lazyLoad: true,
  }

  return (
    <div className='content h-[150px] bg-[#f1f1f1] flex items-center mb-[7vh]  px-[0px] lg:px-[100px]'>
      <Slider {...sliderSettings}>
        {brands.map((card, index) => (
          <div key={index} className='mx-8'>
            <img src={card} className='h-[40px]' />
          </div>
        ))}
      </Slider>
    </div>
  )
}