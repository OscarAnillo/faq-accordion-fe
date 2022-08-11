import  { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import data from '../data/data.json'

export default function AccordionComponent(){
    const [open, setOpen] = useState(null);
    const titleRef = useRef(null)

    const clickHandler = (i) => {
        if(open === i){
            return setOpen(null)
        }
        setOpen(i)
    }

    useEffect(() => {
        gsap.timeline()
        .from('.faq', {opacity: 0, x: 200, delay: 0.5, ease: 'back'})
        .to('.faq', {opacity: 1, x: 0, ease: 'back'})
        .from('.faq-box div', {opacity: 0, x: 200,  stagger: 0.1, ease:'back'})
        .to('.faq-box div', {opacity: 1, x: 0, stagger: 0.1, ease:'back'})
    }, []);

    return (
        <section className="section"> 
            <h1 className="faq" ref={titleRef}>FAQ</h1>
            <div className='faq-box'>
                {data.map((item, i) => (
                    <div key={item.id} 
                    onClick={() => clickHandler(i)}
                    className="inner-div">
                        <h5>{item.question}</h5>
                        <img src='/images/icon-arrow-down.svg' alt="" className={open === i ? 'down' : ''}/>
                        <div className={open === i ? 'one' : 'one hoy'}>
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}