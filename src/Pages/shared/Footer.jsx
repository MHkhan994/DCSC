import SectionTop from "../../components/SectionTop";

import { FaFacebook } from 'react-icons/fa6'
import { RxInstagramLogo } from 'react-icons/rx'
import { BiLogoGoogle } from 'react-icons/bi'
import { MdWhatsapp } from 'react-icons/md'
import { IoMdMail } from 'react-icons/io'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#000D37] pt-20 lg:pt-40 pb-6 lg:pb-10">
            <div className="my-container">
                <img src="./logo.png" className="mx-auto pb-4" alt="foooter logo" />
                <div className='my-container text-center text-white'>
                    <h1 className='font-lora font-bold text-5xl'>Dhaka College Science Club</h1>
                    <p className='lg:py-10 py-6 lg:px-[20%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</p>
                </div>
                <div className="flex text-white gap-5 text-2xl justify-center pb-10">
                    <FaFacebook></FaFacebook>
                    <RxInstagramLogo></RxInstagramLogo>
                    <BiLogoGoogle></BiLogoGoogle>
                    <MdWhatsapp></MdWhatsapp>
                    <IoMdMail></IoMdMail>
                </div>
                <hr />
                <h4 className="font-normal pt-10 pb-5 text-lg text-white text-center">© Copyright 2023, All Rights Reserved by DCSC</h4>
                <p className="font-normal text-lg text-white text-center">Built By <Link target="_blank" to="https://www.theyolostudio.com/" className="text-[#1CC4CF]">The YOLO Studio</Link></p>
            </div>
        </div>
    );
};

export default Footer;