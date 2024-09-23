// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carouselStyle.css'

import { useRef } from 'react';
import BannerDesign from './BannerDesign';

import img1 from "../../assets/doctorsImg/img1.jpg"
import img2 from "../../assets/doctorsImg/img2.jpg"
import img3 from "../../assets/doctorsImg/img3.jpg"
import img4 from "../../assets/doctorSlideImage/bg5.jpg"
import img5 from "../../assets/doctorSlideImage/bg6.jpg"
import img6 from "../../assets/doctorSlideImage/bg7.jpg"
import img7 from "../../assets/doctorSlideImage/bg8.jpg"
import img8 from "../../assets/doctorSlideImage/bg9.jpg"
import img9 from "../../assets/doctorSlideImage/bg10.jpg"
import img10 from "../../assets/doctorSlideImage/bg11.jpg"
import img11 from "../../assets/doctorSlideImage/bg12.jpg"
import img12 from "../../assets/doctorSlideImage/bg13.jpg"
import img13 from "../../assets/doctorSlideImage/bg14.jpg"
import img14 from "../../assets/doctorSlideImage/bg15.jpg"

const HomeBanner = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 4500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
        >
            <SwiperSlide><BannerDesign img1={img1} img2={img2} img3={img3}/></SwiperSlide>
            <SwiperSlide><BannerDesign img1={img4} img2={img5} img3={img6}/></SwiperSlide>
            <SwiperSlide><BannerDesign img1={img7} img2={img8} img3={img9}/></SwiperSlide>
            <SwiperSlide><BannerDesign img1={img10} img2={img11} img3={img12}/></SwiperSlide>
            <SwiperSlide><BannerDesign img1={img13} img2={img2} img3={img14}/></SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48"  ref={progressCircle}>
                    <circle stroke='#F87171' cx="24" cy="24" r="20" ></circle>
                </svg>
                <span className='text-[#F87171] ' ref={progressContent}></span>
            </div>
        </Swiper>
    );
};

export default HomeBanner;