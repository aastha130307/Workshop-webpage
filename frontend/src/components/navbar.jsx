import { useState } from "react";
import RegistrationForm from "./RegistrationForm";

const Navbar = () =>{
    const navItems =[
        {name:"About",link:"#about"},
        {name:"Curriculum",link:"#curriculum"},
        {name:"Instructors",link:"#instructor"},
        {name:"Reviews",link:"#testimonials"},
        {name:"FAQ",link:"#FAQ"},
    ]
    const [showForm,setShowForm] = useState(false);
    return(
    <nav className="fixed top-0 left-0 w-full bg-[#14B8A6] hover:bg-[#0f9f8a] shadow-md z-50 transition">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6"> 
            <div className="flex items-center gap-3">
            <img src="https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="AI & Robotics Logo" className="h-12 w-12 rounded-full" />
            <span className="text-xl font-bold text-white">
                AI & Robotics
            </span>
            </div>
            <ul className="hidden md:flex items-center gap-8 list-none">
                {navItems.map((item)=>(
                <li key={item.name} >
                <a href={item.link} className="text-white font-medium hover:text-gray-200 transition">
                    {item.name}
                </a>
                </li>
                ))}
            </ul>
            
            <button onClick={() => setShowForm(true)}  className="relative overflow-hidden rounded-full bg-gradient-to-r from-white to-gray-100 px-6 py-2 font-semibold text-teal-600 shadow-md transition-all duration-300
  hover:-translate-y-1 hover:shadow-xl hover:from-teal-50 hover:to-white
  active:scale-95">
            <span className="relative z-10">Register</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 hover:opacity-100 hover:translate-x-full transition-all duration-700"></span>
            </button>
            <RegistrationForm isOpen={showForm} onClose={() => setShowForm(false)}/>         
        </div>
    </nav>
    )
}

export default Navbar;