import React from 'react'
import {FcApproval} from "react-icons/fc"

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className='testimonial-text'>
                <h3>Testimonials</h3>
                <h1>User love Netglobe</h1>
                <p>See what our members are saying. Trusted by 1200+ world class businesses</p>
                <a href='/'> Read all 2,432 reviews</a>
            </div>
            <div className='testimonial-cards'>
                <div className='card'>
                    <img src='person1.png' alt='' />
                    <p>You made it so simple. Our new way of doing trade has become so simple.</p>
                    <div className='icons'>
                        <a href='/'>@devrojas</a>
                        <FcApproval />
                    </div>
                </div>
                <div className='card'>
                    <img src='person1.png' alt='' />
                    <p>You made it so simple. Our new way of doing trade has become so simple.</p>
                    <div className='icons'>
                        <a href='/'>@devrojas</a>
                        <FcApproval />
                    </div>
                </div>
                <div className='card'>
                    <img src='person1.png' alt='' />
                    <p>You made it so simple. Our new way of doing trade has become so simple.</p>
                    <div className='icons'>
                        <a href='/'>@devrojas</a>
                        <FcApproval />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;