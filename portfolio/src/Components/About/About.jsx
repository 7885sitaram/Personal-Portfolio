import '../../App.css';
import Doing_Card from './Doing_Card';

const About = () => {

    let data = {

        icon : ["fa-solid fa-window-maximize" , "fa-solid fa-code", "fa-solid fa-mobile-screen", "fa-regular fa-handshake"] ,

        head : ['Web design' , 'Web development', 'Responsive Design', 'Collaboration'],

        content : ['Designing clean, attractive, and user-friendly website layouts that align with brand identity. I focus on creating visually interfaces using tools like Figma, Canva.',

            'Building modern, responsive, and high-performance websites using React.js, HTML, CSS, and JavaScript to deliver smooth and engaging user experiences.',

            'Creating layouts that adapt perfectly across desktops, tablets, and mobile devices using Tailwind CSS, Bootstrap, and media queries.',

            'Working with version control tools like Git & GitHub, and collaborating with designers, developers, and stakeholders to bring projects to life.'
        ]

    }

    return (
        <>


            <div className='flex flex-col items-center gap-10 h-full  '>

                {/* About Me */}

                <div className="bg-[#11224080]/10 backdrop-blur-sm  rounded-xl border-2 border-[#20f6a733] shadow-xl ">
                    <div className="w-full  py-[30px] px-[10px] md:px-[25px]  rounded-2xl shadow-2xl ">

                        <div className="">

                            <h2 className="text-[#ffffff] font-bold mb-1 text-[30px]">About Me</h2>
                            <h1 className="border-3 border-[#0cfdb4] w-[90px] mb-[16px]"></h1>

                            <div className=' text-gray-200 text-[17px]'>

                            <p>  I’m Sitaram Prajapati, a  <span className='font-bold text-[#0cfdb4] key'>Frontend Web Developer</span> who loves building clean, responsive, and user-friendly websites using <span className='key font-bold text-[#0cfdb4]'>React.js</span>. I’m skilled in technologies like <span className='key font-bold text-[#0cfdb4]'>HTML, CSS, JavaScript, React.js, Tailwind CSS, Bootstrap, and Git.</span>  I also have experience working with APIs, handling responsive design, and using tools like VS Code, Figma, and Chrome DevTools.</p>

                            <p className='mt-3'>I enjoy turning ideas into real web experiences that look great and work smoothly on all devices. I care about writing neat, efficient code and creating designs that are easy to use and visually appealing. I enjoy turning creative ideas into real web applications.For me, it’s not just about making things look good—it’s about solving problems and making the web better for everyone.</p>
                            </div>


                        </div>


                    </div>

                </div>
                

                {/* What i am doing */}

                 <div className="bg-[#11224080]/10 backdrop-blur-sm  rounded-xl border-2 border-[#20f6a733] shadow-xl ">
                 
                <div className="w-full  py-[30px] px-[10px] md:px-[25px] rounded-md shadow-xl">

                    <div className="">

                        <h2 className="text-white text-[32px] font-bold mb-1">What i am doing</h2>
                            <h1 className="border-3 border-[#0cfdb4] w-[90px] mb-[16px]"></h1>


                            

                        <div className="grid sm:grid-cols-2 grid-cols-1 h-full gap-4 max-w-8xl mx-auto py-3 px-1">
                            

                            <Doing_Card icon = {data.icon[0]}  head = {data.head[0]}  content = {data.content[0]} />
                            <Doing_Card icon = {data.icon[1]}  head = {data.head[1]}  content = {data.content[1]} />
                            <Doing_Card icon = {data.icon[2]}  head = {data.head[2]}  content = {data.content[2]} />
                            <Doing_Card icon = {data.icon[3]}  head = {data.head[3]}  content = {data.content[3]} />


                        </div>


                    </div>


                </div>
                 </div>

            </div>






        </>
    )
}



export default About;