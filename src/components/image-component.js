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
            <div className='bg-img-shadow'></div>
            <div className='bg-img-box'></div>
            <div className='bg-img-desktop'></div>
        </div>
    )
}