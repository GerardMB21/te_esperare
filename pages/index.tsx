import Image from "next/image"
import Te_Esperare from "../public/te_esperare.png"
import Instagram from "../public/photos_te_esperare.png"
import Podcast from "../public/headphones_te_esperare.png"
import Microphone from "../public/microphone_te_esperare.png"
import Miniserie from "../public/camera_te_esperare.png"
import Premier from "../public/ticket_te_esperare.png"
import Twitter from "../public/elon_musk_te_esperare.png"
import Link from "next/link"

export default function Home() {
  return (
    <div className="index">
      <div className="contain">
        <div className="sectionBx">
          <Link href={"instagram"}>
            <section className="instagram">
              <div className="imgBx">
                <Image
                  src={Instagram}
                  alt='Instagram'
                />
              </div>
              <p>Instagram</p>
            </section>
          </Link>
          <Link href={"podcast"}>
            <section className="podcast">
              <div className="imgBx">
                <Image
                  src={Podcast}
                  alt='Podcast'
                />
              </div>
              <p>Podcast</p>
            </section>
          </Link>
          <Link href={"making_of"}>
            <section className="makingof">
              <div className="imgBx">
                <Image
                  src={Microphone}
                  alt='Microphone'
                />
              </div>
              <p>Making of</p>
            </section>
          </Link>
          <Link href={"twitter"}>
            <section className="twitter">
              <div className="imgBx">
                <Image
                  src={Twitter}
                  alt='Twitter'
                />
              </div>
              <p>Twitter</p>
            </section>
          </Link>
        </div>
        <div className="imgBx aparition">
          <Link href={"/about_us"}>
            {/* <Image
              src={Te_Esperare}
              alt='te esperare'
            /> */}
            <h2 className="title_name">
              <div>T</div>
              <div>E</div>
              <div className="space"></div>
              <div>E</div>
              <div>S</div>
              <div>P</div>
              <div>E</div>
              <div>r</div>
              <div>A</div>
              <div>r</div>
              <div>É</div>
            </h2>
            <button>NOSOTROS</button>
          </Link>
        </div>
        <div className="sectionBx translateY">
          <Link href={"miniserie"}>
            <section className="miniserie">
              <div className="imgBx">
                <Image
                  src={Miniserie}
                  alt='Miniserie'
                />
              </div>
              <p>Miniserie</p>
            </section>
          </Link>
          <Link href={"premier"}>
            <section className="premier">
              <div className="imgBx">
                <Image
                  src={Premier}
                  alt='Premier'
                />
              </div>
              <p>Premier</p>
            </section>
          </Link>
          <Link href={"ustedes"}>
            <section className="twitter">
              <div className="imgBx">
                <Image
                  src={Twitter}
                  alt='ustedes'
                />
              </div>
              <p>Ustedes</p>
            </section>
          </Link>
          <Link href={"tienda"}>
            <section className="twitter">
              <div className="imgBx">
                <Image
                  src={Twitter}
                  alt='Tienda'
                />
              </div>
              <p>Tienda</p>
            </section>
          </Link>
        </div>
        <div className="arcoiris">
          <p>ARCOIRIS</p>
          <p>production</p>
        </div>
      </div>
    </div>
  )
}
