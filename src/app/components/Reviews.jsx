import Image from "next/image";
import Heart from "../../../public/images/icons/heart-icon.svg";
import Stars from "../../../public/images/icons/star-rating-small.svg";
import StarsLG from "../../../public/images/icons/star-rating-large.svg";
import Play from "../../../public/images/icons/play-icon.svg";
import ProfileIcon from "../../../public/images/small-profile-review.svg";
import Profile1 from "../../../public/images/profile-one.png";
import Profile2 from "../../../public/images/profile-two.png";
import Profile3 from "../../../public/images/profile-three.png";
import Profile4 from "../../../public/images/profile-four.png";

export default function Reviews() {
    return (
        <main className="w-full mx-auto text-center pt-[96px] mb-[110px]">
            <h1 className="flex items-center justify-center gap-4 text-[47px] leading-[66px] font-bold mb-[48px]">Loved <Image src={Heart} alt={'img'}/> by businesses worldwide</h1>
            <div className="flex items-start justify-center gap-3">
                <div className="flex items-center flex-col gap-3">
                    <div className="w-full h-full relative">
                        <Image className="rounded-[8px] w-full" src={Profile1} alt={'img'}/>
                        <div className="absolute bottom-4 w-custom-calc left-4 flex items-center justify-between">
                            <div className="text-left">
                                <Image src={Stars} alt={'img'}/>
                                <h3 className="text-[20px] leading-[28px]">Harsh Patel</h3>
                                <h3 className="text-[14px] leading-[20px]">Founder at Macro</h3>
                            </div>
                            <Image src={Play} alt={'img'}/>
                        </div>
                    </div>
                    <div className="w-full h-full relative">
                        <Image className="rounded-[8px] w-full" src={Profile2} alt={'img'}/>
                        <div className="absolute bottom-4 w-custom-calc left-4 flex items-center justify-between">
                            <div className="text-left">
                                <Image src={Stars} alt={'img'}/>
                                <h3 className="text-[20px] leading-[28px]">Lyndon Jackson</h3>
                                <h3 className="text-[14px] leading-[20px]">Founder at Pezmix</h3>
                            </div>
                            <Image src={Play} alt={'img'}/>
                        </div>
                    </div>
                    <div className="w-full h-full bg-[#131313] rounded-[8px] p-[17px]">
                        <div className="flex items-center justify-start text-left gap-4 w-full mb-3">
                            <Image src={ProfileIcon} alt={'img'}/>
                            <div>
                                <p>Ben</p>
                                <p>Founder at Cinematic Software</p>
                            </div>
                        </div>
                        <Image className="mb-3" src={StarsLG} alt={'img'}/>
                        <p className="text-left mb-3">Supafast was great to work with! Fast and efficient, but also high quality! I didn’t love the initial design draft, but they completely reworked the design until I was happy and satisfied. 10/10, will work with them again.</p>
                    </div>
                    <div className="w-full h-full bg-[#131313] rounded-[8px] p-[17px]">
                        <div className="flex items-center justify-start text-left gap-4 w-full mb-3">
                            <Image src={ProfileIcon} alt={'img'}/>
                            <div>
                                <p>Ben</p>
                                <p>Founder at Cinematic Software</p>
                            </div>
                        </div>
                        <Image className="mb-3" src={StarsLG} alt={'img'}/>
                        <p className="text-left mb-3">Supafast was great to work with! Fast and efficient, but also high quality! I didn’t love the initial design draft, but they completely reworked the design until I was happy and satisfied. 10/10, will work with them again.</p>
                    </div>
                    <div className="w-full h-full bg-[#131313] rounded-[8px] p-[17px]">
                        <div className="flex items-center justify-start text-left gap-4 w-full mb-3">
                            <Image src={ProfileIcon} alt={'img'}/>
                            <div>
                                <p>Ben</p>
                                <p>Founder at Cinematic Software</p>
                            </div>
                        </div>
                        <Image className="mb-3" src={StarsLG} alt={'img'}/>
                        <p className="text-left mb-3">Supafast was great to work with! Fast and efficient, but also high quality! I didn’t love the initial design draft, but they completely reworked the design until I was happy and satisfied. 10/10, will work with them again.</p>
                    </div>
                    <div className="w-full h-full bg-[#131313] rounded-[8px] p-[17px]">
                        <div className="flex items-center justify-start text-left gap-4 w-full mb-3">
                            <Image src={ProfileIcon} alt={'img'}/>
                            <div>
                                <p>Ben</p>
                                <p>Founder at Cinematic Software</p>
                            </div>
                        </div>
                        <Image className="mb-3" src={StarsLG} alt={'img'}/>
                        <p className="text-left mb-3">Supafast was great to work with! Fast and efficient, but also high quality! I didn’t love the initial design draft, but they completely reworked the design until I was happy and satisfied. 10/10, will work with them again.</p>
                    </div>
                </div>
                <div className="flex items-center flex-col gap-3">
                    <div className="w-full h-full relative">
                        <Image className="rounded-[8px] w-full" src={Profile3} alt={'img'}/>
                        <div className="absolute bottom-4 w-custom-calc left-4 flex items-center justify-between">
                            <div className="text-left">
                                <Image src={Stars} alt={'img'}/>
                                <h3 className="text-[20px] leading-[28px]">Jules Ioannidis</h3>
                                <h3 className="text-[14px] leading-[20px]">Co-founder at Gracenote</h3>
                            </div>
                            <Image src={Play} alt={'img'}/>
                        </div>
                    </div>
                    <div className="w-full h-full bg-[#131313] rounded-[8px] p-[17px]">
                        <div className="flex items-center justify-start text-left gap-4 w-full mb-3">
                            <Image src={ProfileIcon} alt={'img'}/>
                            <div>
                                <p>Ben</p>
                                <p>Founder at Cinematic Software</p>
                            </div>
                        </div>
                        <Image className="mb-3" src={StarsLG} alt={'img'}/>
                        <p className="text-left mb-3">Supafast was great to work with! Fast and efficient, but also high quality! I didn’t love the initial design draft, but they completely reworked the design until I was happy and satisfied. 10/10, will work with them again.</p>
                    </div>
                    <div className="w-full h-full bg-[#131313] rounded-[8px] p-[17px]">
                        <div className="flex items-center justify-start text-left gap-4 w-full mb-3">
                            <Image src={ProfileIcon} alt={'img'}/>
                            <div>
                                <p>Ben</p>
                                <p>Founder at Cinematic Software</p>
                            </div>
                        </div>
                        <Image className="mb-3" src={StarsLG} alt={'img'}/>
                        <p className="text-left mb-3">Supafast was great to work with! Fast and efficient, but also high quality! I didn’t love the initial design draft, but they completely reworked the design until I was happy and satisfied. 10/10, will work with them again.</p>
                    </div>
                    <div className="w-full h-full bg-[#131313] rounded-[8px] p-[17px]">
                        <div className="flex items-center justify-start text-left gap-4 w-full mb-3">
                            <Image src={ProfileIcon} alt={'img'}/>
                            <div>
                                <p>Ben</p>
                                <p>Founder at Cinematic Software</p>
                            </div>
                        </div>
                        <Image className="mb-3" src={StarsLG} alt={'img'}/>
                        <p className="text-left mb-3">Supafast was great to work with! Fast and efficient, but also high quality! I didn’t love the initial design draft, but they completely reworked the design until I was happy and satisfied. 10/10, will work with them again.</p>
                    </div>
                    <div className="w-full h-full bg-[#131313] rounded-[8px] p-[17px]">
                        <div className="flex items-center justify-start text-left gap-4 w-full mb-3">
                            <Image src={ProfileIcon} alt={'img'}/>
                            <div>
                                <p>Ben</p>
                                <p>Founder at Cinematic Software</p>
                            </div>
                        </div>
                        <Image className="mb-3" src={StarsLG} alt={'img'}/>
                        <p className="text-left mb-3">Supafast was great to work with! Fast and efficient, but also high quality! I didn’t love the initial design draft, but they completely reworked the design until I was happy and satisfied. 10/10, will work with them again.</p>
                    </div>
                </div>
                <div className="flex items-center flex-col gap-3">
                    <div className="w-full h-full relative">
                        <Image className="rounded-[8px] w-full" src={Profile4} alt={'img'}/>
                        <div className="absolute bottom-4 w-custom-calc left-4 flex items-center justify-between">
                            <div className="text-left">
                                <Image src={Stars} alt={'img'}/>
                                <h3 className="text-[20px] leading-[28px]">Carson Suite</h3>
                                <h3 className="text-[14px] leading-[20px]">Founder at InvolvChat</h3>
                            </div>
                            <Image src={Play} alt={'img'}/>
                        </div>
                    </div>
                    <div className="w-full h-full bg-[#131313] rounded-[8px] p-[17px]">
                        <div className="flex items-center justify-start text-left gap-4 w-full mb-3">
                            <Image src={ProfileIcon} alt={'img'}/>
                            <div>
                                <p>Ben</p>
                                <p>Founder at Cinematic Software</p>
                            </div>
                        </div>
                        <Image className="mb-3" src={StarsLG} alt={'img'}/>
                        <p className="text-left mb-3">Supafast was great to work with! Fast and efficient, but also high quality! I didn’t love the initial design draft, but they completely reworked the design until I was happy and satisfied. 10/10, will work with them again.</p>
                    </div>
                    <div className="w-full h-full bg-[#131313] rounded-[8px] p-[17px]">
                        <div className="flex items-center justify-start text-left gap-4 w-full mb-3">
                            <Image src={ProfileIcon} alt={'img'}/>
                            <div>
                                <p>Ben</p>
                                <p>Founder at Cinematic Software</p>
                            </div>
                        </div>
                        <Image className="mb-3" src={StarsLG} alt={'img'}/>
                        <p className="text-left mb-3">Supafast was great to work with! Fast and efficient, but also high quality! I didn’t love the initial design draft, but they completely reworked the design until I was happy and satisfied. 10/10, will work with them again.</p>
                    </div>
                    <div className="w-full h-full bg-[#131313] rounded-[8px] p-[17px]">
                        <div className="flex items-center justify-start text-left gap-4 w-full mb-3">
                            <Image src={ProfileIcon} alt={'img'}/>
                            <div>
                                <p>Ben</p>
                                <p>Founder at Cinematic Software</p>
                            </div>
                        </div>
                        <Image className="mb-3" src={StarsLG} alt={'img'}/>
                        <p className="text-left mb-3">Supafast was great to work with! Fast and efficient, but also high quality! I didn’t love the initial design draft, but they completely reworked the design until I was happy and satisfied. 10/10, will work with them again.</p>
                    </div>
                    <div className="w-full h-full bg-[#131313] rounded-[8px] p-[17px]">
                        <div className="flex items-center justify-start text-left gap-4 w-full mb-3">
                            <Image src={ProfileIcon} alt={'img'}/>
                            <div>
                                <p>Ben</p>
                                <p>Founder at Cinematic Software</p>
                            </div>
                        </div>
                        <Image className="mb-3" src={StarsLG} alt={'img'}/>
                        <p className="text-left mb-3">Supafast was great to work with! Fast and efficient, but also high quality! I didn’t love the initial design draft, but they completely reworked the design until I was happy and satisfied. 10/10, will work with them again.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
