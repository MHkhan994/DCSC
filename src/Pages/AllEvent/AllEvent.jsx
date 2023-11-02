import SectionTop from "../../components/SectionTop";
import committee from '../../committee.json'
import EventCard from "./EventCard";
import { useState } from "react";

const AllEvent = () => {

    const [sliceNum, setSliceNum] = useState(16)

    return (
        <div className="pt-64 pb-20">
            <SectionTop
                heading={"Executive Committee 2023"}
                subhaeading={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"}
            />
            <div className='my-container grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center gap-5'>
                {
                    committee.slice(0, sliceNum).map(card => <EventCard key={card.id} card={card}></EventCard>)
                }
            </div>
            {
                sliceNum <= committee.length && <button onClick={() => setSliceNum(pre => pre + 8)} className="btn-pri block mx-auto mt-20">Load More</button>
            }
        </div>
    );
};

export default AllEvent;