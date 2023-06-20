import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { myConext } from '../App'
import './../CSS/Detailpage.css'
import { AiFillStar } from "react-icons/ai";

function DetailPage() {
  const { parameter } = useParams()
  const { data } = useContext(myConext)
  return (
    <div>
    <div className='container'>
      {console.log(data[parameter])}
      <div className='image-container center'>
        {
          data[parameter].images.map(item =>
            <img src={item}></img>
          )
        }
      </div>
      <div className='content-container'>
        <h3>{data[parameter].brand}</h3>
        <h5>{data[parameter].title}</h5>
        <p>{data[parameter].category}</p>
        <p>{data[parameter].description}</p>
        <p>{data[parameter].rating}<AiFillStar /></p>
        <p><b>{`${data[parameter].price} MRP`}</b></p>
        <p style={{ color: 'blue' }}>{` ( ${data[parameter].discountPercentage}% OFF )`}</p>
        <p style={{ color: 'red' }}>{data[parameter].stock} left</p>
      </div>
    </div>
    
        <button style={{ backgroundColor: 'blue', color: 'white' }}>Buy Now</button>
    
    </div>
  )
}

export default DetailPage
