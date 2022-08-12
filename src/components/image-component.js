import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function ImageComponent(){
    const divRef = useRef(null);

    useEffect(() => {
        gsap.from(".bg-img", {opacity: 0, delay: 1})
        gsap.to(".bg-img", {opacity: 1, delay: 1})
    }, []);

    return (
        <div className="bg-img" ref={divRef}>
            <img src="images/illustration-box-desktop.svg" alt="" className='box'/>
                <div class="img-desktop">
                    <img  src="./images/illustration-woman-online-desktop.svg" alt="" className='desktop'/>
                    <img  src="./images/bg-pattern-desktop.svg" alt="" className='desktop-bg'/>
                </div>
                <div class="img-mobile">
                    <img src="./images/illustration-woman-online-mobile.svg" alt="" />
                    <img src="./images/bg-pattern-mobile.svg" alt="" className='shadow'/>
                </div>
        </div>
    )
}