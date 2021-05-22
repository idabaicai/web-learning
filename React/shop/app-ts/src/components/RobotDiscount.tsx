import React, { useContext } from 'react'
import styles from './Robot.module.css'
import { appContext } from '../AppState'
import { useAddtoCart } from './AddToCart'

export interface RobotProps {
  id: number,
  name: string,
  email: string,
}

const RobotDisCount: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext);
  const addToCart = useAddtoCart();
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
      <h3>打折商品</h3>
      <p>age: {value.age}</p>
      <p>name: {value.name}</p>
      <button onClick={() => addToCart(id, name)}>加入购物车</button>
  </div>
  )
}
export default RobotDisCount