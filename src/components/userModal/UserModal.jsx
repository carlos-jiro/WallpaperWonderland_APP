import styles from './UserModal.module.css'
import ww from '../../assets/ww.svg'
import { useState } from 'react'
import LoggedUser from './LoggedUser';
import NoLoggedUser from './NoLoggedUser';

const UserModal = ({ handleOpenModal }) => {
  const [logged, setLogget] = useState(false);
  return (
    <>
      <div className={styles.SC}>
        <div className={styles.header}>

          <div className={styles.left}>
            <img src={ww} alt="logo ww" />
          </div>

          <div className={styles.center}>
            <p></p>
          </div>

          <div className={styles.right}>
            <div className={styles.closeBtn} onClick={()=>handleOpenModal()}>
              <p><i class="bi bi-x"></i></p>
            </div>
          </div>

        </div>

        <div className={styles.UserInfo}>
          {logged ? <LoggedUser /> : <NoLoggedUser />}
        </div>

      </div>
      <div className={styles.MC} onClick={()=>handleOpenModal()}></div>
    </>
  )
}

export default UserModal