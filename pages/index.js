import React from 'react';

import { Product, FooterBanner, Footer, HeroBanner
 } from '../components';

const Home = () => {
  return (
    <>
    <HeroBanner/>

    <div className='products-heading'>
      <h2>Produtos mais vendidos</h2>
      <p>Conheça nossa variação de cores</p>
    </div>

    <div className='products-container'>
      {['Product 1', 'Product 2'].map(
        (product) => product)}
    </div>

    <FooterBanner/>
    </>
  )
}

export default Home;