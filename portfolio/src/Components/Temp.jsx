import '../../App.css';
import Progress from './Progress';


const Resume = () => {
    return (
        <>

            <div className='flex flex-col items-center gap-5 h-full '>

                {/* Resume*/}


                <div className="w-full  py-[30px] px-[10px] md:px-[20px] rounded-2xl shadow-2xl border-3 border-[#20f6a733]">
                    {/* education */}
                    <div className="Education">

                        <h2 className="text-white text-[32px] font-bold mb-1">Resume</h2>
                        <h1 className="border-3 border-amber-500 w-[100px] mb-[16px]"></h1>

                        <div>

                            <h2 className="text-white text-[25px] font-bold mb-1"><i class="fa-solid fa-book-open-reader text-sky-950 "></i> &nbsp;   Education</h2>

                            <section class="timeline">

                                <ol class="timeline-list">

                                    <li class="timeline-item">

                                        <h4 class="h4 timeline-item-title">🏫 K.B. Vakil High School, Patan</h4>

                                        <span>2010 — 2020 &nbsp; Board : GSEB | March 2020</span>


                                        <p class="timeline-text">
                                            Completed my secondary education with a strong foundation in core subjects like Mathematics, Science, and English.
                                        </p>

                                    </li>

                                    <li class="timeline-item">

                                        <h4 class="h4 timeline-item-title">🧪 Pioneer School of Science, Patan</h4>

                                        <span>2020 — 2022 &nbsp; HSC (12th Science – PCM Stream) |  May 2022</span>

                                        <p class="timeline-text">
                                            Studied under Gujarat Higher Secondary Education Board with a focus on Physics, Chemistry, and Mathematics. Developed logical thinking and analytical problem-solving skills.
                                        </p>

                                    </li>

                                    <li class="timeline-item">

                                        <h4 class="h4 timeline-item-title">💻 Indus University, Ahmedabad</h4>

                                        <span> 2022 – 2026 (Ongoing) &nbsp; Bachelor of Technology (B.Tech) – Information Technology</span>

                                        <p class="timeline-text">
                                            Currently pursuing B.Tech in IT with hands-on experience in web technologies, data structures, and real-world software development. Active in coding events, hackathons, and extra-curricular activities.
                                        </p>

                                    </li>

                                    <li class="timeline-item timeline-item-title">
                                        <section id="education-summary" class="edu-section">
                                            <h2 class="edu-heading">📈 Summary of Results</h2>

                                            <div class="w-full overflow-x-auto max-h-[calc(100vh-100px)] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                                                <table class="min-w-full text-sm md:text-base text-left text-gray-800 shadow-lg rounded-xl border border-gray-200">
                                                    <thead class="bg-indigo-600 text-white uppercase">
                                                        <tr>
                                                            <th class="px-6 py-3">Exam</th>
                                                            <th class="px-6 py-3">Institution</th>
                                                            <th class="px-6 py-3">Year</th>
                                                            <th class="px-6 py-3">Board</th>
                                                            <th class="px-6 py-3">Percentage</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody class="bg-white divide-y divide-gray-200">
                                                        <tr class="hover:bg-indigo-50 transition duration-200 ease-in-out">
                                                            <td class="px-6 py-4 font-medium">10th Standard</td>
                                                            <td class="px-6 py-4">K.B. Vakil School, Patan</td>
                                                            <td class="px-6 py-4">March 2020</td>
                                                            <td class="px-6 py-4">GSEB</td>
                                                            <td class="px-6 py-4">80%</td>
                                                        </tr>
                                                        <tr class="hover:bg-indigo-50 transition duration-200 ease-in-out">
                                                            <td class="px-6 py-4 font-medium">12th Standard</td>
                                                            <td class="px-6 py-4">Pioneer School of Science, Patan</td>
                                                            <td class="px-6 py-4">May 2022</td>
                                                            <td class="px-6 py-4">GSEB (Science)</td>
                                                            <td class="px-6 py-4">69%</td>
                                                        </tr>
                                                        <tr class="hover:bg-indigo-50 transition duration-200 ease-in-out">
                                                            <td class="px-6 py-4 font-medium">B.Tech (IT)</td>
                                                            <td class="px-6 py-4">Indus University, Ahmedabad</td>
                                                            <td class="px-6 py-4">2022–2026</td>
                                                            <td class="px-6 py-4">UGC</td>
                                                            <td class="px-6 py-4">CGPA: 9.5 (up to Sem-5)</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>


                                        </section>

                                    </li>


                                </ol>
                            </section>


                        </div>


                    </div>


                </div>

                {/* Technical skill */}
                <div className="w-full border-3 border-[#20f6a733] py-[30px] px-[10px] md:px-[25px] rounded-2xl shadow-2xl">

                    <div>

                        <h2 className="text-white text-[25px] font-bold mb-1"><i class="fa-solid fa-book-open-reader text-sky-950 "></i> &nbsp;   Technical Skill</h2>

                        <section class="timeline">

                            <ol class="timeline-list">

                                <li class="timeline-item">

                                    <h4 class="h4 timeline-item-title">Front-End</h4>

                                    <span>Current (React Js)</span>

                                </li>

                                <li class="timeline-item">

                                    <h4 class="h4 timeline-item-title">Core</h4>

                                    <span>HTML, CSS, JS, ES6 </span>

                                </li>

                                <li class="timeline-item">

                                    <h4 class="h4 timeline-item-title">UI Frameworks</h4>

                                    <span> Bootstrap, Tailwind</span>

                                </li>

                                <li class="timeline-item">

                                    <h4 class="h4 timeline-item-title">Mongo Db</h4>
                                    <span>Basic knowledge of No-sql database (mongo db)</span>

                                </li>

                                <li class="timeline-item">

                                    <h4 class="h4 timeline-item-title">Computer Science Concept</h4>
                                    <span>Knowledge of some computer concept like (OS , DBMS ,
                                        , COMPUTER NETWORK , DESIGN ANALYSIS
                                        ALGORITHMS , STQA , BIG DATA , IOT (INTERNET OF THINGS) ETC..)</span>

                                </li>
                            </ol>

                        </section>

                        {/* Experience */}

                        <h2 className="text-white text-[25px] font-bold mb-1"><i class="fa-solid fa-book-open-reader text-sky-950 "></i> &nbsp;  Experience</h2>

                        <section class="timeline">


                            <ol class="timeline-list">

                                <li class="timeline-item">

                                    <h4 class="h4 timeline-item-title">Red & White Multimedia Institute — Ahmedabad</h4>

                                    <span>2025 — Present</span>

                                    <p class="timeline-text">
                                        Alongside my B.Tech studies, I enrolled in a professional web development program focused on frontend technologies. During this course, I gained hands-on experience with HTML5, CSS3, JavaScript, React.js, and UI frameworks. I quickly grasp complex concepts and demonstrated strong logical thinking by building real-world responsive websites and user interfaces.
                                    </p>

                                </li>

                                <li class="timeline-item">

                                    <h4 class="h4 timeline-item-title"> Frontend Development Task (Interview-Based Project)</h4>

                                    <span>Company Assessment Project — 2025</span>

                                    <p class="timeline-text">
                                        As part of an interview process, I was given a real-world frontend challenge based on a Figma design. I successfully completed the task by building a fully responsive and pixel-perfect frontend interface. This experience helped me prove my technical abilities under pressure and handle critical UI requirements with confidence.

                                        <p class="timeline-text">✅Cracked the interview by completing a complex frontend task within the deadline.</p>
                                        <p class="timeline-text"> ✅Converted a detailed Figma design into a functional, responsive web layout using React.js.</p>
                                        <p class="timeline-text"> ✅Gained practical exposure to handling real-world tasks similar to industry-level frontend projects.</p>

                                    </p>

                                </li>

                            </ol>

                        </section>



                    </div>


                </div>

                {/* Achievement /Certificates */}
                <div className="w-full border-3 border-[#20f6a733] py-[30px] px-[10px] md:px-[25px] rounded-2xl shadow-2xl">

                    <div>

                        <h2 className="text-white text-[25px] font-bold mb-1"><i class="fa-solid fa-book-open-reader text-sky-950 "></i> &nbsp; Achievement /Certificates  </h2>

                        <section class="timeline">


                            <ol class="timeline-list">

                                <li class="timeline-item">

                                    <h4 class="h4 timeline-item-title achievement"> HTML5 Bootcamp
                                    </h4>

                                </li>

                                <li class="timeline-item">

                                    <h4 class="h4 timeline-item-title achievement"> Website UI/UX Design
                                    </h4>

                                </li>

                                <li class="timeline-item">

                                    <h4 class="h4 timeline-item-title achievement">Indus Hackathon 2025
                                    </h4>

                                </li>

                                <li class="timeline-item">

                                    <h4 class="h4 timeline-item-title achievement"> Flutter indus university workshop
                                        Certification (2024)
                                    </h4>

                                </li>

                                <li class="timeline-item">

                                    <h4 class="h4 timeline-item-title achievement"> Current in R&W Multimedia
                                    </h4>

                                </li>

                            </ol>

                        </section>


                        {/* Soft Skill */}
                        <h2 className="text-white text-[25px] font-bold mb-1"><i class="fa-solid fa-book-open-reader text-sky-950 "></i> &nbsp; Soft Skills  </h2>

                        <section class="timeline">



                            <ol class="timeline-list">

                                <li class="timeline-item">

                                    <h4 class="h4 timeline-item-title achievement"> Problem Solving
                                    </h4>

                                </li>

                                <li class="timeline-item">

                                    <h4 class="h4 timeline-item-title achievement"> Time Management
                                    </h4>

                                </li>

                                <li class="timeline-item">

                                    <h4 class="h4 timeline-item-title achievement">Communication
                                    </h4>

                                </li>

                                <li class="timeline-item">

                                    <h4 class="h4 timeline-item-title achievement">Flexiable
                                    </h4>

                                </li>

                            </ol>

                        </section>

                    </div>

                </div>

                {/* my skills */}

                {/* My Skills */}
                <div className="w-full border-3 border-[#20f6a733] py-[30px] px-[10px] md:px-[25px] rounded-2xl shadow-2xl">


                    <h2 className="text-white text-[25px] font-bold mb-1"> My Skills  </h2>

                    <Progress />
                    <Progress />
                    <Progress />
                    <Progress />
                    <Progress />
                    <Progress />


                </div>

                <div className="w-full border-3 border-[#20f6a733] p-4 rounded-2xl shadow-2xl">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-2">
                        <a
                            href="/resume.pdf"
                            download="Sitaram_Prajapati_CV.pdf"
                            className="bg-blue-600 text-white w-full md:w-auto text-center px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-700 transition-all"
                        >
                            ⬇️ Download Resume
                        </a>

                        <a
                            href="resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white w-full md:w-auto text-center px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-700 transition-all"
                        >
                            📄 View Resume
                        </a>
                    </div>
                </div>



            </div>

        </>
    )
}


export default Resume; 