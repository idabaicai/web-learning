import React, { useContext } from 'react'
import styles from './Robot.module.css'
import { appContext, appSetStateContext } from '../AppState'

interface RobotProps {
  id: number,
  name: string,
  email: string
}

const Robot : React.FC<RobotProps> = ({id, name, email}) => { // FC: function component
  const value = useContext(appContext)
  const setState = useContext(appSetStateContext)
  const addToCart = () => {
    if(setState) {
      setState(state => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, {id, name}]
          }
        }
      })
    }
  }
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>age: {value.age}</p>
      <p>name: {value.name}</p>
      <button onClick={addToCart}>加入购物车</button>
  </div>
  )
}

export default Robot