import { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Image from "next/image";

interface ObjectImg{
    id: number,
    url: any,
    description: string
}

interface Props{
    imgs: ObjectImg[]
}

export default function Carrusel({imgs}: Props) {

  return (
    <div className="carruselBx">
      <Swiper
        modules={[Navigation,EffectFade]}
        navigation
        effect='fade'
        speed={300}
        slidesPerView={1}
        loop
        scrollbar={{ draggable: true }}
        className="carrusel"
      >
        {
          imgs.map((img)=>(
            <SwiperSlide key={img.id}>
                <div className="personajeBx">
                    <div className="imgBx">
                        <Image
                            src={img.url}
                            alt={img.description}
                        />
                    </div>
                    <p>{img.description}</p>
                </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}