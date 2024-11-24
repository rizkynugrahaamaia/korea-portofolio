import React from 'react';
import { Swiper } from '@/components/elements';
import { SwiperSlide } from 'swiper/react';
import { useScreen } from '@/hooks/useScreen';
import Image from 'next/image';

export default function Main() {
  const { isMobile } = useScreen();

  const data = [
    {
      description: 'description',
      flagImageUrl: '/flag1.png',
      id: 1,
      name: 'Card 1',
      profileImageUrl: '/avatar1.png',
    },
    {
      description: 'description',
      flagImageUrl: '/flag1.png',
      id: 2,
      name: 'Card 2',
      profileImageUrl: '/avatar1.png',
    },
    {
      description: 'description',
      flagImageUrl: '/flag1.png',
      id: 3,
      name: 'Card 3',
      profileImageUrl: '/avatar1.png',
    },
    {
      description: 'description',
      flagImageUrl: '/flag1.png',
      id: 4,
      name: 'Card 4',
      profileImageUrl: '/avatar1.png',
    },
    {
      description: 'description',
      flagImageUrl: '/flag1.png',
      id: 5,
      name: 'Card 5',
      profileImageUrl: '/avatar1.png',
    },
  ];

  const data2 = [
    {
      slideImage: '/icon-marketing.svg',
      title: '해외 마케팅',
    },
    {
      slideImage: '/icon-image.svg',
      title: '퍼블리셔',
    },
    {
      slideImage: '/icon-box.svg',
      title: '캐드원(제도사)',
    },
    {
      slideImage: '/icon-target.svg',
      title: '해외 세일즈',
    },
    {
      slideImage: '/icon-call.svg',
      title: '해외 세일즈',
    },
  ];

  return (
    <main className="w-full p-8 font-black">
      <div className="flex flex-col lg:flex-row w-ful max-w-7xl mx-auto text-white gap-12">
        <div className="flex-1">
          <h1 className="hidden md:block text-5xl leading-[62.4px] w-full overflow-visible whitespace-normal break-words">
            최고의 실력을 가진 외국인 인재를 찾고 계신가요?
          </h1>
          <br />
          <p className="text-2xl text-[#FFFFFFCC]">법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.</p>
          <br />
          <p className="underline text-lg">개발자가 필요하신가요?</p>
          <br />
          <div className="hidden md:flex gap-4">
            <div className="flex-1">
              <hr />
              <p className="text-lg mt-1">평균 월 120만원</p>
              <p className="text-base mt-2 text-[#FFFFFFCC]">임금을 해당 국가를 기준으로 계산합니다.</p>
            </div>
            <div className="flex-1">
              <hr />
              <p className="text-lg mt-1">최대 3회 인력교체</p>
              <p className="text-base mt-2 text-[#FFFFFFCC]">막상 채용해보니 맞지 않아도 걱정하지 마세요.</p>
            </div>
            <div className="flex-1">
              <hr />
              <p className="text-lg mt-1">평균 3일, 최대 10일</p>
              <p className="text-base mt-2 text-[#FFFFFFCC]">급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.</p>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full max-w-lg mx-auto px-8 lg:px-0">
          <Swiper
            arrowButton={
              <>
                <button className="custom-prev absolute left-0 z-10">
                  <Image src="/caret-right.svg" alt="Previous" width={25} height={25} />
                </button>
                <button className="custom-next absolute right-0 z-10">
                  <Image src="/caret-left.svg" alt="Next" width={25} height={25} />
                </button>
              </>
            }
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next',
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 50,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            data={data}
            slidesPerView={isMobile ? 'auto' : 2}
          />
        </div>
      </div>

      <div className="hidden md:block -mr-8 overflow-hidden mt-8 ml-44">
        <Swiper component={Content} data={data2} slidesPerView={3.5} spaceBetween={10} centeredSlides={false} />
      </div>
    </main>
  );
}

interface ContentProps {
  component?: React.FC<any>;
  data: Array<Record<string, any>>;
  custom?: object;
  key?: number;
  title?: string;
  slideImage: string;
}

const Content: React.FC<ContentProps> = (props) => {
  const { key, slideImage, title } = props;
  return (
    <SwiperSlide key={key}>
      <div className="flex bg-[#FFFFFF33] p-4 rounded-lg items-center">
        <div className="bg-[#FFFFFF66] p-4 rounded-lg flex-nowrap mr-4">
          <Image src={slideImage} alt="Flag" width={25} height={18} className="rounded-sm" />
        </div>
        <h1 className="text-white text-2xl">{title}</h1>
      </div>
    </SwiperSlide>
  );
};
