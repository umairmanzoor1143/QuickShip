import Image from "next/image";
import Figma from "../../../public/images/icons/figma-dark-icon.svg";
import NIcon from "../../../public/images/icons/n-icon.svg";
import Waves from "../../../public/images/icons/waves-icon.svg";
import Rectangle from "../../../public/images/icons/rectangle-icon.svg";
import MIcon from "../../../public/images/icons/rectange-icon-2.svg";
import Voltage from "../../../public/images/icons/bolt-white.svg";
import Lock from "../../../public/images/icons/lock-icon.svg";


export default function Pricing() {
    return (
        <main className="container mx-auto text-center pt-[96px] mb-[40px]">
            <p className="text-[15px] leading-[24px] font-normal text-[#ffffff80] mb-2 ">PRICING</p>
            <h1 className="text-[47px] leading-[66px] font-bold mb-[64px]">Ready to supafast your conversions?</h1>
            <div className="flex items-center justify-center gap-6 mb-6">
                <div className="bg-[#131313] w-[400px] rounded-[24px] text-left px-10 pt-10 pb-14">
                    <h3 className="text-[18px] leading-[32px] font-medium mb-[20px]">One-off</h3>
                    <h2 className="text-[34px] leading-[40px] font-extrabold mb-[6px]">$2497</h2>
                    <p className="text-[12px] leading-normal mb-[22px] text-[#ffffff80]">Launch your dream site in 5 days!</p>
                    <p className="text-[15px] leading-[24px] mb-[24px]">Perfect for single, high-impact, conversion- focused landing page.</p>
                    <button className="w-full h-[54px] rounded-[16px] border border-[#E5E7EB] text-[18px] font-bold duration-2000 transition-all hover:bg-white hover:text-black mb-10 ">Get started today</button>
                    <div className="">
                        <p className="text-[18px] leading-[32px] font-semibold mb-[8px]">Services:</p>
                        <ul className="mb-4">
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>Branding</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>Copywriting</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>Creative Strategy</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>One-page Landing Page</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>Custom Graphics / Illustrations</li>
                            <li className="flex items-center gap-2 py-1 mb-1 text-[#ffffff80]"><Image src={Lock} alt={'img'}/>Pitch Decks</li>
                            <li className="flex items-center gap-2 py-1 mb-1 text-[#ffffff80]"><Image src={Lock} alt={'img'}/>Development</li>
                            <li className="flex items-center gap-2 py-1 mb-1 text-[#ffffff80]"><Image src={Lock} alt={'img'}/>Web/Mobile Apps</li>
                            <li className="flex items-center gap-2 py-1 mb-1 text-[#ffffff80]"><Image src={Lock} alt={'img'}/>Multipage Websites</li>
                            <li className="flex items-center gap-2 py-1 mb-1 text-[#ffffff80]"><Image src={Lock} alt={'img'}/>Social Media Assets</li>
                        </ul>
                        <p className="text-[18px] leading-[32px] font-semibold mb-[8px]">Features:</p>
                        <ul className="mb-4">
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>2x revisions</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>24/5 Support</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>Figma file delivery</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>Updates every 48 hours</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>Async communication via Slack</li>
                            <li className="flex items-center gap-2 py-1 mb-1 text-[#ffffff80]"><Image src={Lock} alt={'img'}/>Full Team access</li>
                            <li className="flex items-center gap-2 py-1 mb-1 text-[#ffffff80]"><Image src={Lock} alt={'img'}/>Bi-Weekly progress meetings</li>
                            <li className="flex items-center gap-2 py-1 mb-1 text-[#ffffff80]"><Image src={Lock} alt={'img'}/>Unlimited brands / users</li>
                            <li className="flex items-center gap-2 py-1 mb-1 text-[#ffffff80]"><Image src={Lock} alt={'img'}/>Expert project management</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-[#131313] w-[400px] rounded-[24px] text-left px-10 pt-10 pb-14">
                    <div className="flex items-center justify-between">
                        <h3 className="text-[18px] leading-[32px] font-medium mb-[20px]">Retainer</h3>
                        <p className="w-[84px] h-[24px] rounded-full bg-white flex items-center justify-center text-[11px] leading-[16px] font-bold text-black mb-[20px]">BEST VALUE</p>
                    </div>
                    <h2 className="text-[34px] leading-[40px] font-extrabold mb-[6px]">$4197/mo</h2>
                    <p className="text-[12px] leading-normal mb-[22px] text-[#ffffff80]">Pause / Cancel anytime</p>
                    <p className="text-[15px] leading-[24px] font-medium mb-[24px]">Ideal for those who need an ongoing design support.</p>
                    <button className="w-full h-[54px] rounded-[16px] border border-[#E5E7EB] text-[18px] font-bold duration-2000 transition-all hover:bg-white hover:text-black mb-10 ">Get started today</button>
                    <div className="">
                        <p className="text-[18px] leading-[32px] font-semibold mb-[8px]">Services:</p>
                        <ul className="mb-4">
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>Branding</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>Copywriting</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>Creative Strategy</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>One-page Landing Page</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>Custom Graphics / Illustrations</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>Pitch Decks</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>Development</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>Web/Mobile Apps</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>Multipage Websites</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>Social Media Assets</li>
                        </ul>
                        <p className="text-[18px] leading-[32px] font-semibold mb-[8px]">Features:</p>
                        <ul className="mb-4">
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>2x revisions</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>24/5 Support</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>Figma file delivery</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>Updates every 48 hours</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>Async communication via Slack</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>Full Team access</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>Bi-Weekly progress meetings</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>Unlimited brands / users</li>
                            <li className="flex items-center gap-2 py-1 mb-1"><Image src={Voltage} alt={'img'}/>Expert project management</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="text-[15px] leading-[24px] font-normal mb-[10px] ">After your one-off project, upgrade to our Monthly Retainer within 3 months for just $1,700 more.</p>
            <p className="text-[15px] leading-[24px] font-bold underline ">Upgrade now, save $2497</p>

        </main>
    )
}
