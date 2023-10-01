import { useState, useEffect } from 'react'
import './Header.css'
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import gdscLogo from '../../assets/gdsc-logo.png'

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal "
      >
        <a href="#home" className="flex items-center hover:shadow-lg hover:shadow-yellow-200">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#about" className="flex items-center hover:shadow-lg hover:shadow-blue-200">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#events" className="flex items-center hover:shadow-lg hover:shadow-red-200">
          Events
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#team" className="flex items-center hover:shadow-lg hover:shadow-green-200">
          Team
        </a>
      </Typography>
    </ul>
  );
  return (
    <header className='fixed top-0 shadow-md '>

      <Navbar className="z-10 h-full max-w-full rounded-none px-4 lg:px-8">
        <div className="flex items-center justify-between text-blue-gray-900 header">
          <div className='flex items-center'>
          <img className='w-16 h-auto' src={gdscLogo} alt="" />
          <h1 className='text-2xl ml-3'>GDSC-Providence</h1>

          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          <div className='bg-white p-2 bg-opacity-70'>
            {navList}
            </div>
        </MobileNav>
      </Navbar>




    </header>
  )
}

export default Header
