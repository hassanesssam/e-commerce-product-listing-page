import './Card.css'
import { FaStar } from "react-icons/fa";

export default function Card (props){
    return(
            <div className='card'>
                <img src={props.img} alt='Product' />
                    <h3 className='product-title'>{props.title}</h3>
                <div className='product-info'>
                    <span className='product-price'>{props.price}</span>
                    <span className='product-rating'><FaStar style={{color : "gold" , fontSize:"20px" , marginRight : " 5px"}} />{props.rating}</span>
                </div>
            </div>
    )
}