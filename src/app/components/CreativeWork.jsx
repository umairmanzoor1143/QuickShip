import Image from "next/image";
import Creative1 from "../../../public/images/creative-work-1.png";
import Creative2 from "../../../public/images/creative-work-2.png";
import Creative3 from "../../../public/images/creative-work-3.png";


export default function CreativeWork(){
    return(
        <main className="container mx-auto ">
            <h1 className="text-[47px] text-center leading-[66px] font-bold mb-[20px]">Creative work that drives crazy results <br/> for our clients.</h1>
            <div className="flex items-center justify-center gap-[24px] mb-[64px] w-full overflow-hidden">
                <Image className="w-full" src={Creative1} alt={'img'}/>
                <Image className="w-full" src={Creative2} alt={'img'}/>
                <Image className="w-full" src={Creative3} alt={'img'}/>
            </div>
            <button className="mx-auto btn-style mb-[8px]">
                Claim your FREE 15-min strategy session
            </button>
            <p className="text-[14px] text-center leading-[20px] text-[#A3A3A3]">Be quick! Spots are almost gone for June.</p>
        </main>
    )
}
