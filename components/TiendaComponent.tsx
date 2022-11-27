import { PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER } from 'next/dist/shared/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
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
import { FcSimCardChip } from "react-icons/fc";
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'

const products = [
  {
    id: 0,
    link: "/",
    url: product1,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est ducimus vero eaque delectus reiciendis, quasi enim dolorum provident, laudantium corrupti eveniet tempore mollitia ex deleniti? Quia rerum consequatur eveniet."
  },
  {
    id: 1,
    link: "/",
    url: product2,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est ducimus vero eaque delectus reiciendis, quasi enim dolorum provident, laudantium corrupti eveniet tempore mollitia ex deleniti? Quia rerum consequatur eveniet."
  },
  {
    id: 2,
    link: "/",
    url: product3,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est ducimus vero eaque delectus reiciendis, quasi enim dolorum provident, laudantium corrupti eveniet tempore mollitia ex deleniti? Quia rerum consequatur eveniet."
  },
  {
    id: 3,
    link: "/",
    url: product4,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est ducimus vero eaque delectus reiciendis, quasi enim dolorum provident, laudantium corrupti eveniet tempore mollitia ex deleniti? Quia rerum consequatur eveniet."
  },
  {
    id: 4,
    link: "/",
    url: product5,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est ducimus vero eaque delectus reiciendis, quasi enim dolorum provident, laudantium corrupti eveniet tempore mollitia ex deleniti? Quia rerum consequatur eveniet."
  },
  {
    id: 5,
    link: "/",
    url: product6,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est ducimus vero eaque delectus reiciendis, quasi enim dolorum provident, laudantium corrupti eveniet tempore mollitia ex deleniti? Quia rerum consequatur eveniet."
  },
  {
    id: 6,
    link: "/",
    url: product7,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est ducimus vero eaque delectus reiciendis, quasi enim dolorum provident, laudantium corrupti eveniet tempore mollitia ex deleniti? Quia rerum consequatur eveniet."
  },
  {
    id: 7,
    link: "/",
    url: product8,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est ducimus vero eaque delectus reiciendis, quasi enim dolorum provident, laudantium corrupti eveniet tempore mollitia ex deleniti? Quia rerum consequatur eveniet."
  },
  {
    id: 8,
    link: "/",
    url: product9,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est ducimus vero eaque delectus reiciendis, quasi enim dolorum provident, laudantium corrupti eveniet tempore mollitia ex deleniti? Quia rerum consequatur eveniet."
  },
  {
    id: 9,
    link: "/",
    url: product10,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est ducimus vero eaque delectus reiciendis, quasi enim dolorum provident, laudantium corrupti eveniet tempore mollitia ex deleniti? Quia rerum consequatur eveniet."
  },
  {
    id: 10,
    link: "/",
    url: product11,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est ducimus vero eaque delectus reiciendis, quasi enim dolorum provident, laudantium corrupti eveniet tempore mollitia ex deleniti? Quia rerum consequatur eveniet."
  },
  {
    id: 11,
    link: "/",
    url: product12,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est ducimus vero eaque delectus reiciendis, quasi enim dolorum provident, laudantium corrupti eveniet tempore mollitia ex deleniti? Quia rerum consequatur eveniet."
  },
]

export default function TiendaComponent() {

  const [modalActive,setModalActive] = useState(false)
  const [details,setDetails] = useState('details')
  const [productUrl,setProductUrl]: any = useState('')
  const [productDescription,setProductDescription] = useState('')
  const [cardNumber,setCardNumber] = useState('')
  const [cardCvv,setCardCvv] = useState('')
  const [month,setMonth] = useState('Month')
  const [year,setYear] = useState('Year')
  const [inputCvv,setInputCvv] = useState(false)

  const agregarCaracter = (cadena: string) => {
    let cadenaConCaracteres = "";
    const longitudCadena = cadena.length;
    for (let i = 0; i < longitudCadena; i += 4) {
      if (i + 4 < longitudCadena) {
        cadenaConCaracteres += cadena.substring(i, i + 4) + ' ';
      } else {
        cadenaConCaracteres += cadena.substring(i, longitudCadena);
      }
    }
    return cadenaConCaracteres;
  }

  const changeCardNumber = (value: any) => {
    value = value.replace(/[^0-9]/g,'')
    if (value.length >= 16) {
      const number = agregarCaracter(value.slice(0,16))
      return setCardNumber(number)
    }
    const number = agregarCaracter(value.slice(0,16))
    return setCardNumber(number)
  }

  const changeCardCvv = (value: any) => {
    value = value.replace(/[^0-9]/g,'')
    if (value.length >= 3) {
      const number = value.slice(0,3)
      return setCardCvv(number)
    }
    const number = value.slice(0,3)
    return setCardCvv(number)
  }

  useEffect(() => {
    const lengthCardnumber = cardNumber.length
    const numberMonth = parseInt(month)
    const numberYear = parseInt(year)
    const valid = lengthCardnumber === 19 && !isNaN(numberMonth) && !isNaN(numberYear)
    if (valid) {
      setInputCvv(true)
    }
  }, [cardNumber,month,year])

  return (
    <>
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
                      <Image
                        src={product.url}
                        alt={product.description}
                      />
                      {/* <Link href={product.link}>
                      </Link> */}
                    </div>
                    <div className='buttons'>
                      <button onClick={()=>{
                        setDetails('details')
                        setModalActive(true)
                        setProductUrl(product.url)
                        setProductDescription(product.description)
                      }}>VER</button>
                      <button onClick={()=>{
                        setDetails('pay')
                        setModalActive(true)
                      }}>COMPRAR</button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className={ modalActive ? 'modal active' : 'modal' }>
        <div className='blur' onClick={()=>{
          setModalActive(false)
          setProductUrl('')
          setProductDescription('')
        }}></div>
        <div className={ details === 'details' ? 'details product' : 'details payment' }>
          <div className='close' onClick={()=>{
          setModalActive(false)
          setProductUrl('')
          setProductDescription('')
          }}>X</div>
          {
            details === 'details' ?
            <>
              <div className='bxImg'>
                <div className='imgBx'>
                  <Image
                    src={productUrl}
                    alt={productDescription}
                  />
                </div>
              </div>
              <div>
                <p>{productDescription}</p>
              </div>
            </> :
            <>
              <form className={ inputCvv ? 'backView' : 'frontView' }>
                <div className='front'>
                  {
                    cardNumber.length === 19 && !isNaN(parseInt(month)) && !isNaN(parseInt(year)) && 
                    <div className='arrowGo' onClick={()=>setInputCvv(true)}>
                      <ArrowRight2 size="32" color="#fff"/>
                    </div>
                  }
                  <div className='bx'>
                    <FcSimCardChip size={48} />
                  </div>
                  <div className='bx'>
                    <div className='cardNumber'>
                      <label htmlFor='Number'>Número</label>
                      <input type={'text'} id={'Number'} placeholder={'1234 5678 1234 5678'} value={cardNumber} autoFocus onChange={(e)=>{changeCardNumber(e.target.value)}}/>
                    </div>
                  </div>
                  <div className='bx' style={{ justifyContent: 'flex-end' }}>
                    <div className='date'>
                      <label>Vencimiento</label>
                      <div className='year_and_month'>
                        <select onChange={e=>setMonth(e.target.value)}>
                          <option>Mes</option>
                          <option>01</option>
                          <option>02</option>
                          <option>03</option>
                          <option>04</option>
                          <option>05</option>
                          <option>06</option>
                          <option>07</option>
                          <option>08</option>
                          <option>09</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                        </select>
                        <span>/</span>
                        <select onChange={e=>setYear(e.target.value)}>
                          <option>Año</option>
                          <option>2022</option>
                          <option>2023</option>
                          <option>2024</option>
                          <option>2025</option>
                          <option>2026</option>
                          <option>2027</option>
                          <option>2028</option>
                          <option>2029</option>
                          <option>2030</option>
                          <option>2031</option>
                          <option>2032</option>
                          <option>2033</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='back'>
                  <div className='arrowBack' onClick={()=>setInputCvv(false)}>
                    <ArrowLeft2 size="32" color="#fff"/>
                  </div>
                  <div className='bx' style={{ flexDirection: 'column', gap: '.3rem', alignItems: 'flex-start' }}>
                    <div className='bar'></div>
                  </div>
                  <div className='bx'>
                    <div className='cvv'>
                      <label htmlFor='cvv'>CVV</label>
                      <input type={'number'} id={'cvv'} value={cardCvv} placeholder={'123'} onChange={(e)=>changeCardCvv(e.target.value)}/>
                    </div>
                  </div>
                </div>
              </form>
              <div className='buttonPayment'>
                <button className={ cardNumber.length === 19 && !isNaN(parseInt(month)) && !isNaN(parseInt(year)) && cardCvv.length === 3 ? 'active' : '' }>COMPRAR</button>
              </div>
            </>
          }
        </div>
      </div>
    </>
  )
}
