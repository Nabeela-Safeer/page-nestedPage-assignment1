import Link from "next/link"

export default function NavBar(){
    return(
        <div>
          <ul>
            <li><Link href="/" >home</Link></li>
            <li><Link href="/about" >about</Link></li>
            <li><Link href="contact" >contact</Link></li>
            <li><Link href="service" >service</Link></li>
            <li><Link href="/service/webDevelopment" ></Link></li>
          </ul>
        </div>
    )
}