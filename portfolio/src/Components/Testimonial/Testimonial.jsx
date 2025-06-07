import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Testimonial_Card from "./Testimonial_Card";

const Testimonial = () => {
    const data = {
        content: [
            `“Sitaram is a quick learner, always eager to take on challenges, and his frontend skills, especially in React.js, show great potential. He quickly grasps complex ideas, translating them into effective solutions, and consistently delivers high-quality work.”`,
            `  Sitaram at Red & White Multimedia Institute shows remarkable growth, quickly grasping and applying logical concepts to consistently meet deadlines. His extracurricular involvement, like acting, showcases his confidence and well-rounded personality.`,

            `Sitaram was a key player at Indus Hackathon 2025, maintaining a calm and focused mindset under pressure. A great team player, he was always ready to listen, help, and motivate, making collaboration smooth and enjoyable due to his positive attitude and dedication.`
        ],
        name: ['Roma M.', 'Jaymin Patel', 'Himanshu Kushwa'],
        from: ['Instructor at Indus University Ahmedabad', 'Red & White Multimedia Institute', 'Hackathon Team Member']
    };

    return (
        <div className="bg-[#11224080]/10 backdrop-blur-sm rounded-xl border-2 border-[#20f6a733] shadow-xl p-4 sm:p-6 md:p-8">
            <div className="flex flex-col  rounded-2xl w-full">

                {/* Heading */}
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">Testimonial</h2>
                <h1 className="border-3 border-[#0cfdb4] w-[90px] mb-[35px]"></h1>

                {/* Swiper Carousel */}
                <div className="flex justify-center mb-8">
                    <div className="w-full px-2 sm:px-4 md:px-0 md:max-w-[620px] xl:max-w-[900px]">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000 }}
                            loop={true}
                            className="rounded-lg"
                        >
                            {data.content.map((text, index) => (
                                <SwiperSlide key={index}>
                                    <div className={`p-1 rounded-lg text-center ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-green-500' : 'bg-purple-500'} text-white`}>
                                        <Testimonial_Card content={text} name={data.name[index]} from={data.from[index]} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>


                {/* Blog Section */}
                <div className="md:my-5 my-5  px-4">
                    <h2 className="text-white text-3xl sm:text-4xl font-bold mb-1">Blog</h2>
                    <div className="w-[60px] h-[4px] bg-[#0cfdb4] mb-6 rounded"></div>

                    <div className=" space-y-6 max-w-5xl mx-auto flex flex-col gap-1  text-gray-200 text-[17px]">

                        {/* Blog Title */}
                        <h2 className="text-2xl sm:text-3xl font-bold text-center text-emerald-400">
                            The Rise of AI in Frontend Development
                        </h2>

                        {/* Intro Paragraph */}
                        <p className="text-base sm:text-lg leading-relaxed  text-gray-200 text-[17px]">
                            In recent years, artificial intelligence (AI) has transformed frontend development. From auto-generating code to optimizing UI/UX based on user behavior, AI helps developers become more efficient and creative.
                        </p>

                        {/* Bullet List */}
                        <ul className="list-disc pl-6 text-gray-300 space-y-2">
                            <li>AI-powered design tools like Figma AI can suggest UI layouts instantly.</li>
                            <li>Code assistants like GitHub Copilot and ChatGPT help in writing better, faster code.</li>
                            <li>User behavior prediction enables personalized content delivery.</li>
                            <li>Performance optimization detects laggy components and suggests real-time fixes.</li>
                        </ul>

                        {/* My Thoughts */}
                        <div className="bg-[#0cfdb410] border border-[#0cfdb4] rounded-md p-4">
                            <h2 className="text-xl font-semibold text-center text-[#0cfdb4] mb-2">💭 My Thoughts</h2>
                            <p className="text-gray-200 leading-relaxed">
                                AI is a powerful assistant. It reduces repetitive tasks and lets developers focus on creativity. Learning how to use AI tools is becoming essential.
                            </p>
                        </div>

                        {/* What’s Changing */}
                        <h2 className="text-xl sm:text-2xl font-semibold text-center text-emerald-400 mt-10">🚀 What’s Changing in Frontend with AI?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            {[
                                {
                                    title: "AI-Generated Code Assistance",
                                    points: [
                                        "Generate repetitive code like forms and validation logic.",
                                        "Auto-complete functions and logic.",
                                        "Suggestions for optimization and best practices."
                                    ]
                                },
                                {
                                    title: "Design Automation with AI",
                                    points: [
                                        "Figma AI and Uizard generate design mockups from text prompts.",
                                        "Framer converts designs to responsive code.",
                                        "Smart layout suggestions based on trends and behavior."
                                    ]
                                },
                                {
                                    title: "User Behavior Personalization",
                                    points: [
                                        "Predict next clicks and hot zones.",
                                        "Track engaging sections.",
                                        "Deliver personalized content."
                                    ]
                                },
                                {
                                    title: "Performance Optimization",
                                    points: [
                                        "Analyze user data to suggest UI improvements.",
                                        "Detect slow-loading components.",
                                        "Use A/B testing to pick best designs."
                                    ]
                                }
                            ].map((section, index) => (
                                <div key={index} className="bg-[#0cfdb410] border-2 border-[#0cfdb4] p-4 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                                    <h3 className="font-semibold text-lg text-[#0cfdb4] mb-2">{section.title}</h3>
                                    <ul className="list-disc pl-5 text-gray-300 space-y-1">
                                        {section.points.map((point, idx) => <li key={idx}>{point}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Why AI is Opportunity */}
                        <div className="mt-10">
                            <h2 className="text-xl font-bold text-center text-[#0cfdb4] mb-7">🧠 Why AI is an Opportunity for Frontend Developers</h2>
                            <ul className="list-disc pl-5 text-gray-300 space-y-2">
                                <li>Reduces boilerplate code.</li>
                                <li>Improves learning and best practices.</li>
                                <li>Boosts creativity and user experience focus.</li>
                                <li>Connects design, code, and analytics.</li>
                            </ul>
                            <p className="font-semibold text-gray-100 mt-2">
                                “AI won’t take your job, but developers who know how to use AI will.”
                            </p>
                        </div>

                        {/* Real-World Use Cases */}
                        <div className="mt-10">
                            <h2 className="text-xl font-bold text-center text-[#0cfdb4] mb-8">🌍 Real-World Use Cases</h2>
                            <ul className="list-disc pl-5 text-gray-300 space-y-2">
                                <li>Personalized product suggestions on e-commerce.</li>
                                <li>Netflix/Medium tailor feeds using AI.</li>
                                <li>Chatbots use NLP for instant help.</li>
                            </ul>
                        </div>

                        {/* Final Thoughts */}
                    

                           <div className="bg-[#0cfdb410] border border-[#0cfdb4] rounded-md p-4 mt-10">
                            <h2 className="text-xl font-semibold text-center text-[#0cfdb4] mb-3">📌 Final Thoughts</h2>
                            <p className="text-gray-200 leading-relaxed text-center font-bold">
                                "If you're building a portfolio today, using AI tools shows you’re adaptable and efficient".
                            </p>
                        </div>
                    </div>
                </div>

            </div></div>

    );
};

export default Testimonial;
