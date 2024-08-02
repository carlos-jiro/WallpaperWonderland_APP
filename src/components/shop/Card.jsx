import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './Card.module.css'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const Card = ({thumbnail, title, price, currency, id}) => {
    const navigate = useNavigate()
    const [liked, setLiked] = useState(false);
    const [added, setAdded] = useState(false)

    const handleOnCLick = () => {
        navigate(`/item/${id}`)
    }

    const handleLiked = () => {
        setLiked(!liked)
    }

    const handleAdded = () => {
        setAdded(!added)
    }

  return (
    <div className={styles.MC}>
        <div className={styles.imgMC} onClick={handleOnCLick}>
            <img src={thumbnail} alt="" />
        </div>
        <div className={styles.infoMC}>
            <div className={styles.title}>
                <p>{title}</p>
            </div>
            <div className={styles.infoSC}>
                <div className={styles.price}>
                    <p>${price} {currency}</p>
                </div>
                <div className={styles.like}>
                    {added 
                        ? 
                        <p onClick={handleAdded}><i class="bi bi-cart-check-fill"/></p>
                        : 
                        <p onClick={handleAdded}><i class="bi bi-cart-plus"/></p> 
                    }
                    {liked 
                        ? 
                        <p onClick={handleLiked} style={{ color: '#ef233c' }}><i class="bi bi-heart-fill"/></p> 
                        : 
                        <p onClick={handleLiked}><i class="bi bi-heart"/></p>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card