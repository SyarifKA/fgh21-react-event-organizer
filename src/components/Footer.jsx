import React from 'react'
import LogoWetick from './LogoWetick'
import FootFb from '../assets/images/foot-logo-fb.png'
import FootIg from '../assets/images/foot-logo-ig.png'
import FootTwit from '../assets/images/foot-logo-twit.png'
import FootWa from '../assets/images/foot-logo-wa.png'

function FooterMain() {
    return (
        <div className='flex flex-col px-8 md:px-[218px] gap-16 mb-8 md:mb-40'>
            <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between'>
                <div className='flex flex-col gap-4'>
                    <LogoWetick />
                    <div>Find events you love with our</div>
                    <div className='flex gap-2'>
                        <img src={FootFb} alt="" />
                        <img src={FootIg} alt="" />
                        <img src={FootTwit} alt="" />
                        <img src={FootWa} alt="" />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='font-semibold'>Wetick</div>
                    <div className='text-[rgba(193,197,208,1)]'>About Us</div>
                    <div className='text-[rgba(193,197,208,1)]'>Features</div>
                    <div className='text-[rgba(193,197,208,1)]'>Blog</div>
                    <div className='text-[rgba(193,197,208,1)]'>Payments</div>
                    <div className='text-[rgba(193,197,208,1)]'>About Us</div>
                    <div className='text-[rgba(193,197,208,1)]'>Mobile App</div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='font-semibold'>Features</div>
                    <div className='text-[rgba(193,197,208,1)]'>Booking</div>
                    <div className='text-[rgba(193,197,208,1)]'>Create Event</div>
                    <div className='text-[rgba(193,197,208,1)]'>Discover</div>
                    <div className='text-[rgba(193,197,208,1)]'>Register</div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='font-semibold'>Company</div>
                    <div className='text-[rgba(193,197,208,1)]'>Partnership</div>
                    <div className='text-[rgba(193,197,208,1)]'>Help</div>
                    <div className='text-[rgba(193,197,208,1)]'>Terms of Services</div>
                    <div className='text-[rgba(193,197,208,1)]'>Privacy & Policy</div>
                    <div className='text-[rgba(193,197,208,1)]'>Sitemap</div>
                </div>
            </div>
            <div className='font-semibold text-[rgba(90,113,132,1)]'>© 2020 Wetick All Rights Reserved</div>
        </div>
    )
}

export default FooterMain