import { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Image from "next/image";
import Personalidad from '../public/personalidad.png'
import Musica from '../public/musica.png'
import Pelicula from '../public/pelicula.png'
import Dato from '../public/dato.png'

interface ObjectImg{
    id: number,
    url: any,
    description: string,
    name: any,
    color: string,
    caracteristicas: {
      dato: string,
      musica: string,
      pelicula: string,
      personalidad: string
    }
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
        // effect='fade'
        speed={300}
        slidesPerView={1}
        loop
        scrollbar={{ draggable: true }}
        className="carrusel"
      >
        {
          imgs.map((img)=>(
            <>
              <SwiperSlide key={img.id}>
                <div className="personajeBx">
                  <div className="bx">
                    <div className="imgBx">
                      <Image
                          src={img.url}
                          alt={img.description}
                      />
                    </div>
                    <p style={{ background: img.color }}>{img.description}</p>
                  </div>
                  <div className="name imgBx">
                    <Image
                      src={img.name}
                      alt='name'
                    />
                  </div>
                  <div className="caracteristicas">
                    <div>
                      <div className="imgBx icon">
                        <Image
                          src={Personalidad}
                          alt='personalidad'
                        />
                      </div>
                      <p>Personalidad</p>
                      <p className="text">{img.caracteristicas.personalidad}</p>
                    </div>
                    <div>
                      <div className="imgBx icon">
                        <Image
                          src={Musica}
                          alt='musica'
                        />
                      </div>
                      <p>Musica</p>
                      <p className="text">{img.caracteristicas.musica}</p>
                    </div>
                    <div>
                      <div className="imgBx icon">
                        <Image
                          src={Pelicula}
                          alt='pelicula'
                        />
                      </div>
                      <p>Pelicula</p>
                      <p className="text">{img.caracteristicas.pelicula}</p>
                    </div>
                    <div>
                      <div className="imgBx icon">
                        <Image
                          src={Dato}
                          alt='dato'
                        />
                      </div>
                      <p>Dato</p>
                      <p className="text">{img.caracteristicas.dato}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))
        }
      </Swiper>
    </div>
  )
}