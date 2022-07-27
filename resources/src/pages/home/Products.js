import React, { useState,useEffect } from 'react';
import P2 from '../../img/products/banana.jpg'
import P5 from '../../img/products/potato.jpg'
import P1 from '../../img/products/tomato.jpg'
import P4 from '../../img/products/onions.jpg'
import P3 from '../../img/products/carot.jpg'
import ProductTable from '../../components/tables/ProductTable';
import PageFilterBar from '../../components/PageFilterBar';
import '../../css/pages/Products.css'

function Products({setPageHeader}) {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        setPageHeader("Products");
        setProducts([
            {id: 1, name:'Nyanya', cost: '12,00', price:12000, stock: 2000, img: P1, category:'Viungo vya mboga' },
            {id: 2, name:'Ndizi', cost: '1320', price:30000, stock: 3300, img: P2, category:'Viungo vya mboga' },
            {id: 3, name:'Karoti', cost: '3212', price:44000, stock: 12000, img: P3, category:'Viungo vya mboga' },
            {id: 4, name:'Vitunguu', cost: '2000', price:1000, stock: 2300, img: P4,category:'Viungo vya mboga' },
            {id: 5, name:'Viazi ulaya', cost: '1000',price:122000, stock: 12300, img: P5, category:'Viungo vya mboga'}
        ])
    },[])
  return (
       <div className='products-page'>
            <div className='new-btn-wrapper'><button className='app-btn btn-primary add-item-btn'>Create new Product</button></div>
            <div className='main-content'>
                <div className='top-bar'>
                   <PageFilterBar />
               </div>
               <ProductTable  tbWidth={'95%'} items={products}/>
           </div>
       </div>
  );
}

export default Products;
