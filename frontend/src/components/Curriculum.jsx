const Curriculum = () =>{
    const weeks=[
        {
        week:"Week 1",
        icon:"🤖",
        title:"AI foundations",
        topics:[
        "Introduction to Artificial Intelligence",
        "AI in Everyday Life",
        "Generative AI Tools",
        "Fun Hands-on Activities",
        ],
        },
        {
        week:"Week 2",
        icon:"⚙️",
        title:"Robotics Essentials",
        topics:[
        "What is Robotics?",
        "Sensors & Actuators",
        "Robot Components",
        "Virtual Robotics Simulations",
        ],
        },
        {
        week:"Week 3",
        icon:"💻",
        title:"Coding & Automation",
        topics:[
        "Programming Basics",
        "Robot Control Logic",
        "Problem Solving",
        "Interactive Coding Exercises",
        ],
        },
        {
        week:"Week 4",
        icon:"🚀",
        title:"Final Project & Showcase",
        topics:[
       "Build a Mini Project",
        "Team Collaboration",
        "Project Presentation",
        "Certificate of Completion",
        ],
        }
    ]
    return(
        <section id="curriculum" className="py-20 px-6 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="font-bold text-4xl text-gray-800">Your 4-Week Learning Journey</h2>
                <p className="text-gray-600 mt-4 text-lg"> Learn AI & Robotics step-by-step through live online sessions and exciting projects.</p>
            </div>
            <div className="relative"> 
                <div className="absolute left-5 top-0 h-full w-1 bg-teal-300"></div>
                {weeks.map((item,index)=>(
                <div key={index} className="relative flex items-start gap-8 mb-12">
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 text-white font-bold shadow-lg">
                    {index + 1}
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-lg w-full hover:-translate-y-2 transition duration-300">
                    <span  className="text-sm font-semibold text-teal-600">
                        {item.week}
                    </span>
                    <h3 className="text-2xl font-bold mt-2">
                        {item.icon}{item.title}
                    </h3>
                    <ul className="mt-4 space-y-2 text-gray-600">
                        {item.topics.map((topic,i)=>(
                            <li key={i}>✓ {topic}</li>
                        ))}
                    </ul>
                </div>
                </div>
                ))}
            </div>
            <div  className="flex flex-wrap justify-center gap-4 mt-12">
                <div className="bg-white px-5 py-3 rounded-full shadow">
                    📅 4 Weeks
                </div>
                <div className="bg-white px-5 py-3 rounded-full shadow">
                    💻 Online Live Sessions
                </div>
                <div className="bg-white px-5 py-3 rounded-full shadow">
                    🎓 Certificate Included
                </div>
            </div>
        </div>
        </section>
    )
}

export default Curriculum;