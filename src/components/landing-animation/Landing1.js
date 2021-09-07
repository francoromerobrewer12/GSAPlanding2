import React,{useEffect} from 'react'
import gsap from 'gsap'
import './Landing1.css'
import { BsSearch } from 'react-icons/bs';
import { BsBag } from 'react-icons/bs';
import { BsArrowDown } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';
import fashion4 from '../../images/fashion4.jpg'


function Landing1() {

    const tl1 = gsap.timeline()

    useEffect(() => {
        tl1.from(".loading-img", .5, {scaleX:0, transformOrigin: "left"})
        .from(".collection", .6, {scaleX:0, transformOrigin: "left", opacity:0}, "-=.2")
        .from(".landing1-bgimg", .8, {opacity:0, scale: 1.2})
        .from(".landing1-navlink", .5, {y: -20, stagger: 0.2, opacity: 0}, "-=.2")
        .from([".collection-h2",".collection-h1",".shopnow-btn"], .5, {opacity:0, y:100}, "<")
        .from(".landing1-header", .5, {opacity: 0, x: 20}, "<")
        .from(".contenedor-der", .5, {opacity:0, x: -20}, "-=1")
        .from(".landing1-hero-info", .5, {y: 100, opacity:0}, "-=.5")

    },[])

    return (
        <div className="Landing1-container">

            <div className="contenedor-izq">
                <header className="landing1-header">
                    <h2 className="landing1-logo">PO</h2>
                    <BsSearch className="search-icon"/>
                    <BsBag className="bag-icon"/>
                </header>

                <nav className="landing1-nav">
                    <a href="#" className="landing1-navlink">About</a>
                    <a href="#" className="landing1-navlink">Collections</a>
                    <a href="#" className="landing1-navlink">Shop</a>
                    <a href="#" className="landing1-navlink">Cart</a>
                </nav>

                <div className="landing1-herosection">
                    <img src={fashion4} alt="" className="landing1-bgimg"/>
                    <div className="loading-img"></div>

                    <div className="hero-contenedores-internos">
                        <div className="landing1-hero-info">
                            <div className="scrolldown-btn">
                                <BsArrowDown className="scrolldown-icon"/>
                            </div>
                            <div className="landing1-info-text">
                                <h2 className="info-tittle">Summer Collection</h2>
                                <p className="info-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia excepturi labore totam modi cupiditate iste.</p>
                                <p className="viewmore-btn">View More</p>
                            </div>
                            <div className="quickview-area">
                                <p className="quickview-text">Quick View</p>
                            </div>
                        </div>

                        <div className="collection">
                            <h2 className="collection-h2">New Arrivals</h2>
                            <h1 className="collection-h1">Summer Collection 2021</h1>
                            <div className="shopnow-btn">Shop Now</div>
                        </div>
                    </div>  
                </div>

            </div>
            
            <div className="contenedor-der">
                <FaInstagram className="socialmedia-icon"/>
                <AiOutlineFacebook className="socialmedia-icon"/>
                <AiOutlineYoutube className="socialmedia-icon"/>
            </div>
        </div>
    )
}

export default Landing1
