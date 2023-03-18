import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import '../styles/slider.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = ({images}) => {
    return (
        <Swiper
        className='slider'
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        >
           {images.map((image, index) => (
            <SwiperSlide className='slide' key={index}><img className='slide_image' src={require(`../assets/places/${image.name}`)} alt="" /></SwiperSlide>
           ))}
        </Swiper>
    )
}
export default Slider