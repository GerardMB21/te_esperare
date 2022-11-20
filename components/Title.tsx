import Image from "next/image";
import Link from "next/link";
import Te_Esperare from "../public/te_esperare.png"

export default function Title() {
  return (
    <div className="imgBx up">
      <Link href={"/"}>
        <Image
          src={Te_Esperare}
          alt='te esperare'
        />
      </Link>
    </div>
  )
}
