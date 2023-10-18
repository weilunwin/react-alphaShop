import minus from '../../icons/minus.svg'
import plus from '../../icons/plus.svg'
import { useState } from 'react'

const datas = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 4,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 5,
  },
]

export default function CartContent() {
  const [ cartDatas, setCartDatas ] = useState(datas)

  function handleMinus(itemId) {
    console.log(itemId)
    setCartDatas(cartDatas.map(data => {
      if(data.id === itemId) {
        return {
          ...data, 
          quantity: data.quantity - 1
        };
      } else {
        return data
      }
    }))
  }

  const content = datas.map((item) => (
    <section className="product-list col col-12" key={item.id} data-total-price={0}>
      <div className="product-container col col-12" data-count={0} data-price={3999}>
        <img className="img-container" src={item.img} />
        <div className="product-info">
          <div className="product-name">{item.name}</div>
          <div className="product-control-container">
            <div className="product-control">
              <img className="product-action minus" src={minus} alt='MINUS' onClick={()=>handleMinus(item.id)}/>
              <span className="product-count">{item.quantity}</span>
              <img className="product-action plus" src={plus} alt='PLUS'/>
            </div>
          </div>
          <div className="price">${item.price}</div>
        </div>
      </div>
    </section>
  ))
  return content
}

