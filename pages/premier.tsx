import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import Image from "next/image";
import Separator from "../components/Separator";
import Title from "../components/Title";
import PremierTitle from '../public/premier_title.png'
import image1 from '../public/image1.jpeg'
import image2 from '../public/image2.jpeg'
import image3 from '../public/image3.jpeg'
import image4 from '../public/image4.jpeg'
import image5 from '../public/img_premier_1.png'
import image6 from '../public/img_premier_2.png'
import image7 from '../public/img_premier_3.png'
// import image8 from '../public/imgpremier4.jpg'
// import image9 from '../public/imgpremier5.jpg'
// import image10 from '../public/imgpremier6.jpg'
// import image11 from '../public/imgpremier7.jpg'
// import image12 from '../public/imgpremier8.jpg'
// import image13 from '../public/imgpremier9.jpg'
// import image14 from '../public/imgpremier10.jpg'
// import image15 from '../public/imgpremier11.jpg'
// import Cinta from '../public/min_premier.png'
import Cinta from '../public/min_premier.png'
import Link from "next/link";

const images1 = [
  {
    id: 0,
    url: image1
  },
  {
    id: 1,
    url: image2
  },
  {
    id: 2,
    url: image3
  },
]

const images2 = [
  {
    id: 0,
    url: image4
  },
  {
    id: 1,
    url: image5
  },
  {
    id: 2,
    url: image6
  },
]

const images3 = [
  {
    id: 0,
    url: image7
  },
  {
    id: 1,
    url: image7
  },
  {
    id: 2,
    url: image7
  },
]

const images4 = [
  {
    id: 0,
    url: image7
  },
  {
    id: 1,
    url: image7
  },
  {
    id: 2,
    url: image7
  },
]

const images5 = [
  {
    id: 0,
    url: image7
  },
  {
    id: 1,
    url: image7
  },
  {
    id: 2,
    url: image7
  },
]

export default function miniserie() {
  return (
    <div className="page premierPage">
      <div className="contain">
        <Title />
        <div className="content">
          <div className="imgBx" style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
            <Image
              src={PremierTitle}
              alt='Premier'
            />
          </div>
          <p>Para estrenar la serie Te esperaré decidimos realizar una premier en el auditorio del campus para difundir nuestra historia y sus consecuentes submundos. Acompa<span>ñ</span>anos a rememorar este dia.</p>
          <div className="map">
            <div className="ubicanos">
              <p>UBÍCANOS</p>
            </div>
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.380857674833!2d-76.91009048505681!3d-12.08605854592367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c1c0e873ddf3%3A0x491a44b83b2677aa!2sAv.%20la%20Molina%203755%2C%20Cercado%20de%20Lima%2015026!5e0!3m2!1sen!2spe!4v1668975867549!5m2!1sen!2spe" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <Separator/>
          <h1 className="plan_de_difusion">PLAN DE DIFUSIÓN</h1>
          <p style={{ marginBottom: "2rem" }}>Invitamos a estudiantes y profesores de la Universidad a la Premier. El plan fue compartiendo el flyer mediante redes sociales y pegando los fisicos por el campus</p>
          <h3 className="fechas">Lunes 21 a Lunes 28 de Noviembre</h3>
          <div className="gallery">
            {
              images1.map((img)=>(
                <div className="imgBx" key={img.id}>
                  <Image
                    src={img.url}
                    alt='image'
                  />
                </div>
              ))
            }
          </div>
          <div className="gallery">
            {
              images2.map((img)=>(
                <div className="imgBx" key={img.id}>
                  <Image
                    src={img.url}
                    alt='image'
                  />
                </div>
              ))
            }
          </div>
          <div className="gallery">
            {
              images3.map((img)=>(
                <div className="imgBx" key={img.id}>
                  <Image
                    src={img.url}
                    alt='image'
                  />
                </div>
              ))
            }
          </div>
          <div className="gallery">
            {
              images4.map((img)=>(
                <div className="imgBx" key={img.id}>
                  <Image
                    src={img.url}
                    alt='image'
                  />
                </div>
              ))
            }
          </div>
          <div className="gallery">
            {
              images5.map((img)=>(
                <div className="imgBx" key={img.id}>
                  <Image
                    src={img.url}
                    alt='image'
                  />
                </div>
              ))
            }
          </div>
          <h3 className="como_nos_fue">¿Cómo fue nuestra premier?</h3>
          <div className="imgBx">
            <Link href={'https://youtu.be/1-2EqP2hGMs'} target='_blank'>
              <Image
                src={Cinta}
                alt='Cinta'
              />
            </Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Link href={'https://youtu.be/1-2EqP2hGMs'} style={{ padding: '4px 8px', borderRadius: '16px', fontSize: '24px', background: '#b693c5' }} target='_blank'>Ver ahora</Link>
          </div>
        </div>
      </div>
    </div>
  )
}