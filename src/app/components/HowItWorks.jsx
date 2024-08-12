import Image from "next/image";
import Smily from "../../../public/images/icons/smily-icon.svg";
import Lines from "../../../public/images/icons/lines-zigzag.svg";
import Simg from "../../../public/images/icons/s-icon.svg";
import Bolt from "../../../public/images/icons/bolt-icon.svg";
import Slack from "../../../public/images/icons/slack-icon.svg";
import Figma from "../../../public/images/icons/figma-icon.svg";
import Tools from "@/app/components/Tools";
import Pricing from "@/app/components/Pricing";
import Features from "@/app/components/Features";
import Reviews from "@/app/components/Reviews";
import FAQ from "@/app/components/FAQ";


export default function HowItWorks(){
    return(
        <main className="container mx-auto bg-[#0c0c0c] liner-gradient-2 text-center p-[40px] mt-[84px] mb-[148px] max-lg:p-4">
            <div>
                <p className="text-[15px] leading-[24px] font-normal text-[#ffffff80] mb-2 ">HOW IT WORKS</p>
                <div className="relative  flex items-center justify-center gap-5">
                    <h1 className="text-[47px] leading-[66px] font-bold mb-[20px]">Supafast,Supaeasy</h1>
                    <Image className="" src={Smily} alt={'img'}/>
                </div>
                <Image className="mx-auto mb-[152px] max-sm:mb-[120px]" src={Lines} alt={'img'}/>
                <div className="flex items-center justify-center gap-[24px] mb-[24px] max-sm:flex-col max-md:gap-4">
                    <div className="icon-one relative text-center p-[24px] max-sm:after:hidden max-sm:mb-[60px]">
                        <h2 className="text-[24px] font-bold leading-[32px] mb-2">Market Research</h2>
                        <p className="text-[15px] leading-[24px] text-[#A3A3A3]">Dive deep into your market, understand your competition, and discover customer needs.</p>
                    </div>
                    <div className="icon-two relative text-center p-[24px] max-sm:after:hidden max-sm:mb-[60px]">
                        <h2 className="text-[24px] font-bold leading-[32px] mb-2">Copy & Design</h2>
                        <p className="text-[15px] leading-[24px] text-[#A3A3A3]">Develop compelling copy and visuals that make your brand and website stand out. </p>
                    </div>
                    <div className="icon-three relative text-center p-[24px]">
                        <h2 className="text-[24px] font-bold leading-[32px] mb-2">Launch & Scale</h2>
                        <p className="text-[15px] leading-[24px] text-[#A3A3A3]">Get your site live and grow your business with ongoing support and optimization.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-6 mt-8">
                    <div className="flex items-center gap-2">
                        <p className="max-sm:hidden">Secured payments via Stripe</p>
                        <Image src={Simg} alt={'img'}/>
                    </div>
                    <Image src={Bolt} alt={'img'}/>
                    <div className="flex items-center gap-2">
                        <p className="max-sm:hidden">Communication via Slack</p>
                        <Image src={Slack} alt={'img'}/>
                    </div>
                    <Image src={Bolt} alt={'img'}/>
                    <div className="flex items-center gap-2">
                        <p className="max-sm:hidden">Delivered in Figma</p>
                        <Image src={Figma} alt={'img'}/>
                    </div>
                </div>
            </div>
            <Features/>
            <Tools/>
            <Pricing/>
            <Reviews/>
            <FAQ/>
        </main>
    )
}
