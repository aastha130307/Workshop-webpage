import { FaLinkedin,FaInstagram,FaFacebook,FaYoutube,FaTwitter } from "react-icons/fa"
const Footer = () =>{
    return (
        <footer className=" bg-gray-200 text-black px-6 py-20 md:px-6">
            <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                <h1 className="text-2xl font-bold">AI & Robotics Workshop</h1>
                <p className="text-gray-600 text-sm mt-3">Learn AI, Machine Learning & Robotics through hands-on projects,real-world applications, and expert mentorship.</p>
             <div className="flex gap-4 text-xl mt-4">
                <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEnopYp58FDsgAAAZ7gzwwwLpXPOFtCiTmEqZ1hVTjhJP9cnNseIzXAkdPddYeY_5OL_yPy2aZ_06laNhfz7E1yxuT235RvW8YBzlpwumICskGKkZWKtcZIhworuK7QEun0y8U=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fkidrove%2F" className="hover:text-blue-500 cursor pointer"><FaLinkedin/></a>
                <a href="https://www.instagram.com/kidroveuae/" className="hover:text-pink-500 cursor-pointer"><FaInstagram/></a>
                <a href="https://www.facebook.com/people/Kidrove/61585051405021/" className="hover:text-blue-400 cursor pointer"><FaFacebook/></a>
                <a href="https://x.com/KidroveUAE" className="hover:text-sky-400 cursor-pointer"><FaTwitter/></a>
                <a href="https://www.youtube.com/channel/UCtADUAmbQzj-wYNzf9S_UxQ" className="hover:text-red-500 cursor-pointer"><FaYoutube/></a>
             </div>
             </div>
             <div>
            <h2 className="text-lg font-bold mb-3">Quick Links</h2>
            <div className="flex flex-col gap-2 text-gray-600">
            <a href="#about" className="hover:text-white">About Us</a>
            <a href="#curriculum" className="hover:text-white">Curriculum</a>
            <a href="#" className="hover:text-white">Contact Us</a>
            <a href="#FAQ" className="hover:text-white">FAQs</a>
            </div>
            </div>
            <div>
            <h2 className="font-bold text-lg mb-3">Join Us</h2>
            <div className="flex flex-col text-gray-600">
            <a href="#" className="hover:text-white">Teach as Organization</a>
            <a href="#" className="hover:text-white">Teach as Individual</a>
            </div>
            <button className="mt-5 bg-blue-600 hover:bg-blue-700 px-4 py-2 font-semibold rounded-lg">Register Now</button>
            </div>

            <div>
                <h2 className="font-bold text-lg mb-3">Stay Updates</h2>
                <p className="text-gray-600 text-sm mb-3">Get updates on new batches and workshops.</p>
                <div className="flex gap-2">
                    <input type="email" placeholder="Enter email" className="px-3 py-2 w-full text-black rounded-l-md"/>
                    <button className="bg-blue-600 hover:bg-blue-700 px-4 rounded-lg font-semibold">Subscribe</button>
                </div>
            <div className="mt-5 text-gray-600 text-sm space-y-1">
                <a href="#FAQ" className="block hover:text-white"> How to join?</a>
                <a href="#FAQ" className="block hover:text-white">Fees & pricing</a>
                <a href="#FAQ" className="block hover:text-white">Certificate details</a>
            </div>
            </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-12 border-t border-gray-800 pt-10">
                <div>
                    <h3 className="text-2xl font-bold">500+</h3>
                    <p className="text-gray-600 text-sm">Students</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold">20+</h3>
                    <p className="text-gray-600 text-sm">Projects</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold">10+</h3>
                    <p className="text-gray-600 text-sm">Mentors</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold">4.8★</h3>
                    <p className="text-gray-600 text-sm">Rating</p>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-700 text-sm">
                <p>© 2026 AI & Robotics Workshop. All rights reserved.</p>
                <p className="mt-1">Built with ❤️ for future AI engineers</p>
            </div>
            </div>
        </footer>
    
    )
}
export default Footer