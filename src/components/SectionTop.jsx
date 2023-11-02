
const SectionTop = ({ heading, subhaeading }) => {
    return (
        <div className='my-container text-center text-white'>
            <h1 className='font-lora font-bold text-5xl'>{heading}</h1>
            {
                subhaeading && <p className='lg:pt-10 pt-6 lg:pb-16 pb-10 lg:px-[20%]'>{subhaeading}</p>
            }
        </div>
    );
};

export default SectionTop;