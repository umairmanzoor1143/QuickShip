import Image from "next/image";
import QstMark from "../../../public/images/icons/question-mark.svg";
import Smile from "../../../public/images/icons/small-icon.svg";
import CircleArrow from "../../../public/images/icons/circle-arrows.svg";
import GirlImage from "../../../public/images/icons/girl-image.png";


export default function Solution(){
    return(
        <main className="container mx-auto liner-gradient-2 text-center p-[40px] mt-[84px] mb-[148px]">
            <h1 className="text-[47px] leading-[66px] font-bold mb-[20px]">The solution: Conversion-focused  <br/> creativity</h1>
            <p className="text-[19px] leading-[28px] font-light text-[#A3A3A3]">Designs that captivate, copy that resonates, and development that converts. Moving <br/>beyond surface metrics to emotional impact that turns browsers into buyers.</p>
            <div className="flex items-center justify-center gap-[24px] mt-[60px] mb-[24px] max-sm:flex-col max-md:gap-4">
                <div className="text-center p-[24px] max-md:p-2">
                    <Image className="mx-auto mb-[24px]" src={QstMark} alt={'img'}/>
                    <h2 className="text-[24px] font-bold leading-[32px] mb-2">Compelling Copy</h2>
                    <p className="text-[15px] leading-[24px] text-[#A3A3A3]">Crafting words that engage, resonate, and ultimately convince your audience to take action.</p>
                </div>
                <div className="text-center p-[24px] max-md:p-2">
                    <Image className="mx-auto mb-[24px]" src={Smile} alt={'img'}/>
                    <h2 className="text-[24px] font-bold leading-[32px] mb-2">Top-Tier Branding</h2>
                    <p className="text-[15px] leading-[24px] text-[#A3A3A3]">Design a brand identity to standout in a crowded marketplace. </p>
                </div>
                <div className="text-center p-[24px] max-md:p-2">
                    <Image className="mx-auto mb-[24px]" src={CircleArrow} alt={'img'}/>
                    <h2 className="text-[24px] font-bold leading-[32px] mb-2">Conversion-Focused Design</h2>
                    <p className="text-[15px] leading-[24px] text-[#A3A3A3]">Creating visually appealing designs that are optimized for maximum conversion rates.</p>
                </div>
            </div>
            <button className="liner-gradient !min-w-[290px] !h-[64px] mx-auto btn-style mb-[16px]">
                <Image src={GirlImage} alt={'image'}/>
                Book a Call with Namya
            </button>
        </main>
    )
}
