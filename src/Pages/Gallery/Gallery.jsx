import gallery1 from '../../assets/Gallery/gallery1.png'
import gallery2 from '../../assets/Gallery/gallery2.png'
import gallery3 from '../../assets/Gallery/gallery3.png'
import gallery4 from '../../assets/Gallery/gallery4.png'
import gallery5 from '../../assets/Gallery/gallery5.png'
import gallery6 from '../../assets/Gallery/gallery6.png'
import gallery7 from '../../assets/Gallery/gallery7.png'
import gallery8 from '../../assets/Gallery/gallery8.png'
import gallery9 from '../../assets/Gallery/gallery9.png'
import gallery10 from '../../assets/Gallery/gallery10.png'
import gallery11 from '../../assets/Gallery/gallery11.png'
import gallery12 from '../../assets/Gallery/gallery12.png'
import gallery13 from '../../assets/Gallery/gallery13.png'
import gallery14 from '../../assets/Gallery/gallery14.png'
import gallery15 from '../../assets/Gallery/gallery15.png'
import { Helmet } from 'react-helmet-async'

const Gallery = () => {

    const gallery = [gallery1, gallery3, gallery2, gallery4, gallery5, gallery9, gallery6, gallery7, gallery8, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15]

    return (
        <div className="lg:pt-64 pt-44">
            <Helmet>
                <title>Gallery - Dhaka College Science Club</title>
            </Helmet>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 my-container'>
                {
                    gallery.map(img => <img data-aos="fade-up" data-aos-duration="1000" key={img} className='w-full' src={img}></img>)
                }
            </div>
            <button className="btn-pri block mx-auto my-20">Load More</button>
        </div>
    );
};

export default Gallery;