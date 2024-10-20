import { BsSearch  , BsFillPersonFill , BsCart } from "react-icons/bs";
import "./Header.css"

export default function Header(){
    return (
        <div>
            <div className="container d-flex navbar"> 
                <div className="box">
                    <ul className="ul-items">
                            <li>Women</li>
                            <li>Men</li>
                            <li>About</li>
                    </ul>
                </div>
                <div className="box ">
                    <h3 className="title">everlane</h3>
                </div>
                <div className="box icons">
                    <BsSearch className="icon"/>
                    <BsFillPersonFill className="icon"/>
                    <BsCart  className="icon"/>
                </div>
            </div>
            <div className="container d-flex second-nav">
                <ul className="second-nav-ul">
                    <li>New Arrivals</li>
                    <li>Cult</li>
                    <li>Favorites</li>
                    <li>Clothing</li>
                    <li>Pants</li>
                    <li>Jeans</li>
                    <li>Tees</li>
                    <li>Sweaters</li>
                    <li>Outerwear</li>
                    <li>Shoes</li>
                    <li>Accessories</li>
                </ul>
            </div>
            
        </div>

    )
}