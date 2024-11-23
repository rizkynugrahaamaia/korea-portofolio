import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Card } from '@/components/elements';
import 'swiper/css/navigation';

interface SwiperBaseProps {
  component?: React.FC<any>;
  data: Array<Record<string, any>>;
  arrowButton?: React.ReactNode;
  coverflowEffect?: object;
  effect?: string;
  custom?: object;
  navigation?: {
    prevEl: string;
    nextEl: string;
  };
  slidesPerView?: number | 'auto'; // Memperbaiki tipe slidesPerView
  spaceBetween?: number;
  centeredSlides?: boolean;
}

const SwiperBase: React.FC<SwiperBaseProps> = (props) => {
  const { arrowButton, component, data = [], ...custom } = props;
  return (
    <div className="relative">
      {arrowButton}
      <Swiper
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        pagination={false}
        modules={[EffectCoverflow, Navigation]}
        {...custom}>
        {component
          ? data.map((item, index) => component({ key: index, ...item }))
          : data.map((item, index) => (
              <SwiperSlide key={index}>
                <Card
                  profileImageUrl={item.profileImageUrl}
                  flagImageUrl={item.flagImageUrl}
                  name={item.name}
                  description={item.description}
                />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default SwiperBase;
