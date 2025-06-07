import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const isValid = {
    name: formData.name.trim().length > 2,
    email: isValidEmail(formData.email),
    subject: formData.subject.trim().length > 3,
    message: formData.message.trim().length > 5,
  };

  const getBorderColor = (field) => {
    if (!touched[field]) return "border-yellow-400";
    return isValid[field] ? "border-green-500" : "border-red-500";
  };

  const handleSubmit = (e) => {
    // e.preventDefault(); // optional if using web3forms
    alert("Form submitted (simulate)");
  };

  return (



    <div className="bg-[#11224080]/10 backdrop-blur-sm  rounded-xl border-2 border-[#20f6a733] shadow-xl ">

      <div className="w-full  py-[1px] px-[0px]   rounded-2xl shadow-2xl ">

        <div className="px-[25px] pt-[25px]">

          <h2 className="text-[#ffffff] font-bold mb-1 text-[30px]">Contact Me</h2>
          <h1 className="border-3 border-[#0cfdb4] w-[90px] mb-[16px]"></h1>

      </div>
      <div className="flex flex-col items-center gap-8 px-2 sm:px-4 py-10 w-full min-h-screen  ">
        {/* Map Section */}
        <div className="w-full max-w-7xl rounded-xl overflow-hidden shadow-2xl border-2 border-[#20f6a733] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.3375413174617!2d72.52477127509262!3d23.048083579155897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e850034096a67%3A0x1348724892a54e25!2sPrajapati%20Hostel!5e0!3m2!1sen!2sin!4v1748964555249!5m2!1sen!2sin"
            height="400"
            className="w-full h-[250px] md:h-[400px] dark:invert"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <div className="w-full max-w-4xl  border-2 border-[#20f6a733] rounded-xl">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={handleSubmit}
            className=" text-white p-2 sm:p-10 rounded-lg  space-y-6"
          >
            <input
              type="hidden"
              name="access_key"
              value="fb907d7d-2e4f-4e4c-b645-940b0e0ebd59"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 bg-transparent border rounded-md focus:outline-none ${getBorderColor(
                    "name"
                  )}`}
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 bg-transparent border rounded-md focus:outline-none ${getBorderColor(
                    "email"
                  )}`}
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-1">Subject</label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-2 bg-transparent border rounded-md focus:outline-none ${getBorderColor(
                  "subject"
                )}`}
                type="text"
                placeholder="Subject"
                required
              />
            </div>

            <div>
              <label className="block mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows="5"
                className={`w-full px-4 py-2 bg-transparent border rounded-md focus:outline-none ${getBorderColor(
                  "message"
                )}`}
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-green-400 text-black rounded-md hover:bg-green-500 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10l9-6 9 6v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8z"
                  />
                </svg>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>   </div>

    </div>


  );
};

export default Contact;
