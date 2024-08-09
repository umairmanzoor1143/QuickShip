import Image from "next/image";
import Logo from "../../../public/images/icons/main-logo.svg"
export default function Header(){
    return (
        <main>
            <header className="w-full mx-auto bg-black">
                <div className="w-full bg-white p-[8px] flex items-center justify-center">
                    <p className="text-[15px] font-semibold leading-normal text-black m-0">Launch Your Dream Site in 5 Days!</p>
                    <a className="text-[15px] font-bold leading-normal text-black m-0" href="#">Learn More</a>
                </div>
                <div className="w-full flex items-center justify-between py-[20px] px-[32px]">
                    <div className="flex items-center justify-start gap-[8px] text-white text-[16px] font-light leading-[28px]">
                        <a href="#" className="py-[6px] px-[12px] ">How it Works</a>
                        <a href="#" className="py-[6px] px-[12px]">Pricing</a>
                        <a href="#" className="py-[6px] px-[12px]">Work</a>
                        <a href="#" className="py-[6px] px-[12px]">FAQ</a>
                    </div>
                    <div className="">
                        <Image src={Logo} alt={"Image"}></Image>
                    </div>
                    <div className="flex items-center justify-end p-[13px] rounded-[12px] bg-[#131313] border border-[#5a5a5a80] gap-[8px] text-[16px] font-light leading-[28px] text-white">
                        <p>Press</p>
                        <span className="font-bold text-[18px] w-[30px] h-[28px] flex items-center justify-center rounded-[5px] bg-[#ffffff1f]">B</span>
                        <p>to book a call</p>
                    </div>
                </div>
            </header>
        </main>
    )
}
