import { Outlet, useLocation } from "react-router";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import '../../App.css';
import AnimatedBackground from "../Bg-Styles/AnimatedBackground";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useRef, useEffect } from "react";

const Layout = () => {
  
  const [showContent, setShowContent] = useState(false);
  const svgRef = useRef(null);
  const location = useLocation();
  const isInitialLoad = useRef(true); // Track initial load

  // Reset animation on refresh (but not on route changes)
  useEffect(() => {
    if (isInitialLoad.current) {
      sessionStorage.removeItem('hasSeenAnimation'); // Reset on refresh
      isInitialLoad.current = false;
    }
  }, []);

  useGSAP(() => {
    const hasSeenAnimation = sessionStorage.getItem('hasSeenAnimation');
    if (hasSeenAnimation) {
      setShowContent(true); // Skip animation if already seen in this session
      return;
    }

    const tl = gsap.timeline();
    let removed = false;

    tl.to(".vi-mask-group", {
      rotate: 10,
      ease: "power4.easeInOut",
      duration: 2,
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      onUpdate: function () {
        if (this.progress() >= 0.9 && !removed && svgRef.current) {
          gsap.to(svgRef.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              if (svgRef.current) {
                svgRef.current.style.display = 'none';
              }
              setShowContent(true);
              removed = true;
              sessionStorage.setItem('hasSeenAnimation', 'true'); // Mark as seen for this session
              this.kill();
            }
          });
        }
      },
    });
  }, [location.key]); // Re-run only when route key changes

  return (
    <>
      <div 
        ref={svgRef}
        className="flex justify-center items-center svg fixed top-0 left-0 bg-[#000] w-full z-[100] h-screen overflow-hidden"
        style={{ display: showContent ? 'none' : 'flex' }}
      >
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(0, 123, 255)" />
              <stop offset="100%" stopColor="rgb(0, 212, 255)" />
            </linearGradient>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="30"
                  textAnchor="middle"
                  fill="url(#blueGradient)"
                  stroke="#ffffff"
                  strokeWidth="1"
                  dominantBaseline="middle"
                  fontFamily="'Arial Black', sans-serif"
                  letterSpacing="3"
                >
                  SITARAM PRAJAPATI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <AnimatedBackground />
          </div>
          <div className="relative z-10">
            <Header />
            <div className="container mx-auto py-8 xl:px-9 px-3">
              <div className="gap-7 flex lg:flex-row flex-col lg:items-start items-center">
                <div className="w-full sm:max-w-[500px] md:max-w-[385px] xl:max-w-[28%] px-1 sm:px-0 mx-auto profile_struct md:mt-20 mt-5">
                  <Profile />
                </div>
                <div className="w-full md:mt-20 mt-5">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;