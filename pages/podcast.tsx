import Image from "next/image";
import Link from "next/link";
import Separator from "../components/Separator";
import Title from "../components/Title";
import CrehoTitle from '../public/creho_title.png'
import HistoriaTitle from '../public/historia_title.png'
import PodcastImg from '../public/podcast_img.jpg'

export default function podcast() {
  return (
    <div className="page podcastPage">
      <div className="contain">
        <Title />
        <div className="content">
          <div className="imgBx" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={CrehoTitle}
              alt='Creho'
            />
          </div>
          <h1>Podcast - Encerrados en CREHO</h1>
          <p>El Podcast Encerrados en CREHO nos cuenta la historia de Carlos, un joven gay que es encerrado en CREHO, una centro de torturas que es presentado como una organización de terapias de conversión en Perú. Acompaña a Carlos a este centro de torturas, un espacio en el que sufrirá de traumáticos e inhumanos acontecimientos.</p>
          <Separator/>
          <div className="imgBx" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={HistoriaTitle}
              alt='Historia'
            />
          </div>
          <p>La elección del nombre Creho fue una intención más allá de la creativa.<br/>En nuestro país, a semejanza de otras zonas del mundo, siguen existiendo en la actualidad terapias de conversión que proponen curar a la homosexualidad o cualquier característica con respecto a la expresión sexual de una persona que se salga de la normativa.<br/>Según Ojo Público (2020) en “Los abusos de la fe: mentiras y torturas en las terapias de conversión en Perú”, Creho es el Centro de Restauración Sexual Homosexual, un colectivo con el que impulsan charlas y conferencias internacionales en la que difunden una propuesta que vulnera prácticas clínicas y derechos humanos. Usan a la religión y prometen cambios en la orientación sexual de las personas LGTBIQ+ a través de agresivas terapias de reconversión sexual. Hoy en día podemos ver sus sedes en Lima y Ucayali, al igual que su perseverante contenido en la red social, Facebook.<br/>El Centro de Restauración de Homosexuales-Creho, institución peruana a la que está vinculada Exodus, está a cargo de María Elena Mattos Copari, fundadora y directora de este lugar desde el año 2000 y miembro de la Coordinadora Nacional ProFamilia. Esta organización ofrece a través de su sitio web y redes sociales “consejería, acompañamiento y entrenamiento sobre temas como la Atracción por el mismo sexo (ASM)”, y aseguran ser un grupo “confiable y responsable”.<br/>Mattos Copari dice haber creado el centro luego de lo que ella llama “su experiencia homosexual”. En sus charlas públicas, afirma que un “homosexual es una persona infeliz, no solo por los problemas que aquejan a todos los seres humanos, sino por la represión y rechazo que reciben por parte de la sociedad”.<br/>Decidimos ambientar el podcast a este centro de torturas existentes sin censura, ya que queremos compartir de forma explícita y determinada nuestro manifiesto en contra de estas organizaciones, y a su vez, también pronunciarnos y resaltar la actual existencia de los suplicios que comprende enfrentarse ante la sociedad siendo una persona de la comunidad LGBTIQ+.</p>
          <h3 style={{ margin: "1rem 0", padding: ".5rem 1rem", borderRadius: "1rem", background: "#222", color: "#fff" }}>Escucha nuestro Podcast en Spotify</h3>
          <div className="podcastBx">
            <div className="imgBx">
              <Image
                src={PodcastImg}
                alt='Encerrados en Creho'
              />
            </div>
            <Link className="listen" href={"https://open.spotify.com/show/4j8yt5zeT2Z8lvamnRAnfq?si=6g2njF8rRHC84Y0ZItuHmg&utm_source=whatsapp&nd=1"} target='_blank'>Escuchalo aqui</Link>
          </div>
        </div>
      </div>
    </div>
  )
}