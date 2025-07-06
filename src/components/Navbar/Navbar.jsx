import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { FaHome, FaUser } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export function NavbarDefault() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:text-2xl">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center justify-center gap-x-2 p-1 font-medium hover:cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r
  hover:from-stone-300 hover:via-violet-600 hover:to-teal-800 
  transition-all duration-500 delay-300"
            >
                <FaHome />
                <a href="#" className="flex items-center">
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center justify-center gap-x-2 p-1 font-medium hover:cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r
  hover:from-stone-300 hover:via-violet-600 hover:to-teal-800 
  transition-all duration-500 delay-300"
            >
                <IoDocumentText />
                <a href="#" className="flex items-center">
                    Project
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center justify-center gap-x-2 p-1 font-medium hover:cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r
  hover:from-stone-300 hover:via-violet-600 hover:to-teal-800 
  transition-all duration-500 delay-300"
            >
                <MdEmail />
                <a href="#" className="flex items-center">
                    Contact
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center justify-center gap-x-2 p-1 font-medium hover:cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r
  hover:from-stone-300 hover:via-violet-600 hover:to-teal-800 
  transition-all duration-500 delay-300"
            >
                <FaUser />
                <a href="#" className="flex items-center">
                    About
                </a>
            </Typography>
        </ul>
    );

    return (
        <Navbar
            className="sticky top-0 z-50 bg-white rounded-4xl shadow-2xl backdrop-blur-md mx-auto max-w-screen-xl px-4 py-2  lg:py-8 shadow-sm"
        >
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer py-1.5 font-bold hover:cursor-pointer"
                >
                    <div className="lg:text-4xl text-3xl bg-gradient-to-r from-stone-300 via-violet-600 to-teal-800 bg-clip-text text-transparent transition-all duration-500 hover:delay-300">
                        Deepak Chhantyal
                    </div>
                </Typography>
                <div className="hidden lg:block">{navList}</div>
                <div className="flex items-center gap-x-1">
                    <Button variant="text" size="sm" className="hidden lg:inline-block"></Button>
                    <Button variant="gradient" size="sm" className="hidden lg:inline-block"></Button>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden hover:cursor-pointer"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </IconButton>
            </div>

            <MobileNav open={openNav}>
                <div className="container mx-auto">{navList}</div>
            </MobileNav>
        </Navbar>

    );
}