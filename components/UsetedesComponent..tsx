import Image from "next/image";
import Separator from "../components/Separator";
import Title from "../components/Title";
import Ustedes from '../public/ustedes_title.png'
import PhonesInsta from '../public/phones_instagram.png'
import PhonesTikTok from '../public/phones_tiktok.png'
import Tweet from '../public/tweet.png'
import BProfile from '../public/b_profile.jpeg'
import AProfile from '../public/a_profile.jpeg'
import { useState } from 'react'

export default function UstedesComponent() {

    const [textAmelia, setTextAmelia] = useState('')
    const [textBeatriz, setTextBeatriz] = useState('')

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
          <p style={{ textAlign: "center", fontSize: "2em", marginBottom: "2rem" }}>Gracias por acompañarnos y seguirnos. Si te quedaste con ganas de más:</p>
          <div className="sms" style={{ background: '#cdaee5' }}>
            <h1 style={{ textAlign: 'center' }}>Habla con Amelia, cuentale de tu amor imposible.</h1>
            <div className="imgBx" style={{ borderRadius: '50%', overflow: 'hidden', width: '100px', height: '100px' }}>
                <Image
                    src={AProfile}
                    alt='img'
                />
            </div>
            <form onSubmit={(e) => {
                e.preventDefault()
                setTextAmelia('')
            }}>
              <input type={'text'} value={textAmelia} onChange={(e) => setTextAmelia(e.target.value)}/>
              <button>Enviar</button>
            </form>
          </div>
          <div className="sms" style={{ background: '#f9da4a', marginTop: '32px' }}>
            <h1 style={{ textAlign: 'center' }}>Habla con Beatriz pregúntale todas tus dudas 🏳️‍🌈</h1>
            <div className="imgBx" style={{ borderRadius: '50%', overflow: 'hidden', width: '100px', height: '100px' }}>
                <Image
                    src={BProfile}
                    alt='img'
                />
            </div>
            <form onSubmit={(e) => {
                e.preventDefault()
                setTextBeatriz('')
            }}>
              <input type={'text'} value={textBeatriz} onChange={(e) => setTextBeatriz(e.target.value)}/>
              <button>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}