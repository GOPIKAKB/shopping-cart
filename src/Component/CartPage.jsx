import React, { useContext, useEffect, useState } from 'react'
import { myConext } from '../App'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './../CSS/CartCard.css'

function CartPage() {
    const { cart, setCart } = useContext(myConext)
    const [total, setTotal] = useState('0')

    const nav = useNavigate()

    const backToShopping = () => {
        nav(-1)
    }
    useEffect(() => {
        const totalcount = cart.reduce((total, item) => total + (item.count * item.price), 0)
        setTotal(totalcount)
    }, [cart])

    const handleDelete = (index) => {
        const newData = [...cart];
        newData.splice(index, 1);
        setCart(newData);
    }
    const decrement = (index) => {
        const newData = [...cart]
        let newCount = newData[index].count
        newCount = newCount
        newData[index].count = newCount - 1
        setCart([...newData])

    }
    const increment = (index) => {
        const newData = [...cart]
        let newCount = newData[index].count
        newCount = newCount
        newData[index].count = newCount + 1
        setCart([...newData])
    }
    return (
        <div >
            <div className='center'>
                {cart.map((item, index) => (
                    <div class="cards">
                        <img src={item.thumbnail} alt="Card Image"></img>
                        <div class="card-content">
                            <h2 class="card-title">{item.brand}</h2>
                            <p class="card-description">{`${item.price * item.count}Rs`}</p>
                            <div >
                                <button onClick={() => decrement(index)}>-</button>
                                <label>{`Quantity:${item.count}`}</label>
                                <button onClick={() => increment(index)}>+</button>
                            </div><br />
                            <button onClick={() => handleDelete(index)} style={{ width: '100px', backgroundColor: 'blue', color: 'white' }}>Delete</button><br />
                        </div>
                    </div>

                ))}


            </div>
            <div style={{ textAlign: 'center', paddingTop: '50px' }}><b>Total Price:{total}</b></div>
            <div style={{ paddingTop: '40px', display: 'flex', justifyContent: 'space-around' }}>
                <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={backToShopping}>Continue Shopping</button>
                <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={backToShopping}>Proceed To Buy</button>
            </div>
        </div>
    )
}

export default CartPage
