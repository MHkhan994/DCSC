import { Link } from 'react-router-dom';
import committee from '../../committee.json'
import SectionTop from '../../components/SectionTop';
import ComCard from '../Committee/ComCard';

const Committee = () => {

    return (
        <div className="py-20 lg:py-40 relative">
            <div className="gradient h-full w-1/2 absolute top-0 -left-[20%]"></div>
            <SectionTop
                heading={"Executive Committee 2023"}
                subhaeading={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"}
            />

            <div data-aos="fade-up" data-aos-duration="1300" data-aos-delay="200" className='my-container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-center items-center gap-5'>
                {
                    committee.slice(0, 4).map(card => <ComCard key={card.id} card={card}></ComCard>)
                }
            </div>
            <button className='btn-pri mx-auto block mt-10'>
                <Link to={'/committee'}>All Member</Link>
            </button>
        </div>
    );
};

export default Committee;