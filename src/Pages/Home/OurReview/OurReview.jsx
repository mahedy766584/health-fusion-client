import Container from "../../../Components/Container/Container";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './review.css';
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ReviewCart from "./ReviewCart";

const OurReview = () => {

    const axiosPublic = useAxiosPublic()

    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic('/reviews')
            return res.data;
        }
    })

    return (
        <Container>
            <div className="space-y-12">
                <div>
                    <div className="text-center"><SectionTitle heading={'What Our Patients Says'} /></div>
                    <p className="font-kanit text-center text-gray-700 lg:w-4/5 mx-auto">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
                <div className="flex justify-center items-center mx-auto">
                    <Swiper
                        slidesPerView={1}
                        centeredSlides={false}
                        slidesPerGroupSkip={1}
                        grabCursor={true}
                        keyboard={{
                            enabled: true,
                        }}
                        breakpoints={{
                            769: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                            },
                        }}
                        scrollbar={true}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                        className="mySwiper"
                    >
                        {
                            reviews?.map(review => <SwiperSlide key={review._id}>
                                <ReviewCart review={review} />
                            </SwiperSlide>)
                        }

                    </Swiper>
                </div>
            </div>
        </Container>
    );
};

export default OurReview;