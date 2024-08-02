import React, { useState } from 'react'
import styles from './NoLoggedUser.module.css'
import g from '../../assets/g.png'


const NoLoggedUser = () => {
    const [viewPass, setViwPass] = useState(false)

    const handleView = (e) => {
        e.preventDefault()
        setViwPass(!viewPass)
        }
    
    const handleLogin = (e) => {
        e.preventDefault()
        alert('ya mero')
        }
  return (
    <div className={styles.MC}>
        <div className={styles.title}>
            <h1>Login into your Account</h1>
            <p>Welcome back! Select method to Loin:</p>
        </div>
        <div className={styles.GoogleSection}>
            <img src={g} alt='fake' style={{ width: '18rem' }} />
        </div>
        
        <div className={styles.divider}>
            <hr className={styles.dividerLine} />
            <span className={styles.dividerText} >or continue with email</span>
            <hr className={styles.dividerLine} />
        </div>

        <div className={styles.FormContainer}>

            <form action="submit">

                <div className={styles.inputStyle}>
                    <input type="text" placeholder="Email" />
                </div>

                <div className={styles.inputPass}>
                    <input type={`${viewPass ? "text" : "password"}`} placeholder='Password' />
                    <button onClick={handleView}>
                        {viewPass ? <i class="bi bi-eye"></i> : <i class="bi bi-eye-slash"></i>}
                    </button>
                </div>
                  
                <div className={styles.remFor}>
                    <div>
                        <input type="checkbox" name="rmemberme" id="rmemberme" /> <span>Remember me</span>
                    </div>
                    <p><a href="">Forgot Password?</a></p>
                </div>

                <button id={styles.login} type='submit' onClick={handleLogin}>Log in</button>
            </form>

        </div>
        <div className={styles.newAcc}>
            <p>Dont have an account? <a href="">Create account</a></p>
        </div>
    </div>
  )
}

export default NoLoggedUser