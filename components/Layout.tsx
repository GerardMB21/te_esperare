import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Bg  from '../public/BG_te_esperare.png'

interface Props {
  children: JSX.Element
}

export default function Layout({children}: Props) {
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
      </footer>
    </div>
  )
}
