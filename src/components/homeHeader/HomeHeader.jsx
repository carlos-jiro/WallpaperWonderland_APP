import React from 'react'
import styles from './HomeHeader.module.css'
import space from '../../assets/room.jpg'
const HomeHeader = () => {
  return (
    <div className={styles.MC}>
      <img src={space} alt="header" />
    </div>
  )
}

export default HomeHeader