import Image from "next/image";
import Figma from "../../../public/images/icons/figma-dark-icon.svg";
import NIcon from "../../../public/images/icons/n-icon.svg";
import Waves from "../../../public/images/icons/waves-icon.svg";
import Rectangle from "../../../public/images/icons/rectangle-icon.svg";
import MIcon from "../../../public/images/icons/rectange-icon-2.svg";


export default function Tools(){
    return(
        <main className="container mx-auto text-center">
            <p className="text-[15px] leading-[24px] font-normal text-[#ffffff80] mb-2">TOOLS</p>
            <div className="flex items-center justify-center gap-[60px] max-md:flex-wrap max-sm:gap-4">
                <Image src={Figma} alt={'img'}/>
                <Image src={NIcon} alt={'img'}/>
                <Image src={Waves} alt={'img'}/>
                <Image src={Rectangle} alt={'img'}/>
                <Image src={MIcon} alt={'img'}/>
            </div>
        </main>
    )
}
