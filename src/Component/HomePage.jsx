import React, { useContext, useEffect } from 'react'
import { myConext } from '../App'
import axios from 'axios'
import Cards from './Cards'
import { Link } from 'react-router-dom'

function HomePage() {
    const {cart,setCart,data,setData} =useContext(myConext)

    useEffect(()=>{
        axios.get('https://dummyjson.com/products').then((response)=>{
            setData(response.data.products)
        })
    },[])
    const addItem=(item)=>{
      const newItem={...item, count: 1}
        setCart((prev)=>[...prev,newItem])
    }
    
  return (
    <div>
    <Cards data={data} addItem={addItem} />
    </div>
  )
}

export default HomePage
