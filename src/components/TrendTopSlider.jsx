import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow'; 
import '@styles/TrendTopSlider.css';
import topArt from '../lib/topArt.json';

export default function TopArt() {
    

    return (
        
        <Swiper
            effect={'coverflow'}
            grabCursor={false}
            centeredSlides={true}
            slidesPerView={'3.8'}
            coverflowEffect={{
                
                rotate: 10,
                stretch: 0,
                depth: 75,
                modifier:2.5,
            }}
            autoplay = {{
                delay:3000,
                disableOnInteraction:false
            }}
            loop = {true}
            modules={[Autoplay,EffectCoverflow]}
        >
        {

            topArt.map((item) => (
                <SwiperSlide>
                    <section className="slider-card-trend">

                        <section className="slider-card-image">
                        {<img src={item.image} alt="trending" />}
                        </section>

                        <section className="slider-card-creator">
                            <section className="card-creator-info">
                                <p>@{item.autor}</p>
                                <p className='creator-info-value'>
                                    {item.price} $
                                </p>
                            </section>
                        </section>
                    </section>
                </SwiperSlide>
            ))
        }
        </Swiper>

    );
}
