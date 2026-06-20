import { useState } from "react"
const FAQ = ()=>{
    const [openIndex,setOpenIndex]=useState(null);
    const faqs = [
        {
            question:"What will students learn in this workshop?",
            answer:"Students will learn AI basics, robotics concepts, and build hands-on mini projects in a fun way."
        },
        {
            question:"Do I need prior coding experience?",
            answer:"No, this workshop is beginner-friendly and starts from absolute basics.",
        },
        {
            question:"Will students get a certificate?",
            answer: "Yes, every student will receive a certificate after completion.",
        },
        {
            question:"Is this workshop online or offline?",
            answer:"Online"
        },
        {
            question:"What is the duration of the workshop?",
            answer:"4 weeks"
        },
        {
            question:"When will the workshop start?",
            answer:"15th July 2026"
        },
        {
            question:"What if the student misses a session?",
            answer:"Recorded material or revision support will help students catch up."
        },
        {
          question:"What is the fee to register for the workshop?",
          answer:"Rs.2999"
        }
     ]
     const toggleFAQ = (index) =>{
        setOpenIndex(openIndex===index?null:index);
     };
    return(
    <section className="px-4 py-16 mx-auto max-w-3xl" id="FAQ">
        <div className="text-center mb-4">
        <img src="https://images.unsplash.com/photo-1724120932030-d8210a77deed?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Question_mark" className="w-20 h-20 mx-auto rounded-full"/>
        </div>
        
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Frequently Asked Questions</h2>
        <p className="text-center text-gray-500  mb-12 text-sm md:text-base">Everything you need to know about AI & Robotics workshop</p>
       
       
        <div className="space-y-4">
            {faqs.map((faq,index)=>{
            const isOpen = openIndex === index;
            return (
            <div key={index} className="border rounded-xl shadow-sm bg-white overflow-hidden transition-all duration-300">
                <button onClick={()=>toggleFAQ(index)} className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition">
               <span className="font-medium text-gray-800">
               {faq.question}
               </span>
               <span  className={`text-xl font-bold text-teal-600 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}>
               {openIndex===index?"-":"+"}
               </span>
              </button>
            {openIndex===index && ( 
                <div  className={`px-4 text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "max-h-40 opacity-100 pb-4"
                    : "max-h-0 opacity-0 pb-0"
                }`}>
                {faq.answer}
                </div>
                )}
                </div>
            )})}
            <p className="text-center text-gray-500  mb-1 text-sm md:text-base">Still have questions?</p>
            <div className="flex justify-center">
       <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 mt-0.5">
        Contact Support
        </button>
        </div>
        </div>    
    </section>
        
    )
}

export default FAQ;