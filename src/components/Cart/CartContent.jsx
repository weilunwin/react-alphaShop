import minus from '../../icons/minus.svg'
import plus from '../../icons/plus.svg'
import { useState } from 'react'

export default function CartContent({cartDatas, setCartDatas}) {

  function handleMinus(itemId) {
    setCartDatas(cartDatas.map(data => {
      if (data.id === itemId && data.quantity > 0) {
        return {
          ...data, quantity: data.quantity - 1
        }
      } else {
        return data
      }
    }))
  }

  function handlePlus(itemId) {
    setCartDatas(cartDatas.map(data => {
      if (data.id === itemId) {
        return {
          ...data, quantity: data.quantity + 1
        }
      } else {
        return data
      }
    }))
  }

  return (
    <>
      {cartDatas.map((item) => (
        <section className="product-list col col-12" key={item.id} data-total-price={0}>
          <div className="product-container col col-12" data-count={0} data-price={3999}>
            <img className="img-container" src={item.img} />
            <div className="product-info">
              <div className="product-name">{item.name}</div>
              <div className="product-control-container">
                <div className="product-control">
                  <img className="product-action minus" src={minus} alt='MINUS' onClick={() => handleMinus(item.id)} />
                  <span className="product-count">{item.quantity}</span>
                  <img className="product-action plus" src={plus} alt='PLUS' onClick={() => handlePlus(item.id)} />
                </div>
              </div>
              <div className="price">${item.price * item.quantity}</div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

