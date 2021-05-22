import React, { useContext } from 'react'
import styles from './Robot.module.css'
import { appContext } from '../index'

interface RobotProps {
  id: number,
  name: string,
  email: string
}

const Robot : React.FC<RobotProps> = ({id, name, email}) => { // FC: function component
  const value = useContext(appContext)
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>age: {value.age}</p>
  </div>
  )
}

export default Robot