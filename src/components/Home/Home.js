import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';
import cors from 'cors';

const Home = () => {
    const [loading,setLoading] = useState(true)
    const [product,setProduct] = useState([]);

    useEffect(() => {
        fetch('https://arcane-retreat-79532.herokuapp.com/products')
        .then(res =>res.json())
        .then(data => {
            setProduct(data)
            setLoading(false);
        })
       
    },[])
    console.log(product);
   
    return (
           <section className="Home">
               {
                   loading? <p className= 'text-center'>loading...</p>:
            
               <div className="container">
                   <div className="products">
                   {
                product.map(pd => <Product key={pd.id} product ={pd}></Product>)
                  }
                   </div>

               </div>
                   }
           </section>

           
        
    );
};

export default Home;