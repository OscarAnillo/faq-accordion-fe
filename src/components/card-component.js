import AccordionComponent from "./accordion-component";
import ImageComponent from "./image-component";

export default function CardComponent(){
    return (
        <div className="card">
            <ImageComponent />
            <AccordionComponent />
        </div>
    )
}