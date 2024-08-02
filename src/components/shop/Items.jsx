import styles from './Items.module.css'
import Card from './Card'
import DL from '../../assets/temp/DL.jpg'
import KH from '../../assets/temp/KH.jpg'
import MP from '../../assets/temp/MP.jpg'
import SO from '../../assets/temp/SO.jpg'
import OS from '../../assets/temp/OS.jpg'
import NT from '../../assets/temp/NT.jpg'


const fakeStore = [
    {
        id:1,
        title: "Outside Space",
        url: OS,
        price: 20,
        currency: "MXN", 
    },
    {
        id:2,
        title: "Space Oddity",
        url: SO,
        price: 20,
        currency: "MXN", 
    },
    {
        id:3,
        title: "Kame House",
        url: KH,
        price: 20,
        currency: "MXN", 
    },
    {
        id:4,
        title: "Duck Lord",
        url: DL,
        price: 15,
        currency: "MXN", 
    },
    {
        id:5,
        title: "My Pupi",
        url: MP,
        price: 25,
        currency: "MXN", 
    },
    {
        id:6,
        title: "Ninja Town",
        url: NT,
        price: 20,
        currency: "MXN", 
    },
]

const Items = () => {
  return (
    <div className={styles.MC}>
        <div className={styles.gridMC}>
            {fakeStore.map((item)=>(
                <Card thumbnail={item.url} title={item.title} price={item.price} currency={item.currency} id={item.id} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default Items