import React, { useContext } from 'react'
import styles from './Robot.module.css'
import { appContext } from '../AppState'
import { withAddToCart } from './AddToCart'

export interface RobotProps {
  id: number,
  name: string,
  email: string,
  addToCart: (id, name) => void
}

const Robot : React.FC<RobotProps> = ({id, name, email, addToCart}) => { // FC: function component
  const value = useContext(appContext)
 
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>age: {value.age}</p>
      <p>name: {value.name}</p>
      <button onClick={() => addToCart(id, name)}>加入购物车</button>
  </div>
  )
}

export default withAddToCart(Robot)