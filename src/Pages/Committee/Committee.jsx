import committee from '../../committee.json'
import { useState } from "react";
import SectionTop from "../../components/SectionTop";
import ComCard from './ComCard';
import { Helmet } from 'react-helmet-async';

const Committee = () => {

    const [sliceNum, setSliceNum] = useState(16)

    return (
        <div className="lg:pt-64 pb-20 pt-44">
            <Helmet>
                <title>Committee - DCSC</title>
            </Helmet>
            <SectionTop
                heading={"Executive Committee 2023"}
                subhaeading={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"}
            />
            <div className='my-container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-center items-center gap-5'>
                {
                    committee.slice(0, sliceNum).map(card => <ComCard key={card.id} card={card}></ComCard>)
                }
            </div>
            {
                sliceNum <= committee.length && <button onClick={() => setSliceNum(pre => pre + 8)} className="btn-pri block mx-auto mt-20">Load More</button>
            }
        </div>
    );
};

export default Committee;