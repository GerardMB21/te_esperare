import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import Image from "next/image";
import Separator from "../components/Separator";
import Title from "../components/Title";
import PremierTitle from '../public/premier_title.png'
import image1 from '../public/image1.jpeg'
import image2 from '../public/image2.jpeg'
import image3 from '../public/image3.jpeg'
import image4 from '../public/image4.jpeg'
import Cinta from '../public/cinta.png'

const images = [
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
  {
    id: 3,
    url: image4
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
          <p>Para estrenar la serie Te esperare decidimos realizar una premier en el auditorio del campus para difundir nuestra historia y sus consecuentes submundos. Acompa<span>ñ</span>anos a rememorar este dia.</p>
          <div className="map">
            <div className="ubicanos">
              <p>UBICANOS</p>
            </div>
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.380857674833!2d-76.91009048505681!3d-12.08605854592367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c1c0e873ddf3%3A0x491a44b83b2677aa!2sAv.%20la%20Molina%203755%2C%20Cercado%20de%20Lima%2015026!5e0!3m2!1sen!2spe!4v1668975867549!5m2!1sen!2spe" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <Separator/>
          <h1 className="plan_de_difusion">PLAN DE DIFUSION</h1>
          <p style={{ marginBottom: "2rem" }}>Invitamos a estudiantes y profesores de la Universidad a la Premier. El plan fue compartiendo el flyer mediante redes sociales y pegando los fisicos por el campus</p>
          <h3 className="fechas">Lunes 21 a Lunes 28 de Noviembre</h3>
          <div className="gallery">
            {
              images.map((img)=>(
                <div className="imgBx" key={img.id}>
                  <Image
                    src={img.url}
                    alt='image'
                  />
                </div>
              ))
            }
          </div>
          <h3 className="como_nos_fue">Como nos fue</h3>
          <div className="imgBx">
            <Image
              src={Cinta}
              alt='Cinta'
            />
          </div>
        </div>
      </div>
    </div>
  )
}