import { Link } from 'react-router-dom';
import cmtteeImg from '../../assets/committee/cmteeCard.png'
import committee from '../../committee.json'

const Committee = () => {

    console.log(committee);

    const slides = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6']

    return (
        <div className="py-20 lg:py-40 relative">
            <div className="gradient h-full w-1/2 absolute top-0 -left-1/4"></div>
            <div className='my-container text-center text-white'>
                <h1 className='font-lora font-bold text-5xl'>Executive Committee 2023</h1>
                <p className='pt-10 pb-16 lg:px-[20%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</p>
            </div>
            <div className='my-container grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center gap-7'>
                {
                    committee.slice(0, 4).map(card => {
                        return <div key={card.id} className='bg-[#100228] z-50 h-[400px] w-[296px] pt-2 relative rounded-2xl mx-auto'>
                            <img src={cmtteeImg} alt="commite card image" />
                            <div className='committee-card w-full h-[60%] flex justify-end flex-col absolute bottom-0 left-0 p-6 rounded-2xl'>
                                <h3 className='font-lora font-bold text-lg text-white'>{card.name}</h3>
                                <p className='font-normal text-base text-[#1ED2DD]'>{card.description}</p>
                            </div>
                        </div>
                    })
                }
            </div>
            <button className='btn-pri mx-auto block mt-10'>
                <Link to={'/'}>All Member</Link>
            </button>
        </div>
    );
};

export default Committee;