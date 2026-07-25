import Project_page from "./projects.jsx";
import Content from "@/Components/content";
import Video from "../Components/Videos.jsx";
import image4 from "/src/assets/me.png";
import { CarouselDemo } from "../Components/carousel.jsx";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


function AnimatedCounter({ target, duration = 1500, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const element = counterRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentCount = Math.floor(progress * target);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, target, duration]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
}


function Landing_page() {
  const navigate = useNavigate();
  return (
    <main>
      <section className="flex justify-center pt-30">
        <div className="">
          {/* text */}
          <div className="font-mono text-white">
            <h1 className="text-4xl">
              {/* WELCOME TO MY PORTFOLIO WEBSITE! */}
            </h1>
          </div>

        </div>
      </section>

      <section className="flex justify-center relative z-10 overflow-hidden items-center mb-40">
        <div className="">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h1 className="text-[#00fffb] text-4xl font-mono ">
              Hello, I'm
            </h1>
            <h1 className="text-white text-7xl font-mono font-bold">
              MARCELINO
            </h1>
            <h2 className="text-white text-5xl font-bold">
              SUSANO
            </h2>
          </motion.div>
        </div>
        <div className="">
          <motion.img className="w-170" src={image4} alt="me"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} />
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h1 className="text-[#00fffb] text-4xl font-mono  ">
              Aspiring
            </h1>
            <h1 className="text-white text-7xl font-mono font-bold">
              WEB <span className="text-[#00fffb]">UI/UX</span>
            </h1>
            <h2 className="text-white text-5xl font-mono font-bold">
              DESIGNER
            </h2>
          </motion.div>
        </div>
      </section>



      <section className="flex items-center justify-center mb-10">
        <div className="flex gap-47">
          <div onClick={() => navigate("/projects")} className="group perspective-[1000px]">
            <div className="relative h-80 w-100 duration-700 transform-3d group-hover:transform-[rotateY(180deg)] hover:cursor-pointer">

              {/* Front */}
              <div className="absolute text-center inset-0 rounded-xl bg-[#163643] pt-25 backface-hidden text-white">
                <h1 className="text-6xl font-bold">
                  <AnimatedCounter target={4} suffix="" />
                </h1>
                <h3 className="text-2xl mt-4">
                  Projects Created
                </h3>
              </div>

              {/* Back */}
              <div className="absolute inset-0 rounded-xl bg-[#8bb1c0] p-7 text-black transform-[rotateY(180deg)] backface-hidden">
                <p className="text-xl p-5">
                  Have created multiple projects including school and personal projects.
                  Mainly focused on frontend and UI/UX design. Knowledgeable with REST API integration.
                </p>
              </div>

            </div>
          </div>

          <div onClick={() => navigate("/projects")} className="group perspective-[1000px]">
            <div className="relative h-80 w-100 duration-700 transform-3d group-hover:transform-[rotateY(180deg)] hover:cursor-pointer">

              {/* Front */}
              <div className="absolute text-center inset-0 rounded-xl bg-[#163643] pt-25 backface-hidden text-white">
                <h1 className="text-6xl font-bold">
                  <AnimatedCounter target={2} suffix="+" />
                </h1>
                <h3 className="text-2xl mt-4">
                  Years of Experience
                </h3>
              </div>

              {/* Back */}
              <div className="absolute inset-0 rounded-xl bg-[#8bb1c0] p-7 text-black transform-[rotateY(180deg)] backface-hidden">
                <p className="text-xl p-5">
                  2 years of personal and academic experience creating and building web applications. Knowledgeable with different languages, frameworks,
                  and programming concepts.
                </p>
              </div>

            </div>
          </div>

          <div onClick={() => navigate("/projects")} className="group perspective-[1000px]">
            <div className="relative h-80 w-100 duration-700 transform-3d group-hover:transform-[rotateY(180deg)] hover:cursor-pointer">

              {/* Front */}
              <div className="absolute text-center inset-0 rounded-xl bg-[#163643] pt-25 backface-hidden text-white">
                <h1 className="text-6xl font-bold">
                  <AnimatedCounter target={1} suffix="" />
                </h1>
                <h3 className="text-2xl mt-4">
                  Number of clients
                </h3>
              </div>

              {/* Back */}
              <div className="absolute inset-0 rounded-xl bg-[#8bb1c0] p-7 text-black transform-[rotateY(180deg)] backface-hidden">
                <p className="text-xl p-5">
                  Had one main client for our capstone project, <a
                    href="https://www.facebook.com/profile.php?id=61568605542894"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#001a9b] hover:underline"
                  >
                    Aircon-i Aircon and Appliance Trading
                  </a> at bulacan.
                  We transitioned their traditional way of business transaction, processes, and management into a digital with ease one.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      <section className="flex items-center justify-center gap-90 mb-50">
        <Project_page />
      </section>


    </main>

  );
}

export default Landing_page


{/* <div className="flex gap-5">
        <div className="flex w-1/3 scale-90 items-center justify-center gap-4">
            <CarouselDemo />
          <div>
            <Content />
           <Video />
          </div>
        </div> */}