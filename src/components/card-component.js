import  { useEffect, useRef } from 'react';
import AccordionComponent from "./accordion-component";
import ImageComponent from "./image-component";

import { gsap } from 'gsap';

export default function CardComponent(){
    const cardRef = useRef();

    useEffect(() => {
        gsap.from(".card", {y: 300, duration: 1, ease: 'back'})
        gsap.to(".card", {y: 0, duration: 1, ease: 'back'})
    }, []);

    return (
        <div className="card row" ref={cardRef}>
            <div>
                <ImageComponent />
            </div>
            <div>
                <AccordionComponent />
            </div>
        </div>
    )
}