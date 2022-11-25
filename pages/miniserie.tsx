import Carrusel from "../components/Carrusel";
import Title from "../components/Title";
import Guts from '../public/guts.jpg';
import Casca from '../public/casca.webp';
import Image from "next/image";
import Personajes from '../public/personajes_title.png'
import Beatriz from '../public/beatriz_name.png'
import Amelia from '../public/amelia_name.png'
import Carlos from '../public/carlos_name.png'
import CarlosImg from '../public/carlos_img.png'
import Trailer from '../public/trailer_title.png'

const imgsArray = [
  {
    id: 0,
    url: CarlosImg,
    description: 'Beatriz',
    name: Beatriz,
    color: '#ffa0d4',
    caracteristicas: {
      dato: 'Es activista LGBTIQ+ en redes sociales. Le gusta ser escuchada',
      musica: 'Su banda favorita es Paramore y muere por Lana del rey',
      pelicula: 'Su serie favorita es Euphoria y le fascina Tim Burton',
      personalidad: 'Entusiasta y alegre. La domina su impulso y emocion'
    }
  },
  {
    id: 1,
    url: CarlosImg,
    description: 'amelia',
    name: Amelia,
    color: '#ffa0d4',
    caracteristicas: {
      dato: 'Le fascina leer libros romanticos, sobre todo los de tematica queer',
      musica: 'Su cantante favorita es Taylor Swift y solo esucha Taylor`s Versions',
      pelicula: 'Little Woman, Lady Bird y cualquier otra pelicula que haga Greta Gerwing',
      personalidad: 'Insegura y creativa. Su forma de ser esta basada en personajes de libros'
    }
  },
  {
    id: 2,
    url: CarlosImg,
    description: 'chapado al antigua',
    name: Carlos,
    color: '#f7dd65',
    caracteristicas: {
      dato: 'Utiliza la palabra `maricon` como insulto y le gusta hablando huevadas',
      musica: 'Su cancion favorita es Travesti de Sangre Purpura',
      pelicula: 'Es fan de Tarantino. Cree que cualquiera de sus peliculas son un icono',
      personalidad: 'Serio y frio. No suele expresar sus sentimientos'
    }
  }
]

const videosArray = [
  {
    id: 0,
    url: 'https://www.youtube.com/embed/7aekxC_monc',
    name: 'I like You',
    description: 'El mejor video de doja cat con post malone'
  },
  {
    id: 1,
    url: 'https://www.youtube.com/embed/UceaB4D0jpo',
    name: 'rockstar',
    description: 'Un video muy sangriento'
  },
  {
    id: 2,
    url: 'https://www.youtube.com/embed/dwDns8x3Jb4',
    name: 'Around the world',
    description: 'Around the world Around the world Around the world Around the world Around the world Around the world'
  },
]

export default function miniserie() {
  return (
    <div className="page miniseriePage">
      <div className="contain">
        <Title />
        <div className="content">
          <h1>Premisa</h1>
          <p>Te esperare es una miniserie protagonizada por Amelia, una chica introvertida que le apasiona la lectura. Ella se topara con Hanna, una personalidad dispar a la suya; sin embargo, esta comenzara a ser complementaria mientras se van conociendo cada vez mas.<br/>¿Sera su amor compatible?</p>
          <div className="personajes">
            <div className="imgBx">
              <Image
                src={Personajes}
                alt='Personajes'
              />
            </div>
            {/* <h2 className="title_name">
              <div>P</div>
              <div>E</div>
              <div>R</div>
              <div>S</div>
              <div>O</div>
              <div>N</div>
              <div>A</div>
              <div>J</div>
              <div>E</div>
              <div>S</div>
            </h2> */}
          </div>
          <Carrusel imgs={imgsArray}/>
          <div className="personajes">
            <div className="imgBx">
              <Image
                src={Trailer}
                alt='Trailer'
              />
            </div>
            {/* <h2 className="title_name">
              <div>T</div>
              <div>R</div>
              <div>A</div>
              <div>I</div>
              <div>L</div>
              <div>E</div>
              <div>R</div>
            </h2> */}
          </div>
          <div className="principal_video">
            <iframe src="https://www.youtube.com/embed/7aekxC_monc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="list_videos">
            {
              videosArray.map(vid=>(
                <div className="video_item" key={vid.id}>
                  <div className="image">
                    <iframe src={`${vid.url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                  <div className="title_and_description">
                    <h3>{vid.name}</h3>
                    <p>{vid.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
