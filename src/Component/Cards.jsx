import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Cards(prop) {
  return (
    <div style={{ flexWrap: 'wrap', display: 'flex', justifyContent: 'space-around' }}>
      {prop.data ? prop.data.map((item,index) =>

        <Card style={{ width: '18rem', marginTop: '50px' }}>
          <Card.Img variant="top" src={item.thumbnail} style={{ height: '150px' }} />
          <Card.Body>
            <Card.Title>{item.brand}</Card.Title>
            <Card.Text style={{ height: '80px' }}>{item.description}</Card.Text>
            <Card.Text ><b>{`${item.price}Rs`}</b></Card.Text>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <button style={{ backgroundColor: 'blue', color: 'white' }}
                onClick={() => prop.addItem(item)}>Add To Cart</button>
              <Link to={`/detail/${index}`} style={{ textDecoration: 'none', color: 'black' }}>
                <button style={{ backgroundColor: 'blue', color: 'white' }}> View Item</button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      ) : <></>}

    </div>
  )
}

export default Cards
