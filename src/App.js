import logo from './logo.svg';
import './App.css';
import Category from './Component/Category';
import Products from './Component/Products';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  let [finalCategory, setFinalCategory] = useState([])
  let [finalProducts, setFinalProducts] = useState([]);
  

  // get Category
  let getCategory = () =>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=>res.data)
    .then((finalRes) => {
      setFinalCategory(finalRes)
    })
  }

  // get products 
  let getProducts = () =>{
    axios
      .get("https://dummyjson.com/products")
      .then((res) => res.data)
      .then((finalRes) => {
        setFinalProducts(finalRes.products);
        console.log(finalRes.products)
      });
  }
  useEffect(()=>{
    getCategory()
    getProducts()

  }, [])
  return (
    <>
      <div className='py-[40px]'>
        <div className='max-w-[1220px] mx-auto'>
          <h2 className='text-[40px] font-bold text-center'>Our Products</h2>
          <div className='grid grid-cols-[30%_auto]'>
            <div>
              <Category finalCategory= {finalCategory}/>
            </div>
            <div className='mt-[70px] ml-3'>
              <Products finalProducts={finalProducts}/>
            </div>
          </div>
        </div>

      </div>
    
    </>
  );
}

export default App;
