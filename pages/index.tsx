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
          <section className="instagram">
            <div className="imgBx">
              <Image
                src={Instagram}
                alt='Instagram'
              />
            </div>
            <p>Instagram</p>
          </section>
          <section className="podcast">
            <div className="imgBx">
              <Image
                src={Podcast}
                alt='Podcast'
              />
            </div>
            <p>Podcast</p>
          </section>
          <section className="makingof">
            <div className="imgBx">
              <Image
                src={Microphone}
                alt='Microphone'
              />
            </div>
            <p>Making of</p>
          </section>
        </div>
        <div className="imgBx aparition">
          <Link href={"/about_us"}>
            <Image
              src={Te_Esperare}
              alt='te esperare'
            />
          </Link>
        </div>
        <div className="sectionBx">
          <section className="miniserie">
            <div className="imgBx">
              <Image
                src={Miniserie}
                alt='Miniserie'
              />
            </div>
            <p>Miniserie</p>
          </section>
          <section className="premier">
            <div className="imgBx">
              <Image
                src={Premier}
                alt='Premier'
              />
            </div>
            <p>Premier</p>
          </section>
          <section className="twitter">
            <div className="imgBx">
              <Image
                src={Twitter}
                alt='Twitter'
              />
            </div>
            <p>Twitter</p>
          </section>
        </div>
      </div>
    </div>
  )
}
