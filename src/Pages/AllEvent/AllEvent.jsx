import events from '../../event.json'
import EventCard from './EventCard';

const AllEvent = () => {
    console.log(events);
    return (
        <div className="pt-64 lg:pb-32 pb-12">
            <div className='my-container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-10'>
                {
                    events.slice(0, 12).map(card => <EventCard key={card.id} card={card}></EventCard>)
                }
            </div>
        </div>
    );
};

export default AllEvent;