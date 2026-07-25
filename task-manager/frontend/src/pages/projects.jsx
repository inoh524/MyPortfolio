import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CarouselDemo, CarouselDemo2, Intern } from "../Components/carousel.jsx";
import image2 from "../assets/arcon_products.png";
import image3 from "../assets/arcon_services.png";


function Project_page() {
    const navigate = useNavigate();
    const location = useLocation();
  useEffect(() => {
    if (location.hash === "#experience") {
      document
        .getElementById("experience")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    if (location.hash === "#project") {
      document
        .getElementById("project")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

    return (
        <main>
            <section>
                <div id="project" className="flex justify-center pt-40 pb-20">
                    <h1 className="text-white font-mono text-4xl">
                        Projects I have worked with <br />
                        <span className="flex text-xl justify-center">(present-previous)</span>
                    </h1>
                </div>
                <div className="">
                    <div className="flex items-center justify-center gap-20 my-10">
                        <div className="container w-max">
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="w-100 h-max" >
                                <CarouselDemo />
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="container font-mono text-white bg-[#163643] p-5 w-150 h-max"
                        >
                            <h1 className="text-xl">A-Rcon: <span className="text-[#00fffb]">A Web Based Sales Inventory And Service System With Markerless Augmented Reality </span><span className="text-sm">(2025-2026)</span></h1>
                            <p className="text-sm pt-3">
                                This project is dedicated to our client  <a
                                    href="https://www.facebook.com/profile.php?id=61568605542894"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#00fffb] hover:underline"
                                >
                                    Aircon-i Aircon and Appliance Trading
                                </a> which locates in bulacan.
                                This project aims to transition their traditional way of business processes, transaction, collaboration, management, inventory,
                                and handling overall business problems into a digital one with comfort and ease. This project is web based mobile responsive for portability
                                and able to use clients mobile devices for Augmented Reality feature.</p>
                        </motion.div>
                        <div onClick={() => navigate("/about")} className="hover:cursor-pointer ">
                            <ArrowRight
                                size={50}
                                className="text-[#00fffb] ml-3"
                            />
                            <h6 className="underline text-white text-sm">
                                Learn more
                            </h6>
                        </div>
                    </div>

                    {/* second slide */}

                    <div className="flex items-center justify-center gap-20 mb-10">
                        <div className="container w-max">
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="w-100 h-max"
                            >
                                <CarouselDemo2 />
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="container font-mono text-white bg-[#163643] p-5 text-xl w-150 h-max"
                        >
                            <h1 className="text-xl">Mobile Version of A-Rcon:
                                <span className="text-[#00fffb]"> A Web Based Sales Inventory And Service System With Markerless Augmented Reality </span>
                                <span className="text-sm">(2025 First phase of development)</span>
                            </h1>
                            <p className="text-sm pt-3">This was the first phase of our development, we tried the mobile first strategy using flutter 
                                framework with dart and we integrated here the 8th wall for AR Viewing of product. I handled the UI & UX deseign in this project, 
                                I created a wireframe first for the development to go smoothly using figma.</p>
                        </motion.div>
                        <div onClick={() => navigate("/about")} className="hover:cursor-pointer ">
                            <ArrowRight
                                size={50}
                                className="text-[#00fffb] ml-3"
                            />
                            <h6 className="underline text-white text-sm">
                                Learn more
                            </h6>
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div id="experience" className="flex justify-center pt-30 text-white font-mono">
                    <h1 className="text-4xl">
                        My Work Experience <br />
                        <span className="text-xl flex justify-center">(academic and non-academic)</span>
                    </h1>
                </div>
                <div className="flex items-center justify-center gap-20 mb-10">
                        <div className="container w-max">
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="w-100 h-max"
                            >
                                <Intern />
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="container font-mono text-white bg-[#163643] p-5 text-xl w-150 h-max"
                        >
                            <h1 className="text-xl">On-The-Job Training:
                                <span className="text-[#00fffb]"> Technical Support in Jeonsoft Corporation </span>
                                <span className="text-sm">(486 hours)</span>
                            </h1>
                            <p className="text-sm pt-3">Completed a Technical Support internship at Jeonsoft, where I repaired and maintained hardware, 
                                troubleshot software and hardware issues, tested biometric devices using their dedicated software, restored databases, 
                                maintained the Jeonsoft Payroll System (JPS), and operated JPS and PPH systems. I also prepared technical documentation, 
                                conducted audits, managed inventory, configured networks, handled client support calls, led interns, and contributed to 
                                improving office operations.</p>
                        </motion.div>
                        <div onClick={() => navigate("/experience")} className="hover:cursor-pointer ">
                            <ArrowRight
                                size={50}
                                className="text-[#00fffb] ml-3"
                            />
                            <h6 className="underline text-white text-sm">
                                Learn more
                            </h6>
                        </div>
                    </div>
            </section>
        </main>
    );
}
export default Project_page;