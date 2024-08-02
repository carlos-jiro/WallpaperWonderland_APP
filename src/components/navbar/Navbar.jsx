import React from 'react'
import styles from './Navbar.module.css'
import ww from '../../assets/ww.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = ({ handleOpenModal }) => {
  const navigate = useNavigate()
  const handleOnCLick = () => {
    navigate('/')
  }

  return (
    <div className={styles.MC}>
      <div className={styles.left}>
        <div className={styles.imgContainer} onClick={handleOnCLick}>
          <img src={ww}/>
        </div>
      </div>
      <div className={styles.center}>
        <NavLink to='/' >
          <div className={styles.NavBtn} >
            <p>Shop</p>
          </div>
        </NavLink>
        <NavLink to='/newsletter' >
          <div className={styles.NavBtn} >
            <p>Newsletter</p>
          </div>
        </NavLink>
        <NavLink to='/about' >
          <div className={styles.NavBtn} >
            <p>About</p>
          </div>
        </NavLink>
      </div>
      <div className={styles.rigth}>
        <NavLink to='/cart' >
          <div className={styles.NavBtn}>
            <i class="bi bi-bag-heart"></i>
          </div>
        </NavLink>
        <div className={styles.NavBtn} onClick={()=>handleOpenModal()}>
          <i class="bi bi-person-circle"></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar