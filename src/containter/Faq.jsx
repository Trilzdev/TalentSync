import React, { useState } from 'react';
import plus from '../assets/plus-circle.png';
import minus from '../assets/minus-circle.png';
const faq = [
    {
        question: "How many participants can join a ClearLink video conference?",
        answer: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs."
    },
    {
        question: "Can I use ClearLink on multiple devices?",
        answer: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs."
    },
    {
        question: "Is ClearLink compatible with other video conferencing platforms?",
        answer: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs."
    },
    {
        question: "How does ClearLink ensure the security of my video conferences?",
        answer: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs."
    },
    {
        question: "Do I need to download any software to use ClearLink?",
        answer: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs."
    },
    {
        question: "What kind of customer support does ClearLink provide?",
        answer: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs."
    },
];

const AccordionItem = ({ index, question, answer, selected, onSelect }) => {
    return (
        <div className={`flex flex-col gap-6 border-b border-gray-200 ${index === 5 ? 'border-b-0':''} ${selected ? 'bg-gray-50 border-gray-200 rounded-2xl border' : ''}`}>
            <div className={`flex p-8 max-sm:p-4 justify-between gap-1 ${selected ? 'pb-0 max-sm:pb-0' : ''}`}>
                <div className=''>
                    <p className='text-gray-900 text-xl max-md:text-base font-semibold leading-[30px] w-max max-xl:w-fit'>{question}</p>
                </div>
                <button className='self-start max-xl:w-10' onClick={() => onSelect(index)}>
                    {selected ? (<img src={minus} alt="" className='' />) : (<img src={plus} alt="" className='' />)}
                </button>
            </div>
            {selected && (
                <p className='text-lg max-md:text-base text-gray-600 p-8 max-sm:p-4 max-sm:pt-0 pt-0 w-[701px] max-xl:w-fit'>{answer}</p>
            )}
        </div>
    );
};

const Faq = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleAccordionSelect = (index) => {
        setSelectedItem((prev) => (prev === index ? null : index));
    };

    return (
        <section className='flex max-2xl:flex-col gap-8 mx-32 max-2xl:mx-16 max-xl:mx-8  max-md:mx-4 justify-between px-8 py-24 items-start'>
            <div className='flex flex-col gap-3'>
                <p className='text-blue-700 t font-semibold text-lg'>Support</p>
                <div className='flex flex-col gap-5'>
                    <p className='text-gray-800 max-md:text-2xl text-5xl font-semibold leading-[60px] tracking-[-0.96px]'>FAQs</p>
                    <p className='text-gray-500 text-2xl max-md:text-lg max-w-[700px] max-md:w-full'>Everything you need to know about the product<br className='max-2xl:hidden' /> and billing. Can’t find the answer you’re looking<br className='max-2xl:hidden'/> for? Please <span className='underline cursor-pointer'>chat to our friendly team.</span></p>
                </div>
            </div>
            <div className='flex flex-col w-[750px] max-lg:w-full'>
                {faq.map((item, index) => (
                    <AccordionItem
                        key={index}
                        index={index}
                        question={item.question}
                        answer={item.answer}
                        selected={selectedItem === index}
                        onSelect={handleAccordionSelect}
                    />
                ))}
            </div>
        </section>
    );
};

export default Faq;
