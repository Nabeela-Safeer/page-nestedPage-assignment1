import styles from "../contact/contact.module.css"
import NavBar from "../components/navbar";

const contact=() =>{
    return(
        <div className={styles.container}>
            <h1 className= {styles.header}>this is contact page</h1>
            <h1>Phone number:12345788</h1>
            <h1>Email:xyz@gmail.com</h1>
            <h1>Home Adress:xyz Colony</h1>
        </div>
    )
}

export default contact;