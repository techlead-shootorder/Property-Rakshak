import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
    alt: 'Luxury Villa'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern Apartment'
  },
  {
    url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Contemporary Home'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Elegant Property'
  }
];

export function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-8 md:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Your Property's Raksha is in our safe hands
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-6 max-w-2xl mx-auto lg:mx-0">
              Real Estate and Property Management Services for NRI's and Local Residence. We provide property management services for NRI and Local real estate investors which protects management services. We provide end-to-end property management services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Link 
                to="/contact"
                className="btn-primary px-6 md:px-8 py-3 rounded-full flex items-center justify-center w-full sm:w-auto"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/packages"
                className="btn-secondary px-6 md:px-8 py-3 rounded-full text-center w-full sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative w-full mt-8 lg:mt-0">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-xl md:rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl md:rounded-2xl" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}