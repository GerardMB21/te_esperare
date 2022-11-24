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
          <span className={ toggle ? 'links active' : 'links' } style={ toggle ? { transform: "translateY(-70px)" } : {} } >
            <Link href={"instagram"}>
              <div className="imgBx">
                <Image
                  src={Instagram}
                  alt='Instagram'
                />
              </div>
            </Link>
          </span>
          <span className={ toggle ? 'links active' : 'links' } style={ toggle ? { transform: "translateY(-140px)" } : {} } >
            <Link href={"podcast"}>
              <div className="imgBx">
                <Image
                  src={Podcast}
                  alt='Podcast'
                />
              </div>
            </Link>
          </span>
          <span className={ toggle ? 'links active' : 'links' } style={ toggle ? { transform: "translateY(-210px)" } : {} } >
            <Link href={"making_of"}>
              <div className="imgBx">
                <Image
                  src={Microphone}
                  alt='Microphone'
                />
              </div>
            </Link>
          </span>
          <span className={ toggle ? 'links active' : 'links' } style={ toggle ? { transform: "translateY(-280px)" } : {} } >
            <Link href={"twitter"}>
              <div className="imgBx">
                <Image
                  src={Twitter}
                  alt='Twitter'
                />
              </div>
            </Link>
          </span>
          <span className={ toggle ? 'links active' : 'links' } style={ toggle ? { transform: "translateY(-350px)" } : {} } >
            <Link href={"miniserie"}>
              <div className="imgBx">
                <Image
                  src={Miniserie}
                  alt='Miniserie'
                />
              </div>
            </Link>
          </span>
          <span className={ toggle ? 'links active' : 'links' } style={ toggle ? { transform: "translateY(-420px)" } : {} } >
            <Link href={"premier"}>
              <div className="imgBx">
                <Image
                  src={Premier}
                  alt='Premier'
                />
              </div>
            </Link>
          </span>
          <span className={ toggle ? 'links active' : 'links' } style={ toggle ? { transform: "translateY(-490px)" } : {} } >
            <Link href={"ustedes"}>
              <div className="imgBx">
                <Image
                  src={Premier}
                  alt='Premier'
                />
              </div>
            </Link>
          </span>
          <span className={ toggle ? 'links active' : 'links' } style={ toggle ? { transform: "translateY(-560px)" } : {} } >
            <Link href={"tienda"}>
              <div className="imgBx">
                <Image
                  src={Premier}
                  alt='Premier'
                />
              </div>
            </Link>
          </span>
        </div>
      </footer>
    </div>
  )
}
