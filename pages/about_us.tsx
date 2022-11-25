import Image from "next/image"
import Separator from "../components/Separator"
import Title from "../components/Title"
import QuienesSomos from "../public/quienes_somos.png"
import Mision from '../public/mision.png'
import Vision from '../public/vision.png'

export default function about_us() {
  return (
    <div className="about_us">
      <div className="contain">
        <Title />
        <div className="content">
          <div className="imgBx">
            <Image
              src={QuienesSomos}
              alt="Quienes somos"
            />
          </div>
          <p>Bienvenidos al website de la Miniserie: Te esperaré.<br/>Somos la productora x, un grupo de estudiantes universitarios del curso de Realizacion Transmedia que desean compartir un mensaje mediante el lenguaje audio y/o visual.</p>
          <Separator/>
          <div className="imgBx" style={{ width: "30%" }}>
            <Image
              src={Mision}
              alt="Mision"
            />
          </div>
          <p>Nuestro objetivo es promover la inclusion de distintas orientaciones e identidades sexuales mediante nuestras producciones.<br/>La comunidad LGBTIQ+ ha sido vulnerada en magnitudes historicas y, consecuentemente, los derechos humanos de sus conformantes han sido violados de múltiples formas. El fin de contar diversas historias que se entrelazan por la heterogeneidad de sus personajes, es transmitir distintas perspectivas bajo el principio de la subjetividad en nuestro universo transmedia.</p>
          <Separator/>
          <div className="imgBx" style={{ width: "30%" }}>
            <Image
              src={Vision}
              alt="Vision"
            />
          </div>
          <p>El panorama para nuestra productora es la produccion de muchas más historias que puedan ser protagonizadas por distintas construcciones de personajes que comprendan diversidad sexual, étnica y social. Nos vemos reforzando la idea de que la sexualidad es un gran espectro, el cual es único para cada persona, siendo nuestro contenido una forma de verse representado y validado.</p>
        </div>
      </div>
    </div>
  )
}
