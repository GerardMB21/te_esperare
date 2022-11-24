import Image from "next/image";
import Link from "next/link";
import Te_Esperare from "../public/te_esperare.png"

export default function Title() {
  return (
    <div className="imgBx up">
      <Link href={"/"}>
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
      </Link>
    </div>
  )
}
