import Image from "next/image";
import Separator from "../components/Separator";
import Title from "../components/Title";
import Ustedes from '../public/ustedes_title.png'
import PhonesInsta from '../public/phones_instagram.png'
import PhonesTikTok from '../public/phones_tiktok.png'
import Tweet from '../public/tweet.png'

export default function ustedes() {
  return (
    <div className="ustedesPage">
      <div className="contain">
        <Title/>
        <div className="content">
          <div className="imgBx" style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
            <Image
              src={Ustedes}
              alt='Making Of'
            />
          </div>
          <p style={{ textAlign: "center", fontSize: "2em", marginBottom: "2rem" }}>Aqui encontraras todas las interacciones que que hemos tenido con todos nuestro seguidores</p>
          <Separator/>
          <h3 style={{ textAlign: "center", padding: ".5rem 1 rem", borderRadius: "1rem", background: "#ffa0d4", marginBottom: "2rem" }}>INSTAGRAM</h3>
          <div className="imgBx" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={PhonesInsta}
              alt='phones'
            />
          </div>
          <h3 style={{ textAlign: "center", padding: ".5rem 1 rem", borderRadius: "1rem", background: "#f9da4a", marginBottom: "2rem" }}>TikTok</h3>
          <div className="imgBx" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={PhonesTikTok}
              alt='phones'
            />
          </div>
          <h3 style={{ textAlign: "center", padding: ".5rem 1 rem", borderRadius: "1rem", background: "#95d8d0", marginBottom: "2rem" }}>Twitter</h3>
          <div className="imgBx" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={Tweet}
              alt='tweet'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
