import Image from "next/image";
import Girl from "../../../public/images/faq-girl.png";
import Accordion from "@/app/components/Accordion";

export default function FAQ({title, content}){
    const accordions = [
        {
            title: 'Who\'s behind Supafast',
            content: 'Surprising fact: Supafast started as a one-person agency and has grown into a remote, global team. Collaborate directly with Namya, the founder and design engineer, and our talented professionals worldwide. We\'ve worked with clients from 15+ countries, including Y Combinator startups, early-stage ventures, angel investors, and creators.',
        },
        {
            title: 'How quickly will I receive my project?',
            content: 'True to our name, we\'re Supafast! Typically, most requests are fulfilled in just 48 hours or less. However, for more complex requests, the turnaround time may be a bit longer. Rest assured, we\'ll keep you informed every step of the way.',
        },
        ];

    return(
        <main className="container mx-auto text-center">
            <h1 className="text-[47px] leading-[66px] font-bold mb-[60px]">Questions? Answers.</h1>
            <div className="flex items-center justify-between gap-20">
                <div className="w-full">
                    {accordions.map((accordion, index) => (
                        <Accordion
                            key={index}
                            title={accordion.title}
                            content={accordion.content}
                        />
                    ))}
                </div>
                <div className="bg-faq-img text-center py-10 px-[76px]">
                    <Image className={'mx-auto mb-5'} src={Girl} alt={'girl'}/>
                    <h3 className={'mb-5'}>Have more questions? Book a FREE intro call.</h3>
                    <button className="btn-style ">Book a Call</button>
                </div>
            </div>
        </main>
    )
}
