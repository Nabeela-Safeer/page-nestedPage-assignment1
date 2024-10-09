import NavBar from "../components/navbar";
import styles from "../service/service.module.css"

const service=() =>{
    return(
        <div className={styles.container}>
            <h1 className={styles.header}>this is service page</h1>
            <h1>Programming services encompass a range of solutions designed to help businesses and individuals develop, maintain, and optimize software applications. These services can include custom software development, mobile app creation, website design, and system integration, tailored to meet specific client needs. With a focus on coding best practices and innovative technologies, programming services ensure that applications are not only functional but also scalable and secure. Additionally, ongoing support and maintenance are often provided to address bugs, updates, and performance improvements, allowing clients to focus on their core operations while leveraging technology effectively.</h1>
        </div>
    )
}

export default service;