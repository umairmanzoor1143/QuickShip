import Image from "next/image";
import Thumb from "../../../public/images/icons/thumbs-up.svg";
import Diamond from "../../../public/images/icons/diamond.svg";
import Dollar from "../../../public/images/icons/dollar.svg";


export default function Challenges(){
    return(
        <main className="container mx-auto text-center mt-[84px] mb-[128px]">
            <h1 className="text-[47px] leading-[66px] font-bold mb-[20px]">You don't have a traffic problem... <br/> you're failing to convert that traffic <br/> into leads.</h1>
            <p className="text-[19px] leading-[28px] font-light text-[#A3A3A3]">The REAL challenge is turning clicks into conversions.</p>
            <div className="flex items-center justify-center gap-[24px] mt-[60px] max-sm:flex-col max-md:gap-4">
                <div className="text-center p-[24px] max-md:p-2">
                    <Image className="mx-auto mb-[24px]" src={Thumb} alt={'img'}/>
                    <h2 className="text-[24px] font-bold leading-[32px] mb-2">Lost in the Competition</h2>
                    <p className="text-[15px] leading-[24px] text-[#A3A3A3]">In a sea of competitors, it's hard to make your brand stand out when everyone is fighting for attention. </p>
                </div>
                <div className="text-center p-[24px] max-md:p-2">
                    <Image className="mx-auto mb-[24px]" src={Diamond} alt={'img'}/>
                    <h2 className="text-[24px] font-bold leading-[32px] mb-2">Leads not Following</h2>
                    <p className="text-[15px] leading-[24px] text-[#A3A3A3]">Struggling to turn site visitors into leads? Your  strategies might be missing the mark with your target audience. </p>
                </div>
                <div className="text-center p-[24px] max-md:p-2">
                    <Image className="mx-auto mb-[24px]" src={Dollar} alt={'img'}/>
                    <h2 className="text-[24px] font-bold leading-[32px] mb-2">Customer Conversion <br/>Challenges</h2>
                    <p className="text-[15px] leading-[24px] text-[#A3A3A3]">Getting clicks is just the start. The real challenge lies in converting those clicks into loyal customers.</p>
                </div>
            </div>
        </main>
    )
}
