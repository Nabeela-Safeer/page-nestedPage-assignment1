import NavBar from "./components/navbar";
import Link from "next/link";
import styles from "../app/home.module.css"

const HomePage=() =>{
  return(
    <div>
      <NavBar />
      <h1 className={styles.container}>This is homepage</h1>
      <h1 className={styles.container}>Click above Navbar for any kind of information</h1>
      </div>
        
  )
}
export default HomePage;