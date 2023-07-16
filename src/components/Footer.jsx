import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='bulb'>
            <div className='pic'>
                <img src='bulb.png' alt='' />
                <h1>Knowledge Grow your Influence</h1>
            </div>
            <div className='footer-text'>
                <p>Lerem ipsum</p>
                <a href='/'>Get Started</a>
            </div>
        </div>
        <div className='newsletter'>
            <div className='news-left'>
                <h4>Subscribe</h4>
                <h1>Subscribe to Get Latest <br /> Update From Us</h1>
                <span className='curve'><img src='curve.png' alt='' /></span>
            </div>
            <div className='news-right'>
                <p>Lorem ipsum</p>
                <form action=''>
                    <input type='email' name="email" />
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
        <div className='footer-menu'>
            <h1>BLOCKRUSH</h1>
            <ul className='footer-inner-nav'>
                <li><a href='#hub'>Hub</a></li>
                <li><a href='#mint'>Mint</a></li>
                <li><a href='#features'>Features</a></li>
                <li><a href='#socials'>Socials</a></li>
            </ul>
        </div>
        <hr />
        <div>
            <p className='text-center'>&#169; Copyright 2023-2028 | All Right Reserved |</p>
        </div>
    </div>
  )
}

export default Footer