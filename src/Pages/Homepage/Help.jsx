import helpbg from '../../assets/help.png'
import SectionTop from '../../components/SectionTop';

const Help = () => {
    return (
        <section className="lg:py-40 py-20 my-container">
            <div className='lg:h-[350px] h-[400px] w-full border-4 rounded-3xl relative'>
                <img src={helpbg} className='h-full rounded-3xl object-cover w-full' alt="" />

                <div className='absolute top-0 left-0 h-full w-full rounded-3xl flex flex-col justify-center items-center gap-14'>
                    <SectionTop heading={"Need Any help?"}></SectionTop>
                    <form className=' lg:px-[15%] px-[5%] flex flex-col lg:flex-row gap-7 text-white' onSubmit={(e) => e.preventDefault()}>
                        <input placeholder='Email' className='lg:w-[200px] w-[300px]  bg-transparent border-b outline-none' type="email" />
                        <input placeholder='Details' className='lg:w-[450px] w-[300px] md:w-[400px] bg-transparent border-b outline-none' type="text" />
                        <button className='btn-pri'>send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Help;