import Image from "next/image";
import Te_Esperare from "../public/te_esperare_img-removebg.png"

export default function Home() {
  return (
    <div className="index">
      <div className="contain">
        <div className="sectionBx">
          <section></section>
          <section></section>
          <section></section>
        </div>
        <div className="imgBx">
          <Image
          src={Te_Esperare}
          alt='te esperare'
          />
        </div>
        <div className="sectionBx">
          <section></section>
          <section></section>
        </div>
      </div>
    </div>
  )
}
