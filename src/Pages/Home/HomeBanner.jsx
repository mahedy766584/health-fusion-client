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
                delay: 2500,
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
            <SwiperSlide><BannerDesign img1={img1} img2={img2} img3={img3}/></SwiperSlide>
            <SwiperSlide><BannerDesign img1={img1} img2={img2} img3={img3}/></SwiperSlide>
            <SwiperSlide><BannerDesign img1={img1} img2={img2} img3={img3}/></SwiperSlide>
            <SwiperSlide><BannerDesign img1={img1} img2={img2} img3={img3}/></SwiperSlide>
            <SwiperSlide><BannerDesign img1={img1} img2={img2} img3={img3}/></SwiperSlide>
            <SwiperSlide><BannerDesign img1={img1} img2={img2} img3={img3}/></SwiperSlide>
            <SwiperSlide><BannerDesign img1={img1} img2={img2} img3={img3}/></SwiperSlide>
            <SwiperSlide><BannerDesign img1={img1} img2={img2} img3={img3}/></SwiperSlide>
            <SwiperSlide><BannerDesign img1={img1} img2={img2} img3={img3}/></SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div>
        </Swiper>
    );
};

export default HomeBanner;