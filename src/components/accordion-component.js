import  { useState } from 'react';
import data from '../data/data.json'

export default function AccordionComponent(){
    const [open, setOpen] = useState(null);

    const clickHandler = (index) => {
        if(open === index){
            setOpen(null)
        }
        setOpen(index)
    }

    return (
        <section> 
            <h1>FAQ</h1>
            <div className='faq-box'>
                {data.map((item, index) => (
                    <div key={item.id} className="inner-div">
                        <div className="row">
                            <h5>{item.question}</h5>
                            <img src='/images/icon-arrow-down.svg' alt="" onClick={() => clickHandler(index)}/>
                        </div>
                        {open === 0 ? '' : <p className='para'>{item.answer}</p>}
                    </div>
                ))}
            </div>
        </section>
    )
}