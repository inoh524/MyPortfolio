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
            {/* PROJECTS */}
            <section>
                <div id="project" className="flex justify-center pt-40 px-4 text-center">
                    <h1 className="text-white font-mono text-3xl sm:text-4xl">
                        Projects I have worked with <br />
                        <span className="flex justify-center text-lg sm:text-xl">
                            (present-previous)
                        </span>
                    </h1>
                </div>

                <div>
                    {/* FIRST PROJECT */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 my-10 px-4">

                        {/* Carousel */}
                        <div className="w-full lg:w-max flex justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="w-full max-w-[400px] h-max"
                            >
                                <CarouselDemo />
                            </motion.div>
                        </div>

                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="font-mono text-white p-5 w-full max-w-[600px] h-max"
                        >
                            <h1 className="text-lg sm:text-xl">
                                A-Rcon:
                                <span className="text-[#00fffb]">
                                    {" "}A Web Based Sales Inventory And Service System With Markerless Augmented Reality{" "}
                                </span>
                                <span className="text-sm">(2025-2026)</span>
                            </h1>

                            <p className="text-sm pt-3 leading-relaxed">
                                This project is dedicated to our client{" "}
                                <a
                                    href="https://www.facebook.com/profile.php?id=61568605542894"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#00fffb] hover:underline"
                                >
                                    Aircon-i Aircon and Appliance Trading
                                </a>{" "}
                                which locates in bulacan. This project aims to transition
                                their traditional way of business processes, transaction,
                                collaboration, management, inventory, and handling overall
                                business problems into a digital one with comfort and ease.
                                This project is web based mobile responsive for portability
                                and able to use clients mobile devices for Augmented Reality
                                feature.
                            </p>
                        </motion.div>

                        {/* Learn More */}
                        <div
                            onClick={() => navigate("/about")}
                            className="hover:cursor-pointer flex flex-col items-center"
                        >
                            <ArrowRight
                                size={50}
                                className="text-[#00fffb] lg:ml-3 rotate-90 lg:rotate-0"
                            />
                            <h6 className="underline text-white text-sm">
                                Learn more
                            </h6>
                        </div>
                    </div>

                    {/* SECOND PROJECT */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 my-10 px-4">

                        {/* Carousel */}
                        <div className="w-full lg:w-max flex justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="w-full max-w-[400px] h-max"
                            >
                                <CarouselDemo2 />
                            </motion.div>
                        </div>

                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="font-mono text-white p-5 w-full max-w-[600px] h-max"
                        >
                            <h1 className="text-lg sm:text-xl">
                                Mobile Version of A-Rcon:
                                <span className="text-[#00fffb]">
                                    {" "}A Web Based Sales Inventory And Service System With Markerless Augmented Reality{" "}
                                </span>
                                <span className="text-sm">
                                    (2025 First phase of development)
                                </span>
                            </h1>

                            <p className="text-sm pt-3 leading-relaxed">
                                This was the first phase of our development, we tried the
                                mobile first strategy using flutter framework with dart and
                                we integrated here the 8th wall for AR Viewing of product.
                                I handled the UI & UX design in this project, I created a
                                wireframe first for the development to go smoothly using
                                figma.
                            </p>
                        </motion.div>

                        {/* Learn More */}
                        <div
                            onClick={() => navigate("/about")}
                            className="hover:cursor-pointer flex flex-col items-center"
                        >
                            <ArrowRight
                                size={50}
                                className="text-[#00fffb] lg:ml-3 rotate-90 lg:rotate-0"
                            />
                            <h6 className="underline text-white text-sm">
                                Learn more
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPERIENCE */}
            <section>
                <div
                    id="experience"
                    className="flex justify-center pt-30 pb-20 px-4 text-center text-white font-mono"
                >
                    <h1 className="text-3xl sm:text-4xl">
                        My Work Experience <br />
                        <span className="text-lg sm:text-xl flex justify-center">
                            (academic and non-academic)
                        </span>
                    </h1>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 mb-10 px-4">

                    {/* Internship Carousel */}
                    <div className="w-full lg:w-max flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="w-full max-w-[400px] h-max"
                        >
                            <Intern />
                        </motion.div>
                    </div>

                    {/* Internship Description */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="font-mono text-white p-5 w-full max-w-[600px] h-max"
                    >
                        <h1 className="text-lg sm:text-xl">
                            On-The-Job Training:
                            <span className="text-[#00fffb]">
                                {" "}Technical Support in Jeonsoft Corporation{" "}
                            </span>
                            <span className="text-sm">(486 hours)</span>
                        </h1>

                        <p className="text-sm pt-3 leading-relaxed">
                            Completed a Technical Support internship at Jeonsoft, where I
                            repaired and maintained hardware, troubleshot software and
                            hardware issues, tested biometric devices using their dedicated
                            software, restored databases, maintained the Jeonsoft Payroll
                            System (JPS), and operated JPS and PPH systems. I also prepared
                            technical documentation, conducted audits, managed inventory,
                            configured networks, handled client support calls, led interns,
                            and contributed to improving office operations.
                        </p>
                    </motion.div>

                    {/* Learn More */}
                    <div
                        onClick={() => navigate("/experience")}
                        className="hover:cursor-pointer flex flex-col items-center"
                    >
                        <ArrowRight
                            size={50}
                            className="text-[#00fffb] lg:ml-3 rotate-90 lg:rotate-0"
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