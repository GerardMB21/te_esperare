import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Bg  from '../public/BG_te_esperare.png'
import Te_Esperare from "../public/te_esperare.png"
import Instagram from "../public/photos_te_esperare.png"
import Podcast from "../public/headphones_te_esperare.png"
import Microphone from "../public/microphone_te_esperare.png"
import Miniserie from "../public/camera_te_esperare.png"
import Premier from "../public/ticket_te_esperare.png"
import Twitter from "../public/elon_musk_te_esperare.png"
import Us from '../public/us_te_esperare.png'
import Store from '../public/tienda_te_esperare.png'
import Home from '../public/home_te_esperare.png'

interface Props {
  children: JSX.Element
}

export default function Layout({children}: Props) {

  const [toggle,setToggle] = useState(false);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {children}
      </main>

      <footer>
        <div className='menu'>
          <div className='toggle' onClick={()=>setToggle(!toggle)}>
            <span className={ toggle ? 'active' : '' }></span>
          </div>
          <span className={ toggle ? 'links active' : 'links' } style={ toggle ? { transform: "translateY(-70px)" } : {} } onClick={()=>setToggle(false)}>
            <Link href={"instagram"}>
              <div className="imgBx">
                <Image
                  src={Instagram}
                  alt='Instagram'
                />
              </div>
              <p>Instagram</p>
            </Link>
          </span>
          <span className={ toggle ? 'links active' : 'links' } style={ toggle ? { transform: "translateY(-140px)" } : {} } onClick={()=>setToggle(false)}>
            <Link href={"podcast"}>
              <div className="imgBx">
                <Image
                  src={Podcast}
                  alt='Podcast'
                />
              </div>
              <p>Podcast</p>
            </Link>
          </span>
          <span className={ toggle ? 'links active' : 'links' } style={ toggle ? { transform: "translateY(-210px)" } : {} } onClick={()=>setToggle(false)}>
            <Link href={"making_of"}>
              <div className="imgBx">
                <Image
                  src={Microphone}
                  alt='Microphone'
                />
              </div>
              <p style={{ fontSize: ".8em" }}>Making Of</p>
            </Link>
          </span>
          <span className={ toggle ? 'links active' : 'links' } style={ toggle ? { transform: "translateY(-280px)" } : {} } onClick={()=>setToggle(false)}>
            <Link href={"twitter"}>
              <div className="imgBx">
                <Image
                  src={Twitter}
                  alt='Twitter'
                />
              </div>
              <p>Twitter</p>
            </Link>
          </span>
          <span className={ toggle ? 'links active' : 'links' } style={ toggle ? { transform: "translateY(-350px)" } : {} } onClick={()=>setToggle(false)}>
            <Link href={"miniserie"}>
              <div className="imgBx">
                <Image
                  src={Miniserie}
                  alt='Miniserie'
                />
              </div>
              <p>Miniserie</p>
            </Link>
          </span>
          <span className={ toggle ? 'links active' : 'links' } style={ toggle ? { transform: "translateY(-420px)" } : {} } onClick={()=>setToggle(false)}>
            <Link href={"premier"}>
              <div className="imgBx">
                <Image
                  src={Premier}
                  alt='Premier'
                />
              </div>
              <p>Premier</p>
            </Link>
          </span>
          <span className={ toggle ? 'links active' : 'links' } style={ toggle ? { transform: "translateY(-490px)" } : {} } onClick={()=>setToggle(false)}>
            <Link href={"ustedes"}>
              <div className="imgBx">
                <Image
                  src={Us}
                  alt='Ustedes'
                />
              </div>
              <p>Ustedes</p>
            </Link>
          </span>
          <span className={ toggle ? 'links active' : 'links' } style={ toggle ? { transform: "translateY(-560px)" } : {} } onClick={()=>setToggle(false)}>
            <Link href={"tienda"}>
              <div className="imgBx">
                <Image
                  src={Store}
                  alt='tienda'
                />
              </div>
              <p>Tienda</p>
            </Link>
          </span>
        </div>
      </footer>
    </div>
  )
}
