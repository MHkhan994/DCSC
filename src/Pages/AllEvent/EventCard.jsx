import eventCardbg from '../../assets/event/evetCard.png'
import { BsArrowUpRight } from 'react-icons/bs'

const EventCard = () => {
    return (
        <div className='bg-[#1C2069] rounded-2xl lg:p-[24px] p-4'>
            <img src={eventCardbg} className='mx-auto' alt={'event card image'} />
            <h1 className='font-lora pt-8 pb-3 text-[#FFD707] font-bold text-2xl text-center'>DCSC Event Photography Program</h1>
            <div className='flex justify-between items-end pb-3'>
                <p className='text-lg font-md text-white'>18-10-2023 to 20-10-2023</p>
                <button className='h-10 w-10 bg-blue-600 flex justify-center items-center'>
                    <BsArrowUpRight className='text-white text-xl'></BsArrowUpRight>
                </button>
            </div>
        </div>
    );
};

export default EventCard;