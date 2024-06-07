import './Firstproject.css'
import {useState} from "react"
import logo from './brand_logo.png'
import shoeimage from './shoe_image.png'
import flipkart from './flipkart.png'
import amazon from './amazon.png'
import nike1 from './nike1.png'
import nike2 from './nike2.png'
import Slidercard from './Sliderimage'

export default function Firstproject()
{
    const urls=[nike1 , shoeimage , nike2];
    const [state,setState]=useState(0);
    return(
        <>
            <div className='nav'>
                <div className='logo'>
                   <img src={logo} alt="Logo" />
                </div>
                <div className='tags'>
                       <div className='tagitem'><a href="#">Menu</a></div>
                       <div className='tagitem'><a href="#">Contact</a></div>
                       <div className='tagitem'><a href="#">Location</a></div>
                       <div className='tagitem'><a href="#">About</a></div>
                </div>
                <div className='login'>
                    <button><a href="#">Login/signup</a></button>
                </div>
            </div>
            <div className='section'>
                <div className='content'>
                    <div className='headline'>
                    <h1 className='head'>YOUR FEET DESERVE THE BEST</h1>
                    </div>
                    <div className='headcontent'>
                      YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
                    </div>
                    <div className='option'>
                        <button className='shop'><a href="#">Shop now</a></button>
                        <button className='category'><a href="#">Categories</a></button>
                    </div>
                    <div className='availability'>
                        <h6>Also available on</h6>
                        <div className='companies'>
                        <a href='https://www.flipkart.com/'><img src={flipkart} alt="fliplogo"></img></a>
                        <a href='https://www.amazon.in/'><img src={amazon} alt="amalogo" ></img></a>
                        </div>
                    </div>
                </div>
                <section>
                <div className="prevslide">
                <span className='prev' onClick={()=>{setState((prev)=>prev-1)}}>&#10094;</span> 
                </div>
                <div className="cards">
                <Slidercard src={urls[(state)%3]} />
                </div>
                <div className="nextslide">
                <span className='next' onClick={()=>{setState((prev)=>prev+1)}}>&#10095;</span> 
                </div>
                </section>
            </div>
        
        </>
    )
}
