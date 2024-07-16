import React from 'react'
import LogoWetick from './LogoWetick'
import FootFb from '../assets/images/foot-logo-fb.png'
import FootIg from '../assets/images/foot-logo-ig.png'
import FootTwit from '../assets/images/foot-logo-twit.png'
import FootWa from '../assets/images/foot-logo-wa.png'

function FooterMain() {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <div>
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
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default FooterMain