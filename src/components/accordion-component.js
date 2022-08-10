import  { useState } from 'react';
import data from '../data/data.json'

export default function AccordionComponent(){
    const [open, setOpen] = useState(null);

    const clickHandler = (i) => {
        if(open === i){
            return setOpen(null)
        }
        setOpen(i)
    }

    return (
        <section> 
            <h1>FAQ</h1>
            <div className='faq-box'>
                {data.map((item, i) => (
                    <div key={item.id} 
                    onClick={() => clickHandler(i)}
                    className="inner-div">
                        <h5>{item.question}</h5>
                        <img src='/images/icon-arrow-down.svg' alt="" />
                        <div className={open === i ? 'one' : 'one hoy'}>
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}