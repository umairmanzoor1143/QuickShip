import Image from "next/image";
import Girl from "../../../public/images/faq-girl.png";
import Accordion from "@/app/components/Accordion";

export default function SmashButton(){

    return(
        <main className="container small mx-auto text-center pb-[136px] ">
            <h1 className="text-[47px] leading-[66px] font-bold mb-[32px]">I guess all I'm trying to say is you should smash the damn button.</h1>
            <button className="btn-style w-full !h-[112px] !text-[30px] !font-bold !leading-[36px] mb-4">Smash the damn button</button>
            <p className="text-[15px] leading-[24px] text-[#A3A3A3]">Be quick! Spots are almost gone for June.</p>
        </main>
    )
}
