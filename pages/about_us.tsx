import Image from "next/image";
import Te_Esperare from "../public/te_esperare.png"

export default function about_us() {
  return (
    <div className="about_us">
      <div className="contain">
        <div className="imgBx up">
          <Image
            src={Te_Esperare}
            alt='te esperare'
          />
        </div>
      </div>
    </div>
  )
}
