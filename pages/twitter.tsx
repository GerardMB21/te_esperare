import Image from "next/image";
import Link from "next/link";
import Separator from "../components/Separator";
import Title from "../components/Title";
import TwitterTitle from "../public/twitter_title.png"
import Tweet1 from "../public/tweet1.jpeg"
import Tweet2 from "../public/tweet2.jpeg"
import Tweet3 from "../public/tweet3.jpeg"
import Tweet4 from "../public/tweet4.jpeg"
import Tweet5 from "../public/tweet5.jpeg"
import Tweet6 from "../public/tweet6.jpeg"
import Tweet7 from "../public/tweet7.jpeg"

export default function twitter() {
  return (
    <div className="page twitterPage">
      <div className="contain">
        <Title />
        <div className="content">
          <div className="imgBx" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={TwitterTitle}
              alt="Gay News"
            />
          </div>
          <h1 style={{ margin: "1rem 0", padding: ".5rem 1rem", borderRadius: "1rem", background: "#cbafe8" }}>¿Ya conocieron a Beatriz?</h1>
          <p>Beatriz es una chica extrovertida y divertida. Nunca se queda callada. Ella se sintió identificada con la homosexualidad desde su adolescencia, y a partir de ese día decidió que haría todo lo posible para que todas las personas que fueran iguales a ella, no se sintieran solas ni avergonzadas por ser lo que son.<br/>Beatriz tiene una cuenta de Twitter en la que se dedica a hacer activismo queer, responde y comenta sobre problemáticas de la comunidad y, claro, pasa uno que otro rato riéndose.</p>
          <Separator/>
          <h1>Perfil</h1>
          <div className="imgBx" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Link href={"https://twitter.com/GaynewsTE"} target={"_blank"}>
              <Image
                src={Tweet1}
                alt="tweet"
              />
            </Link>
          </div>
          <h1>Tweets</h1>
          <div className="gallery">
            <div className="imgBx">
              <Link href={"https://twitter.com/GaynewsTE/status/1596135479292080128?cxt=HHwWgMDRieCwzqYsAAAA"} target={"_blank"}>
                <Image
                  src={Tweet2}
                  alt="tweet"
                />
              </Link>
            </div>
            <div className="imgBx">
              <Link href={"https://twitter.com/GaynewsTE/status/1596127144325058560?cxt=HHwWgMDU3cvLyqYsAAAA"} target={"_blank"}>
                <Image
                  src={Tweet3}
                  alt="tweet"
                />
              </Link>
            </div>
            <div className="imgBx">
              <Link href={"https://twitter.com/GaynewsTE/status/1596121706321649665?cxt=HHwWgoC9uYePyKYsAAAA"} target={"_blank"}>
                <Image
                  src={Tweet4}
                  alt="tweet"
                />
              </Link>
            </div>
            <div className="imgBx">
              <Link href={"https://twitter.com/GaynewsTE/status/1590109033700397058?cxt=HHwWhMDQvbnvmZEsAAAA"} target={"_blank"}>
                <Image
                  src={Tweet5}
                  alt="tweet"
                />
              </Link>
            </div>
            <div className="imgBx">
              <Link href={"https://twitter.com/GaynewsTE/status/1588869988479561730?cxt=HHwWhMDTmcO15owsAAAA"} target={"_blank"}>
                <Image
                  src={Tweet6}
                  alt="tweet"
                />
              </Link>
            </div>
            <div className="imgBx">
              <Link href={"https://twitter.com/GaynewsTE/status/1588259674788241408?cxt=HHwWgICl7cvw0IosAAAA"} target={"_blank"}>
                <Image
                  src={Tweet7}
                  alt="tweet"
                />
              </Link>
            </div>
          </div>
          <Link href={"https://twitter.com/GaynewsTE"} style={{ margin: "1rem 0", padding: ".5rem 1rem", borderRadius: "1rem", background: "#00acee", fontSize: "2em" }} target={"_blank"}>Siguenos en Twitter</Link>
        </div>
      </div>
    </div>
  )
}