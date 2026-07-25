import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CarouselDemo } from "../Components/carousel.jsx";
import image2 from "../assets/arcon_products.png";
import image3 from "../assets/arcon_services.png";

function Experience_page() {
    const navigate = useNavigate();
    return (
        <main>
            <section>
                <div className="flex justify-center p-10">
                    <h1 className="text-white font-mono text-4xl">
                        My Work Experience <br />
                        <span className="flex text-xl justify-center">(academic & non-academic)</span>
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
                                <CarouselDemo/>
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
                </div>
            </section>

            <section>
                <div>
                    
                </div>
                <div>

                </div>
            </section>
        </main>
    );
}
export default Experience_page;