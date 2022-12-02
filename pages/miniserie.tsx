import Carrusel from "../components/Carrusel";
import Title from "../components/Title";
import Guts from '../public/guts.jpg';
import Casca from '../public/casca.webp';
import Image from "next/image";
import Personajes from '../public/personajes_title.png'
import Beatriz from '../public/beatriz_name.png'
import BeatrizImg from '../public/beatriz_img.png'
import Amelia from '../public/amelia_name.png'
import AmeliaImg from '../public/amelia_img.jpg'
import Carlos from '../public/carlos_name.png'
import CarlosImg from '../public/carlos_img.png'
import Trailer from '../public/trailer_title.png'
import Relations from '../public/relaciones.png'
import MinCap1 from '../public/Miniatura_Cap_1.png'
import MinCap2 from '../public/Miniatura_Cap_2.png'
import MinCap3 from '../public/Miniatura_Cap_3.png'
import MinCap4 from '../public/Miniatura_Cap_4.png'
import Link from "next/link";

const imgsArray = [
  {
    id: 0,
    url: BeatrizImg,
    description: 'Extrovertida y divertida',
    name: Beatriz,
    color: '#ffa0d4',
    caracteristicas: {
      dato: 'Es activista LGBTIQ+ en redes sociales. Le gusta ser escuchada.',
      musica: 'Su banda favorita es Paramore y muere por Lana del rey.',
      pelicula: 'Su serie favorita es Euphoria y le fascina Tim Burton.',
      personalidad: 'Entusiasta y alegre. La domina su impulso y emocion.'
    },
    progres: {
      dato: '98%',
      musica: '80%',
      pelicula: '100%',
      personalidad: '75%'
    }
  },
  {
    id: 1,
    url: AmeliaImg,
    description: 'Tímida y apasionada',
    name: Amelia,
    color: '#ffa0d4',
    caracteristicas: {
      dato: 'Le fascina leer libros romanticos, sobre todo los de tematica queer.',
      musica: 'Su cantante favorita es Taylor Swift y solo esucha Taylor`s Versions.',
      pelicula: 'Little Woman, Lady Bird y cualquier otra película que haga Greta Gerwing.',
      personalidad: 'Insegura y creativa. Su forma de ser está basada en personajes de libros.'
    },
    progres: {
      dato: '98%',
      musica: '70%',
      pelicula: '100%',
      personalidad: '65%'
    }
  },
  {
    id: 2,
    url: CarlosImg,
    description: 'Chapado a la antigua',
    name: Carlos,
    color: '#f7dd65',
    caracteristicas: {
      dato: 'Utiliza la palabra `maricón` como insulto y le gusta hablando huevadas.',
      musica: 'Su canción favorita es Travesti de Sangre Púrpura.',
      pelicula: 'Es fan de Tarantino. Cree que cualquiera de sus películas son un ícono.',
      personalidad: 'Serio y frío. No suele expresar sus sentimientos.'
    },
    progres: {
      dato: '98%',
      musica: '70%',
      pelicula: '100%',
      personalidad: '65%'
    }
  }
]

const videosArray = [
  {
    id: 0,
    url: MinCap1,
    name: 'Capítulo 1 - SERENDIPIA',
    description: 'Conoce la historia de Amelia y Beatriz. El comienzo de una amistad que podría convertirse en algo más.',
    urlVid: 'https://youtu.be/q4NXVxz0rHo'
  },
  {
    id: 1,
    url: MinCap2,
    name: 'Capítulo 2 - La Decisión',
    description: 'Una simple canción o un simple poema. ¿Podría llevarte a tomar una decisión?',
    urlVid: 'https://youtu.be/rL3KaGqGO2s'
  },
  {
    id: 2,
    url: MinCap3,
    name: 'Capítulo 3 - Daddy Issues',
    description: 'Cuando todo parece ir mejor que nunca. ¿Podrán ser felices Amelia y Beatriz?',
    urlVid: 'https://youtu.be/SaNZR7yh3xg'
  },
  {
    id: 3,
    url: MinCap4,
    name: 'Capítulo 4 - Te Esperaré',
    description: 'Cuando la sociedad es un problema. ¿Es mejor ocultar tus sentimientos o solo dejarte llevar?',
    urlVid: 'https://youtu.be/lUEGh55eev0'
  },
]

export default function miniserie() {
  return (
    <div className="page miniseriePage">
      <div className="contain">
        <Title />
        <div className="content">
          <p
          >Te esperaré es una miniserie protagonizada por Amelia, una chica introvertida que le apasiona la lectura. Ella se topara con Beatriz, una personalidad dispar a la suya; sin embargo, esta comenzará a ser complementaria mientras se van conociendo cada vez más.<br/>¿Será su amor compatible?</p>
          <div className="personajes" style={{ marginTop: "24px" }}>
            <div className="imgBx">
              <Image
                src={Trailer}
                alt='Trailer'
              />
            </div>
          </div>
          <div className="principal_video">
            <iframe src="https://www.youtube.com/embed/83HZ4UGQdzk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                    <Link href={vid.urlVid} style={{ padding: "4px 8px", borderRadius: "16px", background: "#ffa0d4", fontSize: '24px' }} target='_blank'>Míralo aquí</Link>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="personajes">
            <div className="imgBx">
              <Image
                src={Personajes}
                alt='Personajes'
              />
            </div>
          </div>
          <Carrusel imgs={imgsArray}/>
          <div className="personajes">
            <div className="imgBx">
              <Image
                src={Relations}
                alt='Relaciones'
              />
            </div>
          </div>
          <div className="relations">
            <div className="bx">
              <div className="imgBx">
                <Image
                    src={AmeliaImg}
                    alt={"Amelia"}
                />
              </div>
              <p>Amelia</p>
            </div>
            <div className="relations_row">
              <span className="to">Relación prohibida</span>
              <span className="me">Interés amoroso</span>
            </div>
            <div className="bx">
              <div className="imgBx">
                <Image
                    src={BeatrizImg}
                    alt={"Beatriz"}
                />
              </div>
              <p>Beatriz</p>
            </div>
            <div className="relations_row">
              <span className="to" style={{ transform: "rotate(25deg)" }}>Hija</span>
              <span className="me" style={{ transform: "rotate(25deg)" }}>Padre</span>
            </div>
            <div className="bx" style={{ transform: "translateY(50px)" }}>
              <div className="imgBx">
                <Image
                    src={CarlosImg}
                    alt={"Carlos"}
                />
              </div>
              <p>Carlos</p>
            </div>
            <div className="relations_row">
              <span className="to" style={{ transform: "rotate(-25deg)" }}>Odia a la chica</span>
              <span className="me" style={{ transform: "rotate(-25deg)" }}>Posible suegro</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
