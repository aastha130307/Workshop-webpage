import InstructorCard from "./InstructorCard";
import aakash from "../assets/aakash.png";
import arjun from "../assets/arjun.png";
import rohit from "../assets/rohit.png";
import priya from "../assets/priya.png";
import Neha from "../assets/Neha.png";
import aarav from "../assets/aarav.png";

const Instructors = [
    {
    name : "Dr. Aarav Mehta",
    img : aarav,
    expertise : "Artificial Intelligence & Machine Learning",
    location : "Bengaluru,Karnataka"
    },
    {
    name : "Priya Sharma",
    img : priya,
    expertise : "Robotics Engineering",
    location : "Pune, Maharashtra"      
    },
    {
    name : "Rohit Verma",
    img : rohit,
    expertise : "Computer Vision & AI Applications",
    location : "Hyderabad, Telangana"
    },
    {
    name : "Dr. Neha Kapoor",
    img : Neha,
    expertise : "Educational Robotics",
    location : "New Delhi"
    },
    {
    name : "Arjun Nair",
    img : arjun,
    expertise : "Embedded Systems & IoT",
    location : "Kochi, Kerala"
    },
    {
    name : "Aakash Deshmukh",
    img : aakash,
    expertise : "Data Science",
    location : "Jamshedpur,Jharkhand"
    }
 ]
const Instructor = () =>{  
    return (
       <section className="py-20 px-6" id="instructor">
        <div className="max-w-7xl mx-auto">
             <h2 className="text-4xl font-bold text-center">Meet Our Inspiring Instructors</h2>
            <p className="text-center text-gray-600 mt-4">Learn from passionate experts who are eager to share their skills with your children.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">        
            {Instructors.map((instructor,index)=>(
                <InstructorCard key={index} instructor={instructor}/>
            ))}
        </div>
        </div>
       </section>
    )
}

export default Instructor;