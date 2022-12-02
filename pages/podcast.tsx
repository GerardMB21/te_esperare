import Image from "next/image";
import Link from "next/link";
import Separator from "../components/Separator";
import Title from "../components/Title";
import CrehoTitle from '../public/creho_title.png'
import HistoriaTitle from '../public/historia_title.png'
import PodcastImg from '../public/podcast_img.jpg'
import MinCap1 from '../public/min_pod_1.jpg'
import MinCap2 from '../public/min_pod_2.jpg'
import MinCap3 from '../public/min_pod_3.jpg'
import MinCap4 from '../public/min_pod_4.jpg'
import MinCap5 from '../public/min_pod_5.jpg'
import MinCap6 from '../public/min_pod_6.jpg'

const videosArray = [
  {
    id: 0,
    url: MinCap1,
    name: 'Capitulo 01 - Primera impresión.',
    description: 'El padre de Carlos descubre que es gay y decide enviarlo a un Centro para "curarse" de su homosexualidad. En este lugar vivirá experiencias desagradables, que serán registradas en una grabadora, que su madre le da antes de internarse.',
    urlVid: 'https://open.spotify.com/episode/5HrrllMIVwQlfzUbhlvP7X'
  },
  {
    id: 1,
    url: MinCap2,
    name: 'Capitulo 02 - Dios',
    description: 'Carlos empieza a cuestionar sobre su sexualidad. En el Centro, comienza las sesiones terapéuticas y Carlos conoce a Daniel, otro joven que está internado por más de 3 meses que cuestiona lo que hacen en el Centro.',
    urlVid: 'https://open.spotify.com/episode/5ofnD3zZoBBVv1l2a04FCB'
  },
  {
    id: 2,
    url: MinCap3,
    name: 'Capítulo 03 - A puño limpio',
    description: 'Continúan las noches de cuestionamiento de Carlos. Al día siguiente Carlos y Daniel se enfrentan a un acosador, terminando en un acontecimiento inesperado.',
    urlVid: 'https://open.spotify.com/episode/3fJsw9FX2M4hu7CKu5OK2q'
  },
  {
    id: 3,
    url: MinCap4,
    name: 'Capítulo 04 - Cicatriz',
    description: 'Carlos conversa con Daniel sobre el incidente ocurrido, el cual le dejó una cicatriz. Luego, Carlos, conversa con el terapeuta, la cual se torna acalorada, acabando en otro inesperado desenlace.',
    urlVid: 'https://open.spotify.com/episode/097VcCtxaJRjcKf6pZlkjB'
  },
  {
    id: 4,
    url: MinCap5,
    name: 'Capítulo 05 - El cuarto negro',
    description: 'Carlos es encerrado en un cuarto negro, y luego de varios días es llevado ante el Terapeuta. Carlos no se imagina que podría ocurrirle.',
    urlVid: 'https://open.spotify.com/episode/3PqOeC5iq8JPKIQL17rNo1'
  },
  {
    id: 5,
    url: MinCap6,
    name: 'Capítulo Final',
    description: 'Y aquí se termina el podcast. Descubre que hará Carlos a partir de lo que le ha sucedido. ¿Qué decisión tomará?',
    urlVid: 'https://open.spotify.com/episode/6nOnH41o3CtrzgW6LvOT3j'
  },
]

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
          <h1 style={{ padding: '8px 16px', margin: '12px 0', borderRadius: '16px', background: '#222', color: '#fff' }}>Conoce a Carlos</h1>
          <p>El Podcast Encerrados en CREHO nos cuenta la historia de Carlos, un joven gay que es encerrado en CREHO, una centro de torturas que es presentado como una organización de terapias de conversión en Perú. Acompaña a Carlos a este centro de torturas, un espacio en el que sufrirá de traumáticos e inhumanos acontecimientos.</p>
          <Separator/>
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
          <div className="list_videos">
            {
              videosArray.map(vid=>(
                <div className="video_item" key={vid.id}>
                  <div className="imgBx">
                    <Link href={vid.urlVid} target={'_blank'}>
                      <Image
                        src={vid.url}
                        alt={vid.name}
                      />
                    </Link>
                  </div>
                  <div className="title_and_description">
                    <h3>{vid.name}</h3>
                    <p>{vid.description}</p>
                    <Link href={vid.urlVid} style={{ padding: "4px 8px", borderRadius: "16px", background: "#fff", fontSize: '24px' }} target='_blank'>Escuchalo aquí</Link>
                  </div>
                </div>
              ))
            }
          </div>
          <Separator/>
          <div className="imgBx" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={HistoriaTitle}
              alt='Historia'
            />
          </div>
          <p>La elección del nombre Creho fue una intención más allá de la creativa.<br/>En nuestro país, a semejanza de otras zonas del mundo, siguen existiendo en la actualidad terapias de conversión que proponen curar a la homosexualidad o cualquier característica con respecto a la expresión sexual de una persona que se salga de la normativa.<br/>Según Ojo Público (2020) en “Los abusos de la fe: mentiras y torturas en las terapias de conversión en Perú”, Creho es el Centro de Restauración Sexual Homosexual, un colectivo con el que impulsan charlas y conferencias internacionales en la que difunden una propuesta que vulnera prácticas clínicas y derechos humanos. Usan a la religión y prometen cambios en la orientación sexual de las personas LGTBIQ+ a través de agresivas terapias de reconversión sexual. Hoy en día podemos ver sus sedes en Lima y Ucayali, al igual que su perseverante contenido en la red social, Facebook.<br/>El Centro de Restauración de Homosexuales-Creho, institución peruana a la que está vinculada Exodus, está a cargo de María Elena Mattos Copari, fundadora y directora de este lugar desde el año 2000 y miembro de la Coordinadora Nacional ProFamilia. Esta organización ofrece a través de su sitio web y redes sociales “consejería, acompañamiento y entrenamiento sobre temas como la Atracción por el mismo sexo (ASM)”, y aseguran ser un grupo “confiable y responsable”.<br/>Mattos Copari dice haber creado el centro luego de lo que ella llama “su experiencia homosexual”. En sus charlas públicas, afirma que un “homosexual es una persona infeliz, no solo por los problemas que aquejan a todos los seres humanos, sino por la represión y rechazo que reciben por parte de la sociedad”.<br/>Decidimos ambientar el podcast a este centro de torturas existentes sin censura, ya que queremos compartir de forma explícita y determinada nuestro manifiesto en contra de estas organizaciones, y a su vez, también pronunciarnos y resaltar la actual existencia de los suplicios que comprende enfrentarse ante la sociedad siendo una persona de la comunidad LGBTIQ+.</p>
        </div>
      </div>
    </div>
  )
}