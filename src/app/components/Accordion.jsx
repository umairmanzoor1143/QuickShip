"use client"
import {useState} from "react";

export default function Accordion({title, content}){
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return(
        <main className="container mx-auto text-center">
            <div className="border-b border-[#ffffff1a] pb-5 mb-5">
                <button
                    onClick={toggleAccordion}
                    className="w-full flex justify-between items-center mb-[14px] focus:outline-none"
                >
                    <h2 className="text-lg font-semibold text-left">{title}</h2>
                    <span className="text-[28px]">{isOpen ? '-' : '+'}</span>
                </button>
                {isOpen && (
                    <div className="text-left text-[#ffffff80]">
                        <p>{content}</p>
                    </div>
                )}
            </div>
        </main>
    )
}
