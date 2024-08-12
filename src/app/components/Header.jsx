"use client"
import Image from "next/image";
import Logo from "../../../public/images/icons/main-logo.svg"
import Hamburger from "../../../public/images/icons/hamburger.svg"
import {useState} from "react";
export default function Header(){
    const [isActive, setIsActive] = useState(false);
    const handleToggle = () => {
        setIsActive(!isActive);
    };
    return (
        <main>
            <header className="w-full mx-auto bg-black">
                <div className="w-full bg-white p-[8px] flex items-center justify-center">
                    <p className="text-[15px] font-semibold leading-normal text-black m-0">Launch Your Dream Site in 5 Days!</p>
                    <a className="text-[15px] font-bold leading-normal text-black m-0" href="#">Learn More</a>
                </div>
                <div className="w-full flex items-center justify-between py-[20px] px-[32px] max-md:justify-center max-lg:px-[16px]">
                    <div className={`${isActive ? 'block' : 'hidden'} md:block max-md:fixed max-md:left-0 max-md:top-0 max-md:w-full max-md:h-full max-md:bg-black z-20`}>
                        <div className="nav-menu flex items-center justify-start gap-[8px] text-white text-[16px] font-light leading-[28px] max-md:flex-col max-md:pt-[55px] max-lg:gap-0">
                            <a href="#" onClick={handleToggle} className="py-[6px] px-[12px] ">X</a>
                            <a href="#" className="py-[6px] px-[12px] ">How it Works</a>
                            <a href="#" className="py-[6px] px-[12px]">Pricing</a>
                            <a href="#" className="py-[6px] px-[12px]">Work</a>
                            <a href="#" className="py-[6px] px-[12px]">FAQ</a>
                        </div>
                    </div>
                    <div className="">
                        <Image src={Logo} alt={"Image"}></Image>
                    </div>
                    <div className="flex items-center justify-end p-[13px] rounded-[12px] bg-[#131313] border border-[#5a5a5a80] gap-[8px] text-[16px] font-light leading-[28px] text-white max-md:hidden">
                        <p>Press</p>
                        <span className="font-bold text-[18px] w-[30px] h-[28px] flex items-center justify-center rounded-[5px] bg-[#ffffff1f]">B</span>
                        <p>to book a call</p>
                    </div>
                </div>
                <button className="hidden max-md:block absolute right-4 z-10 top-12" onClick={handleToggle}><Image src={Hamburger} alt={'ham'}/></button>
            </header>
        </main>
    )
}
