import Image from "next/image";
import Title from "../components/Title";
import MakingOfTitle from "../public/making_of_title.png"
import AccountTiktok from '../public/account_tiktok.png'
import QrTiktok from '../public/qr_tiktok.png'
import Link from "next/link";
import Separator from "../components/Separator";

export default function making_of() {
  return (
    <div className="page makingofPage">
      <div className="contain">
        <Title />
        <div className="content">
          <div className="imgBx" style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
            <Image
              src={MakingOfTitle}
              alt='Making Of'
            />
          </div>
          <p>Parte de cada uno de nuestros proyectos ha sido el riguroso proceso de grabación. Es por eso que hemos creado nuestro Tik Tok, <a href="https://www.tiktok.com/@makingof_tesperare" target={"_blank"} rel="noreferrer">@makingof_tesperare</a>. Aquí, nuestro conductor Edú nos presenta a cada uno de los integrantes del equipo de producción y ellos nos chismean qué opinan sobre el momento.</p>
          <Separator/>
          <h3 style={{ margin: "1rem 0", padding: ".5rem 1rem", borderRadius: "1rem", background: "#cbafe8" }}>Nuestro Perfil</h3>
          <div className="account" style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "3rem" }}>
            <Link href={"https://www.tiktok.com/@makingof_tesperare"} target='_blank'>
              <div className="imgBx">
                <Image
                  src={AccountTiktok}
                  alt='Tik Tok'
                />
              </div>
            </Link>
          </div>
          <div className="account" style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "3rem" }}>
            <div className="imgBx">
              <Image
                src={QrTiktok}
                alt='Tik Tok'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}