import '../../App.css';
import Progress from './Progress';

const Resume = () => {

    let data = {

        domain: ['Web design', 'HTML', 'CSS', 'JS', 'React Js', 'UI-Framework'],

        progress: ['80%', '90%', '85%', '80%', '70%', '75%'],

    }
    return (
        <div className='flex flex-col items-center gap-5 sm:px-4 px-1   w-full max-w-7xl mx-auto'>
            {/* Resume */}
            <div className="w-full py-8 px-4 md:px-6 rounded-2xl shadow-2xl border border-[#20f6a733] bg-[#0e1a2b]">
                {/* Education */}
                <div className="Education">
                    <h2 className="text-white text-3xl font-bold mb-2">Resume</h2>
                    <h1 className="border-3 border-[#0cfdb4] w-[90px] mb-[32px]"></h1>

                    <h3 className="text-white text-2xl font-semibold mb-4">
                        <i className="fa-solid fa-book-open-reader text-[#0cfdb4] ps-1"></i>&nbsp; <span className='text-[#0cfdb4]'>Education</span>

                    </h3>

                    <section className="timeline">
                        <ol className="timeline-list space-y-6">
                            <li className="timeline-item">
                                <h4 className="text-lg font-bold text-white text-[20px]">🏫 K.B. Vakil High School, Patan</h4>
                                <p  className=" text-[#0cfdb4]"> 2010 — 2020 &nbsp; Board : GSEB | March 2020</p> 
                                <p className=" text-gray-200 text-[17px] mt-2">
                                    Completed my secondary education with a strong foundation in core subjects like Mathematics, Science, and English.
                                </p>
                            </li>
                            <li className="timeline-item">
                                <h4 className="text-lg font-bold text-white">🧪 Pioneer School of Science, Patan</h4>
                                <p className=" text-[#0cfdb4]">2020 — 2022 &nbsp; HSC (12th Science – PCM Stream) | May 2022</p>
                                <p className=" text-gray-200 text-[17px] mt-2">
                                    Studied under GSEB with focus on Physics, Chemistry, and Mathematics. Developed logical thinking and analytical skills.
                                </p>
                            </li>
                            <li className="timeline-item">
                                <h4 className="text-lg font-bold text-white">💻 Indus University, Ahmedabad</h4>
                                <p className=" text-[#0cfdb4]">2022 – 2026 (Ongoing) &nbsp; B.Tech – Information Technology</p>
                                <p className=" text-gray-200 text-[17px] mt-2">
                                    Currently pursuing B.Tech in IT with hands-on experience in web technologies, designing , and real-world web applications. Active in coding events, hackathons, and extra-curricular activities.
                                </p>
                            </li>
                        </ol>
                    </section>

                    <section className="mt-8">
                        <h3 className="text-xl font-semibold text-white mb-4">📈 Summary of Results</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm text-left text-gray-800 rounded-lg overflow-hidden">
                                <thead className="bg-indigo-600 text-white">
                                    <tr>
                                        <th className="px-4 py-2">Exam</th>
                                        <th className="px-4 py-2">Institution</th>
                                        <th className="px-4 py-2">Year</th>
                                        <th className="px-4 py-2">Board</th>
                                        <th className="px-4 py-2">Percentage</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-4 py-2">10th Standard</td>
                                        <td className="px-4 py-2">K.B. Vakil School, Patan</td>
                                        <td className="px-4 py-2">March 2020</td>
                                        <td className="px-4 py-2">GSEB</td>
                                        <td className="px-4 py-2">80%</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">12th Standard</td>
                                        <td className="px-4 py-2">Pioneer School of Science, Patan</td>
                                        <td className="px-4 py-2">May 2022</td>
                                        <td className="px-4 py-2">GSEB (Science)</td>
                                        <td className="px-4 py-2">69%</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">B.Tech (IT)</td>
                                        <td className="px-4 py-2">Indus University, Ahmedabad</td>
                                        <td className="px-4 py-2">2022–2026</td>
                                        <td className="px-4 py-2">UGC</td>
                                        <td className="px-4 py-2">CGPA: 9.5</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>

            {/* Technical Skill */}
            <div className="w-full py-8 px-4 md:px-6 rounded-2xl shadow-2xl border border-[#20f6a733] bg-[#0e1a2b]">
                <h3 className="text-white text-2xl font-semibold mb-4">
                    <i className="fa-solid fa-book-open-reader text-[#0cfdb4] ps-1"></i> &nbsp;<span className='text-[#0cfdb4]'>Technical Skills</span>
                </h3>
                <ul className="timeline-list space-y-2  text-white">
                    <li className="timeline-item text-[18px]"><strong className='pe-1.5'>Current:</strong> React.js</li>
                    <li className="timeline-item text-[18px]"><strong className='pe-1.5 '>Core:</strong> HTML, CSS, JS, ES6</li>
                    <li className="timeline-item text-[18px]"><strong className='pe-1.5 '>UI Frameworks:</strong> Bootstrap, Tailwind</li>
                    <li className="timeline-item text-[18px]"><strong className='pe-1.5 '>Others:</strong> jQuery, Redux-Toolkit
                    </li>
                    <li className="timeline-item text-[18px]"><strong className='pe-1.5'>Database:</strong>Basic knowledge of No-sql database (mongo db)</li>
                    <li className="timeline-item text-[18px]"><strong className='pe-1.5 '> Computer Science Concept:</strong> OS, DBMS, CN, DAA, STQA, Big Data, IoT</li>
                </ul>
            </div>

            {/* Experience */}
            <div className="w-full py-8 px-4 md:px-6 rounded-2xl shadow-2xl border border-[#20f6a733] bg-[#0e1a2b]">
                <h3 className="text-white text-2xl font-semibold mb-4">
                       <i className="fa-solid fa-book-open-reader text-[#0cfdb4] ps-1"></i> &nbsp;<span className='text-[#0cfdb4]'>Experience </span>
                </h3>
                <ul className=" timeline-list space-y-4 text-white">
                    <li className="timeline-item">
                        <strong className='text-[18px] text-[#0cfdb4]'>Red & White Multimedia Institute, Ahmedabad (2025 — Present)</strong>
                        <p className="text-gray-200 text-[16px]">Alongside my B.Tech studies, I enrolled in a professional web development program focused on frontend technologies. During this course, I gained hands-on experience with HTML5, CSS3, JavaScript, React.js, and UI frameworks. I quickly grasp complex concepts and demonstrated strong logical thinking by building real-world responsive websites and user interfaces.</p>
                    </li>

                    <li className="timeline-item">
                        <strong className='text-[#0cfdb4] text-[18px]'>Frontend Development Task (Interview-Based Project)</strong>
                        <ul className="text-gray-200 text-[16px]">

                            <p>As part of an interview process, I was given a real-world frontend challenge based on a Figma design. I successfully completed the task by building a fully responsive and pixel-perfect frontend interface. This experience helped me prove my technical abilities under pressure and handle critical UI requirements with confidence.

                            </p>
                            <li>✅ Cracked the interview by completing a complex frontend task within the deadline.</li>
                            <li>✅ Delivered pixel-perfect and responsive design</li>
                            <li>✅ Gained practical exposure to handling real-world tasks similar to industry-level frontend projects.</li>
                        </ul>
                    </li>
                </ul>
            </div>

            {/* Achievements & Skills */}
            <div className="w-full py-8 px-4 md:px-6 rounded-2xl shadow-2xl border border-[#20f6a733] bg-[#0e1a2b]">
                <h3 className="text-white text-2xl font-semibold mb-4">
                     <i className="fa-solid fa-book-open-reader text-[#0cfdb4] ps-1"></i> &nbsp;<span className='text-[#0cfdb4]'>Achievements & Skills </span>
                </h3>
                <ul className=" timeline-list  list-inside text-white space-y-1">
                    <li className="timeline-item">HTML5 Bootcamp</li>
                    <li className="timeline-item">Website UI/UX Design</li>
                    <li className="timeline-item">Indus Hackathon 2025</li>
                    <li className="timeline-item">Flutter Workshop (2024)</li>
                    <li className="timeline-item">Currently at R&W Multimedia</li>
                </ul>

                <h3 className="text-white text-2xl font-semibold mt-8 mb-4">
                   <i className="fa-solid fa-book-open-reader text-[#0cfdb4] ps-1"></i> &nbsp;<span className='text-[#0cfdb4]'>Soft Skills </span>
                </h3>
                <ul className=" timeline-list list-inside text-white space-y-1">
                    <li className="timeline-item">Problem Solving</li>
                    <li className="timeline-item">Time Management</li>
                    <li className="timeline-item">Communication</li>
                    <li className="timeline-item">Teamwork & Collaboration</li>
                </ul>
            </div>

            {/* My Skills */}
            <div className="w-full py-8 px-4 md:px-6 rounded-2xl shadow-2xl border border-[#20f6a733] bg-[#0e1a2b]">
                <h3 className="text-[#0cfdb4] text-2xl font-semibold mb-6">My Skills</h3>

                <div className='flex flex-col gap-3'>
                    <Progress domain={data.domain[0]} progress={data.progress[0]} />
                    <Progress domain={data.domain[1]} progress={data.progress[1]} />
                    <Progress domain={data.domain[2]} progress={data.progress[2]} />
                    <Progress domain={data.domain[3]} progress={data.progress[3]} />
                    <Progress domain={data.domain[4]} progress={data.progress[4]} />
                    <Progress domain={data.domain[5]} progress={data.progress[5]} />

                </div>
            </div>

            {/* Resume Download Buttons */}
            <div className="w-full p-4 rounded-2xl shadow-2xl border border-[#20f6a733] bg-[#0e1a2b]">
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <a
                        href="/resume.pdf"
                        download="Sitaram_Prajapati_CV.pdf"
                        className="bg-blue-600 text-white w-full md:w-auto text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
                    >
                        ⬇️ Download Resume
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white w-full md:w-auto text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
                    >
                        📄 View Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Resume;