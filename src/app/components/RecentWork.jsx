import Image from "next/image";
import WorkImg from "../../../public/images/work-img-1.png";
import WorkImg1 from "../../../public/images/work-img-2.png";
import WorkImg2 from "../../../public/images/work-img-3.png";


export default function RecentWork(){
    return(
        <main className="container mx-auto">
            <div className="flex items-center justify-center gap-[24px] mb-[72px] w-full overflow-hidden max-sm:gap-2">
                <Image className="w-full" src={WorkImg} alt={'img'}/>
                <Image className="w-full" src={WorkImg1} alt={'img'}/>
                <Image className="w-full" src={WorkImg2} alt={'img'}/>
            </div>
            <button className="mx-auto btn-style">
                Book a Call with Namya
            </button>
        </main>
    )
}
