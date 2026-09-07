import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getMe } from "../api/user_api";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [token, setToken] = useState(sessionStorage.getItem("token"));
    const [activeModal, setActiveModal] = useState(null);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const handleExperienceClick = () => {
        navigate("/#experience");
        setMenuOpen(false);
    };
    const handleProjectClick = () => {
        navigate("/#project");
        setMenuOpen(false);
    };

    useEffect(() => {
        const fetchUser = async () => {
            if (!token) {
                setUser(null);
                return;
            }

            try {
                const data = await getMe();
                setUser(data);
            } catch (err) {
                console.error(err);
                setUser(null);
            }
        };

        fetchUser();
    }, [token]);

    const handle_logout = () => {
        // Clear the authentication token
        sessionStorage.removeItem('token');
        setToken(null);
        setActiveModal(null);
        setMenuOpen(false);
        navigate("/login");
    }

    useEffect(() => { //this updates the token state whenever the auth-change event is triggered, ensuring that the Navbar reflects the current authentication status.
        const updateToken = () => {
            setToken(localStorage.getItem("token"));
        };
        window.addEventListener("auth-change", updateToken);
        return () => {
            window.removeEventListener("auth-change", updateToken);
        };
    }, []);

    // shared underline-hover style for nav links (used by both desktop and mobile menu)
    const navLinkClass = `relative text-white text-xl font-mono font-light hover:text-[#00fffb] 
        after:absolute
        after:left-0
        after:-bottom-1
        after:h-0.5
        after:w-0
        after:bg-[#00fffb]
        after:transition-all
        after:duration-300
        hover:after:w-full
        cursor-pointer`;

    const LoginModal = ({ mobile }) => (
        <div
            className={
                mobile
                    ? "mt-4 bg-white border border-gray-300 rounded-md shadow-lg p-4 w-64 relative"
                    : "absolute top-full right-0 bg-white border border-gray-300 rounded-md shadow-lg p-4 w-64 z-50"
            }
        >
            <button
                className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700 hover:cursor-pointer"
                onClick={() => setActiveModal(null)}
            >
                ×
            </button>
            <h5 className="font-bold text-red-600">"Made this just to try"</h5>
            <h3 className="font-bold">User Profile</h3>
            <div className="text-gray-600 pb-4">
                {token && user ? (
                    <p>Name: {user.first_name} {user.last_name}</p>
                ) : (
                    <p>No Account signed in</p>
                )}
            </div>
            <div className="flex flex-col gap-1">
                {!token && (
                    <a href="/register" className="text-blue-500 hover:text-blue-700">
                        Sign Up
                    </a>
                )}
                {token ? (
                    <button
                        onClick={handle_logout}
                        className="text-left text-red-500 hover:text-red-700 hover:cursor-pointer"
                    >
                        Logout
                    </button>
                ) : (
                    <a href="/login" className="text-blue-500 hover:text-blue-700">
                        Login
                    </a>
                )}
            </div>
        </div>
    );

    return (
        <div className="bg-[#01161f] relative flex justify-between md:justify-center items-center px-4 gap-4 md:gap-20 lg:gap-32 xl:gap-60">
            {/* logo */}
            <div className="px-2 md:px-10 lg:px-10 py-6">
                <a href="/" className="relative flex font-mono font-bold text-2xl md:text-3xl text-white hover:text-[#00fffb] 
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-0.5
                after:w-0
                after:bg-[#00fffb]
                after:transition-all
                after:duration-300
                hover:after:w-full
                cursor-pointer" >
                    Portfolio <a className="text-[#00fffb]">/</a>
                </a>
            </div>

            {/* Desktop nav - identical to original, only visible md and up */}
            <div className="hidden md:flex gap-12 px-4 md:px-10 lg:px-24 py-20 items-center">

                <a href="/about" className={navLinkClass}>
                    About
                </a>

                <a onClick={handleExperienceClick} className={navLinkClass}>
                    Experience
                </a>

                <a onClick={handleProjectClick} className={navLinkClass}>
                    Projects
                </a>

                <a href="/contact" className={navLinkClass}>
                    Contact
                </a>

                <div className="relative">
                    <a
                        className={navLinkClass}
                        onClick={() => setActiveModal(activeModal === 'user-profile' ? null : 'user-profile')}
                    >
                        Login
                    </a>

                    {activeModal === 'user-profile' && <LoginModal mobile={false} />}
                </div>
            </div>

            {/* Burger button - mobile only */}
            <button
                className="md:hidden text-white p-2 z-50"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile slide-down menu */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#01161f] border-t border-[#022534] flex flex-col items-center gap-6 py-8 shadow-lg z-40">
                    <a href="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                        About
                    </a>

                    <a onClick={handleExperienceClick} className={navLinkClass}>
                        Experience
                    </a>

                    <a onClick={handleProjectClick} className={navLinkClass}>
                        Projects
                    </a>

                    <a href="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                        Contact
                    </a>

                    <div className="relative flex flex-col items-center">
                        <a
                            className={navLinkClass}
                            onClick={() => setActiveModal(activeModal === 'user-profile' ? null : 'user-profile')}
                        >
                            Login
                        </a>

                        {activeModal === 'user-profile' && <LoginModal mobile={true} />}
                    </div>
                </div>
            )}
        </div>
    );

};

export default Navbar;
