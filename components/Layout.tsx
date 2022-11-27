import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Bg  from '../public/BG_te_esperare.png'
import Te_Esperare from "../public/te_esperare.png"
import InstagramImg from "../public/photos_te_esperare.png"
import Podcast from "../public/headphones_te_esperare.png"
import Microphone from "../public/microphone_te_esperare.png"
import Miniserie from "../public/camera_te_esperare.png"
import Premier from "../public/ticket_te_esperare.png"
import Twitter from "../public/elon_musk_te_esperare.png"
import Us from '../public/us_te_esperare.png'
import Store from '../public/tienda_te_esperare.png'
import Home from '../public/home_te_esperare.png'
import { Youtube, Instagram, Spotify } from 'iconsax-react'
import { IoLogoTwitter, IoLogoTiktok } from "react-icons/io5";

interface Props {
  children: JSX.Element
}

export default function Layout({children}: Props) {

  const [toggle,setToggle] = useState(false);
  const [social,setSocial] = useState(false)

  return (
    <div>
      <Head>
        <title>Te Esperare</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <div className='menu social'>
          <span className={ 'links follow' } onClick={()=>{
            setToggle(false)
            setSocial(!social)
          }}>
            <span>
              SIGUENOS
            </span>
          </span>
          <span className={ social ? 'links active' : 'links' } onClick={()=>{
            setToggle(false)
            setSocial(false)
          }}>
            <Link href={'https://youtube.com/channel/UCsVP_miuSZ3FUpoxoCtkuTA'} target={'_blank'}>
              <Youtube size="32" color="#fff"/>
            </Link>
          </span>
          <span className={ social ? 'links active' : 'links' } onClick={()=>{
            setToggle(false)
            setSocial(false)
          }}>
            <Link href={'https://twitter.com/GaynewsTE'} target={'_blank'}>
              <IoLogoTwitter size="32" color='#fff'></IoLogoTwitter>
            </Link>
          </span>
          <span className={ social ? 'links active' : 'links' } onClick={()=>{
            setToggle(false)
            setSocial(false)
          }}>
            <Link href={'https://www.instagram.com/girlinreading/'} target={'_blank'}>
              <Instagram size="32" color="#fff"/>
            </Link>
          </span>
          <span className={ social ? 'links active' : 'links' } onClick={()=>{
            setToggle(false)
            setSocial(false)
          }}>
            <Link href={'https://open.spotify.com/show/4j8yt5zeT2Z8lvamnRAnfq'} target={'_blank'}>
              <Spotify size="32" color="#fff"/>
            </Link>
          </span>
          <span className={ social ? 'links active' : 'links' } onClick={()=>{
            setToggle(false)
            setSocial(false)
          }}>
            <Link href={'https://tiktok.com/@makingof_tesperare'} target={'_blank'}>
              <IoLogoTiktok size={"32"} color='#fff'></IoLogoTiktok>
            </Link>
          </span>
        </div>
      </nav>

      <main>
        {children}
      </main>

      <footer>
        <div className='menu home'>
          <span className={ 'links' } onClick={()=>setToggle(false)}>
            <Link href={"/"}>
              <div className="imgBx">
                <Image
                  src={Home}
                  alt='Home'
                />
              </div>
              <p>Home</p>
            </Link>
          </span>
        </div>
        <div className='menu'>
          <div className='toggle' onClick={()=>{
            setToggle(!toggle)
            setSocial(false)
          }}>
            <span className={ toggle ? 'active' : '' }></span>
          </div>
          <span className={ toggle ? 'links active' : 'links' } onClick={()=>{
            setToggle(false)
            setSocial(false)
          }}>
            <Link href={"instagram"}>
              <div className="imgBx">
                <Image
                  src={InstagramImg}
                  alt='Instagram'
                />
              </div>
              <p>Instagram</p>
            </Link>
          </span>
          <span className={ toggle ? 'links active' : 'links' } onClick={()=>{
            setToggle(false)
            setSocial(false)
          }}>
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
          <span className={ toggle ? 'links active' : 'links' } onClick={()=>{
            setToggle(false)
            setSocial(false)
          }}>
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
          <span className={ toggle ? 'links active' : 'links' } onClick={()=>setToggle(false)}>
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
          <span className={ toggle ? 'links active' : 'links' } onClick={()=>{
            setToggle(false)
            setSocial(false)
          }}>
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
          <span className={ toggle ? 'links active' : 'links' } onClick={()=>{
            setToggle(false)
            setSocial(false)
          }}>
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
          <span className={ toggle ? 'links active' : 'links' } onClick={()=>{
            setToggle(false)
            setSocial(false)
          }}>
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
          <span className={ toggle ? 'links active' : 'links' } onClick={()=>{
            setToggle(false)
            setSocial(false)
          }}>
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
