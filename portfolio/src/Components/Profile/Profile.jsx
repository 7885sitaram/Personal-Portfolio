import { Link } from 'react-router-dom';
import '../../App.css';


const Profile = () => {
    return (
        <>

            <div className='flex-col h-full items-center justify-center '>

                <div className="sm:p-[24px] p-[15px] bg-[rgb(17,34,64)] rounded-2xl profile-pad border-2 border-[#34d39933] ">

                    <div className="flex flex-col lg:flex-col sm:flex-row  gap-5  justify-center items-center">

                        <div className="img-wrapper w-[160px] mt-5 prof-img">
                            <img
                                class="profile-img"
                                src="/profile.jpg"
                                alt="Profile"
                            />
                        </div>


                        <div>
                            <h1 className="text-center mt-3 text-[25px]  md:text-[19px] lg:text-[25px]  font-bold text-white text-2xl mb-[10px]user">Sitaram Prajapati</h1>

                            <p
                                className="text-center text-[18px] md:text-[14px] lg:text-[18px]  rounded-md font-semibold mt-5 mb-[20px] transition-transform duration-1000 domain"
                                style={{
                                    WebkitTextStroke: '0.8px #0cfdb4',
                                    animation: 'colorCycleBorder 6s linear infinite, scalePulse 3s ease-in-out infinite'
                                }}
                            >
                                Frontend Developer
                            </p>


                            <div className='flex items-center justify-center mb-[16px] cv'>
                                <button className="py-[8px] px-4 rounded-md bg-[#0cfdb4] text-black text-center hover:bg-emerald-400 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                                    <a
                                        href="/resume.pdf"
                                        download="Sitaram_Prajapati_CV.pdf"
                                    >
                                        <h2 className='text-[17px] font-bold'>Download CV</h2>
                                    </a>
                                </button>
                            </div>


                        </div>


                    </div>

                    <div className='flex flex-col gap-5 mt-[18px]'>

                        <div className="flex  items-center gap-2 text-lg overflow-hidden ">

                            <i class="fa-solid fa-envelope text-[#0cfdb4]"></i>
                            <a className='text-white hover:text-[#20f6a8da]' href="mailto:sitaramprajapati.22.it@iite.indusuni.ac.in">sitaramprajapati3250@gmail.com</a>

                        </div>

                        <div className="flex  items-center gap-2 text-lg ">

                            <i class="fa-solid fa-link text-[#0cfdb4]"></i>
                            <a className='text-white hover:text-[#20f6a8da]' target='_blank' href="https://app.netlify.com/teams/sitaramprajapati-22-it/projects">Netlify (Live Projects)</a>

                        </div>

                        <div className="flex items-center gap-2 text-lg ">

                            <i class="fa-brands fa-github text-[#0cfdb4] text-xl"></i>
                            <a className='text-white hover:text-[#20f6a8da]' target='_blank' href="https://github.com/7885sitaram?tab=repositories">Github</a>

                        </div>
                        <div className="flex  items-center gap-2 text-lg">

                            <i class="fa-solid fa-phone text-[#0cfdb4]"></i>
                            <a className='text-white hover:text-[#20f6a8da]' href="tel:+919714406456">+91 9714406456</a>

                        </div>
                        <div className="flex  items-center gap-2 text-lg ">

                            <i class="fa-solid fa-calendar-days text-[#0cfdb4]"></i>
                            <p className='text-white hover:text-[#20f6a8da]'> Januery 31, 2005</p>

                        </div>
                        <div className="flex items-center gap-2 text-lg">

                            <i class="fa-solid fa-location-dot text-[#0cfdb4]"></i>
                            <p className='text-white hover:text-[#20f6a8da]'>Ahmedabad, Gujarat</p>

                        </div>

                    </div>

                    <div className='flex gap-5 justify-center items-center mt-6 text-[white] '>
                        <a href="https://github.com/7885sitaram"><i class="fa-brands fa-square-github  text-2xl"></i></a>
                        <i class="fa-brands fa-linkedin text-2xl"></i>
                        <a href="https://www.instagram.com/jigs_3115/" target='_blank'> <i class="fa-brands fa-square-instagram  text-2xl"></i></a>

                    </div>


                </div>
            </div>



        </>
    )
}


export default Profile;