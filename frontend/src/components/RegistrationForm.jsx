import { useState } from "react";
import axios from "axios";

const RegistrationForm = ({isOpen,onClose})=>{
    const [formData,setFormData]=useState({
    name:"",
    email:"",
    phone:"",
    age:"",
    });
    const [loading,setLoading] = useState(false);
    const handleChange = (e)=>{
        setFormData({...formData,
        [e.target.name]:e.target.value
    })
    };
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
        setLoading(true);
        const response = await axios.post("https://YOUR-RENDER-BACKEND.onrender.com/api/enquiry",formData);
        alert("Registration Successful! 🚀");
        setFormData({ name: "", email: "", phone: "", age: "", });
        onClose();
        }
        catch(error){
        alert(error.response?.data?.message || "Registration Failed!");
        }
        finally{
        setLoading(false);
        }
    };
    if(!isOpen)return null;
    return(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
        <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
            <button onClick={onClose}  className="absolute top-4 right-5 text-3xl text-gray-500 hover:text-black">×</button>
            <h2 className="text-center text-3xl font-bold text-gray-800">Register Now</h2>
            <p className="mt-3 text-center text-gray-600">Join our AI & Robotics Workshop</p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-teal-500"/>
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-teal-500"/>
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required  className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-teal-500"/>
            <input type="number" name="age" placeholder="Age" min="8" max="14" value={formData.age} onChange={handleChange} required  className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-teal-500"/>
            <button type="submit" disabled={loading} className="w-full rounded-xl bg-teal-500 py-4 font-semibold text-white transition-all duration-300 hover:bg-teal-600 hover:-translate-y-1 disabled:bg-gray-400">{loading ? "Registering..." : "Register 🚀"}</button>
        </form>
    </div>
    </div>
    )
}

export default RegistrationForm;