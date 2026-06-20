const About = () => {
  const outcomes = [
    "Understand the basics of Artificial Intelligence",
    "Build and program simple robots",
    "Learn coding through fun hands-on projects",
    "Develop problem-solving and logical thinking skills",
    "Create a final AI & Robotics project independently",
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-white to-teal-50 mt-25"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900">
            About The Workshop
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A hands-on AI & Robotics journey designed to inspire creativity,
            innovation, and problem-solving in young learners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1658584124309-768111d9c5db?q=80&w=2070&auto=format&fit=crop"
              alt="AI & Robotics Workshop"
              className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          {/* Content */}
          <div>
            <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
              AI & Robotics Workshop
            </span>

            <h3 className="text-4xl font-bold mt-4 mb-4 text-gray-900">
              Build, Code & Create with AI and Robotics
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              A fun and interactive online workshop designed for young
              innovators. Students will explore Artificial Intelligence,
              robotics, and coding through exciting projects, games, and
              hands-on activities. No prior coding experience is required.
            </p>

            {/* Workshop Details */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                <p className="font-semibold">Age Group</p>
                <p className="text-gray-600">8 - 14 Years</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                <p className="font-semibold">Duration</p>
                <p className="text-gray-600">4 Weeks</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                <p className="font-semibold">Start Date</p>
                <p className="text-gray-600">15 July 2026</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                <p className="font-semibold">Course Fee</p>
                <p className="text-gray-600">₹2999 Only</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition col-span-2">
                <p className="font-semibold">Mode</p>
                <p className="text-gray-600">Online Live Classes</p>
              </div>
            </div>

            {/* Learning Outcomes */}
            <h4 className="text-2xl font-bold mb-4">
              What Students Will Learn
            </h4>

            <ul className="space-y-3">
              {outcomes.map((outcome, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="text-teal-600 font-bold text-lg">✓</span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;