import Carrusel from "../components/Carrusel";
import Title from "../components/Title";
import Guts from '../public/guts.jpg';
import Casca from '../public/casca.webp';

const imgsArray = [
  {
    id: 0,
    url: Guts,
    description: 'guts'
  },
  {
    id: 1,
    url: Casca,
    description: 'casca'
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
            <h2 className="title_name">
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
            </h2>
          </div>
          <Carrusel imgs={imgsArray}/>
          <div className="personajes">
            <h2 className="title_name">
              <div>T</div>
              <div>R</div>
              <div>A</div>
              <div>I</div>
              <div>L</div>
              <div>E</div>
              <div>R</div>
            </h2>
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
