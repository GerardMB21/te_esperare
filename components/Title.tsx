import Image from "next/image";
import Link from "next/link";
import Te_Esperare from "../public/te_esperare.png"
import Rainbow from '../public/rainbow_te_esperare.png'

export default function Title() {
  return (
    <div className="imgBx up">
      <Link href={"/"}>
        <Image
          src={Te_Esperare}
          alt='te esperare'
        />
        <div className="imgBx rainbow">
          <Image
            src={Rainbow}
            alt='arcoiris producciones'
          />
        </div>
      </Link>
    </div>
  )
}
