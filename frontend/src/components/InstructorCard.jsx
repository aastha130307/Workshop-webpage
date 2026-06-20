const InstructorCard = ({instructor}) =>{
    return(
        <div className="group relative h-[420px] overflow-hidden rounded-3xl shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
         <img src={instructor.img} alt={instructor.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
         <div className="absolute bottom-0 left-0 p-6 text-white z-10">
         <h3 className="text-3xl font-bold">{instructor.name}</h3>
         <p className="text-xl font-medium mt-2">{instructor.expertise}</p>
         <p className="mt-3 flex items-center gap-2 text-lg">📍{instructor.location}</p>
        </div>
        </div>
    )
}

export default InstructorCard;