import Navbar from '../navbar/Navbar'
import UserModal from '../userModal/UserModal'
import styles from './layout.module.css'
import { useState } from 'react'

const Layout = ({children}) => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
        <Navbar handleOpenModal={handleOpenModal}  />
        {openModal && <UserModal handleOpenModal={handleOpenModal} />}
        <div>
            {children}
        </div>
    </>
  )
}

export default Layout