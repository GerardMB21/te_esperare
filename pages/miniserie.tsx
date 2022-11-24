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
        </div>
      </div>
    </div>
  )
}
