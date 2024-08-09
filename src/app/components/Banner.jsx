import Image from "next/image";
import Stars from "../../../public/images/icons/star-rating-yellow.svg"
import Profile from "../../../public/images/icons/profiles-five-image.png"
import GirlImage from "../../../public/images/icons/girl-image.png"
import Logo1 from "../../../public/images/icons/banner-logo-1.svg"
import Logo2 from "../../../public/images/icons/banner-logo-2.svg"
import Logo3 from "../../../public/images/icons/banner-logo-3.svg"
import Logo4 from "../../../public/images/icons/banner-logo-4.svg"
import Logo5 from "../../../public/images/icons/banner-logo-5.svg"
import Logo6 from "../../../public/images/icons/banner-logo-6.svg"
import WorkImg from "../../../public/images/icons/work-img-1.png"
import WorkImg1 from "../../../public/images/icons/work-img-2.png"
import WorkImg2 from "../../../public/images/icons/work-img-3.png"

export default function Banner(){
    return (
        <main className="container mx-auto bg-black text-center pt-[68px] pb-[20px] mb-[120px]">
            <div className="flex items-center justify-center gap-[6px] mb-[8px]">
                <Image src={Profile} alt={'image'}/>
                <div>
                    <Image className="mb-[4px]" src={Stars} alt={'stars'}/>
                    <p className="text-[16px] leading-[20px] text-white">loved by founders worldwide</p>
                </div>
            </div>
            <h1 className="text-[79px] leading-[100px] font-bold mb-[16px]">Web Design that <br/> double leads.</h1>
            <p className="text-[20px] leading-[28px] font-light text-[#A3A3A3] mb-[32px] ">Design, copy, and development engineered to <span className="text-white font-medium">turn browsers into <br/> buyers </span> and <span className="text-white font-medium">drive sales on autopilot.</span> </p>
            <button className="liner-gradient !w-[290px] !h-[64px] mx-auto btn-style mb-[16px]">
                <Image src={GirlImage} alt={'image'}/>
                Book a Call with Namya
            </button>
            <p className="text-[13px] italic leading-normal text-[#A3A3A3] mb-[32px]">No obligation. No subscription required.</p>
            <div className="flex items-center justify-center gap-[28px]">
                <Image src={Logo1} alt={'logo'}/>
                <Image src={Logo2} alt={'logo'}/>
                <Image src={Logo3} alt={'logo'}/>
                <Image src={Logo4} alt={'logo'}/>
                <Image src={Logo5} alt={'logo'}/>
                <Image src={Logo6} alt={'logo'}/>
            </div>
        </main>
    )
}
