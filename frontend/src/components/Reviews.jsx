import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { useState } from "react";

const Review = () =>{
    const reviews = [
  {
    name: "Aarav Sharma",
    role: "Student",
    rating: 4,
    review:
      "The workshop was amazing! I learned how AI works and even built my first robotics project. The sessions were fun and interactive."
  },
  {
    name: "Priya Mehta",
    role: "Parent",
    rating: 5,
    review:
      "My daughter looked forward to every class. The instructors explained complex concepts in a simple and engaging way."
  },
  {
    name: "Rohan Verma",
    role: "Student",
    rating: 5,
    review:
      "I loved the hands-on activities and coding challenges. Building a robot from scratch was the highlight of the workshop."
  },
  {
    name: "Ananya Gupta",
    role: "Student",
    rating: 4,
    review:
      "The AI demonstrations were fascinating. I gained confidence in coding and learned how technology can solve real-world problems."
  },
  {
    name: "Neha Kapoor",
    role: "Parent",
    rating: 5,
    review:
      "The workshop kept my son engaged throughout the four weeks. The curriculum was well-structured and beginner-friendly."
  },
  {
    name: "Vivaan Singh",
    role: "Student",
    rating: 4,
    review:
      "I enjoyed learning about machine learning and robotics. The final project was challenging but incredibly rewarding."
  },
  {
    name: "Sneha Patel",
    role: "Parent",
    rating: 5,
    review:
      "Excellent instructors and great content. The online format was smooth, and my child learned valuable future-ready skills."
  },
  {
    name: "Kabir Malhotra",
    role: "Student",
    rating: 5,
    review:
      "This was my first experience with AI and robotics, and it exceeded my expectations. I can't wait to join the next level!"
  },
  {
    name: "Ishita Rao",
    role: "Student",
    rating: 4,
    review:
      "The classes were interactive, the mentors were supportive, and the projects helped me understand concepts much better."
  }
];
    const [startIndex,setStartIndex]=useState(0);
    const prevSlide = ()=>{
        setStartIndex((prev)=>(prev-3+reviews.length)%reviews.length)
    }
    const nextSlide = ()=>{
        setStartIndex((prev)=>(prev+3)%reviews.length)
    }
    const visibleReviews = reviews.slice(startIndex,startIndex+3);
    return(
       <section id="testimonials" className="py-20 px-6 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-800">Testimonials from the 2025 AI & Robotics Workshop</h2> 
            <p className="text-gray-600 mt-4">Hear from students and parents who joined our previous AI & Robotics program.</p>
            </div>
             <div className="relative">
                <button onClick={prevSlide}  className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition"><FaChevronLeft /></button>
            <div  className="grid md:grid-cols-3 gap-8">
            {visibleReviews.map((item,index)=>(      
            <div key={index} className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition-all duration-300"
              >
             <div className="flex justify-between items-center">
                <FaQuoteLeft size={36}
                    className="text-teal-200"/>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">2025 Batch</span>
                <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium"> ● Verified</span>
                </div>
                <p className="text-gray-600 mt-8 leading-relaxed min-h-[120px]">{item.review}</p>
                <hr className="my-6" />
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-xl font-bold text-teal-600">
                        {item.name.charAt(0)}
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">{item.name}</h4>
                        <p className="text-gray-500 text-sm">{item.role}</p>
                        <div className="flex items-center gap-1 mt-1">
                            {[...Array(item.rating)].map((_,i)=>(
                                <FaStar key={i} className="text-yellow-400"/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
        <button onClick={nextSlide} className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition"><FaChevronRight/></button>
        </div>
        </div>
       </section> 
    )
}

export default Review;