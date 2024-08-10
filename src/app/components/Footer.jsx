import Image from "next/image";
import FooterLogo from "../../../public/images/icons/footer-logo.svg";
import XIcon from "../../../public/images/icons/x-ixon.svg";
import LinkedIcon from "../../../public/images/icons/linkedin-icon.svg";
import AIcon from "../../../public/images/icons/a-icon.svg";

export default function Footer(){

    return(
        <main className="container mx-auto text-center pt-10 px-[30px] pb-[90px] border-t border-[#ffffff1a]">
            <div className="flex items-center justify-between">
                <div>
                    <Image className={'mb-2'} src={FooterLogo} alt={'img'}/>
                    <p className="text-[12px] leading-normal text-[#A3A3A3]">© Supafast 2024. All rights reserved.</p>
                </div>
                <div className="flex items-center justify-end gap-6">
                    <Image src={XIcon} alt={'img'}/>
                    <Image src={LinkedIcon} alt={'img'}/>
                    <Image src={AIcon} alt={'img'}/>
                </div>
            </div>
        </main>
    )
}
