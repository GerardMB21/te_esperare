import { PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER } from 'next/dist/shared/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Separator from '../components/Separator'
import Title from '../components/Title'
import TiendaTitle from '../public/tienda_title.png'
import product1 from '../public/product1.png'
import product2 from '../public/product2.png'
import product3 from '../public/product3.png'
import product4 from '../public/product4.png'
import product5 from '../public/product5.png'
import product6 from '../public/product6.png'
import product7 from '../public/product7.png'
import product8 from '../public/product8.png'
import product9 from '../public/product9.png'
import product10 from '../public/product10.png'
import product11 from '../public/product11.png'
import product12 from '../public/product12.png'

const products = [
  {
    id: 0,
    link: "/",
    url: product1,
    description: "product"
  },
  {
    id: 1,
    link: "/",
    url: product2,
    description: "product"
  },
  {
    id: 2,
    link: "/",
    url: product3,
    description: "product"
  },
  {
    id: 3,
    link: "/",
    url: product4,
    description: "product"
  },
  {
    id: 4,
    link: "/",
    url: product5,
    description: "product"
  },
  {
    id: 5,
    link: "/",
    url: product6,
    description: "product"
  },
  {
    id: 6,
    link: "/",
    url: product7,
    description: "product"
  },
  {
    id: 7,
    link: "/",
    url: product8,
    description: "product"
  },
  {
    id: 8,
    link: "/",
    url: product9,
    description: "product"
  },
  {
    id: 9,
    link: "/",
    url: product10,
    description: "product"
  },
  {
    id: 10,
    link: "/",
    url: product11,
    description: "product"
  },
  {
    id: 11,
    link: "/",
    url: product12,
    description: "product"
  },
]

export default function tienda() {
  return (
    <div className="page tiendaPage">
      <div className="contain">
        <Title />
        <div className="content">
          <div className="imgBx" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={TiendaTitle}
              alt="Tienda"
            />
          </div>
          <Separator/>
          <h1>Compra productos exclucivos</h1>
          <div className='gallery'>
            {
              products.map((product)=>(
                <div className='productBx' key={product.id}>
                  <div className='imgBx'>
                    <Link href={product.link}>
                      <Image
                        src={product.url}
                        alt={product.description}
                      />
                    </Link>
                  </div>
                  <div className='buttons'>
                    <button>VER</button>
                    <button>COMPRAR</button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
