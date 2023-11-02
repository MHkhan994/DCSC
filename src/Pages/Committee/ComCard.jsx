import cmtteImg from '../../assets/committee/cmteeCard.png'

const ComCard = ({ card }) => {
    return (
        <div className='bg-[#100228] z-50 h-[400px] max-w-[296px] w-full pt-2 relative rounded-2xl mx-auto'>
            <img src={cmtteImg} className='w-full' alt="commite card image" />
            <div className='committee-card w-full h-[60%] flex justify-end flex-col absolute bottom-0 left-0 p-6 rounded-2xl'>
                <h3 className='font-lora font-bold text-lg text-white'>{card.name}</h3>
                <p className='font-normal text-base text-[#1ED2DD]'>{card.description}</p>
            </div>
        </div>
    );
};

export default ComCard;