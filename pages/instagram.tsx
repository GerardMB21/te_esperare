import Title from "../components/Title";
import { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Separator from "../components/Separator";
import Image from "next/image";
import InstagramTitle from '../public/instagram_title.png'
import QrInstagram from '../public/profile_instagram.jpg'
import vid1 from '../public/post_1.jpg'
import vid2 from '../public/post_2.jpg'
import vid3 from '../public/post_3.jpg'
import vid4 from '../public/post_4.jpg'
import vid5 from '../public/post_5.jpg'
import vid6 from '../public/post_6.jpg'
import vid7 from '../public/post_7.jpg'
import vid8 from '../public/post_8.jpg'
import vid9 from '../public/post_9.jpg'
import vid10 from '../public/post_10.jpg'
import vid11 from '../public/post_11.jpg'
import vid12 from '../public/post_12.jpg'
import vid13 from '../public/post_13.jpg'
import Link from "next/link";

const videos = [
  {
    id: 1,
    url: vid1
  },
  {
    id: 2,
    url: vid2
  },
  {
    id: 3,
    url: vid3
  },
  {
    id: 4,
    url: vid4
  },
  {
    id: 5,
    url: vid5
  },
  {
    id: 6,
    url: vid6
  },
  {
    id: 7,
    url: vid7
  },
  {
    id: 8,
    url: vid8
  },
  {
    id: 9,
    url: vid9
  },
  {
    id: 10,
    url: vid10
  },
  {
    id: 11,
    url: vid11
  },
  {
    id: 12,
    url: vid12
  },
  {
    id: 13,
    url: vid13
  },
]

export default function instagram() {
  return (
    <div className="page instagramPage">
      <div className="contain">
        <Title />
        <div className="content">
          <div className="imgBx" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={InstagramTitle}
              alt="Girl and ready"
            />
          </div>
          <h1 style={{ margin: '12px 0', background: '#f698cb', padding: '8px 16px', borderRadius: '16px' }}>¿Ya conocieron a Amelia?</h1>
          <p>Amelia es una chica tímida y apasionada por los libros. Ella vuela y salta entre cada uno que comienza y termina.<br/>Amelia tiene una cuenta de Instagram secreta en la que comparte sus opiniones sobre todos los libros que lee. Es un espacio seguro entre ella y los espectadores que desean saber su veredicto.</p>
          <Separator/>
            <div className="account" style={{ display: "flex", gap: '16px', alignItems: "center", justifyContent: "center", marginTop: "3rem" }}>
              <div className="imgBx" style={{ borderRadius: '50%', overflow: 'hidden' }}>
                <Image
                  src={QrInstagram}
                  alt='Instagram'
                />
              </div>
              <div className="description" style={{ display: 'flex', flexDirection: 'column' }}>
                <p>Blog personal</p>
                <p>Bookstagram 💕</p>
                <p>Comparto y opino mis libros favoritos 🏳️‍🌈</p>
                <Link href={'https://instagram.com/girlinreading?igshid=YmMyMTA2M2Y='} style={{ padding: '4px 8px', borderRadius: '16px', background: '#f698cb', fontSize: '24px', alignSelf: 'center', marginTop: '16px' }}>Seguir</Link>
              </div>
            </div>
          <Separator/>
          <div className="carruselVideoBx">
            <Swiper
              modules={[Navigation,EffectFade]}
              navigation
              // effect='fade'
              speed={300}
              slidesPerView={1}
              loop
              scrollbar={{ draggable: true }}
              className="carruselVideo"
            >
              {
                videos.map((vid)=>(
                  <>
                    <SwiperSlide key={vid.id}>
                      <div className="videoBx">
                        <div className="bx">
                          {/* <video controls>
                            <source src={vid.url}/>
                          </video> */}
                          <div className="imgBx">
                            <Image
                              src={vid.url}
                              alt='mini del video'
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}