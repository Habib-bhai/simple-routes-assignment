"use client"
import Link from "next/link"
import { useState } from "react"

function Navbar() {
  // return (
  //   <nav className="absolute top-3 w-full flex justify-between items-center px-5 z-10">
  //     <Link href={"/"}><h1 className="md:text-4xl text-xl font-bold md:tracking-[10px] tracking-[5px] text-gray-100"> B H .</h1></Link>
  //     <div>
  //       <ul className="md:text-[16px] text-[12px] flex justify-center items-center md:gap-10 gap-4 md:tracking-[1px] font-serif font-light ">
  //         <Link href={"/about"} className="hover:underline hover:text-blue-500"><li>About</li></Link>
  //         <Link href={"/contact"} className="hover:underline hover:text-blue-500"><li>Contact</li></Link>
  //         <Link href={"/services"} className="hover:underline hover:text-blue-500"><li>Services</li></Link>
  //       </ul>import Link from "next/link";
        
      
         const [isOpen, setIsOpen] = useState(false) 
        
          return (
            <nav className="absolute top-3 w-[100%] flex justify-between items-center px-5 z-10">
              <Link href={"/"}>
                <h1 className="md:text-4xl text-xl font-bold md:tracking-[10px] tracking-[5px] text-gray-100">
                  B H .
                </h1>
              </Link>
              <div className="hidden md:flex">
                <ul className="md:text-[16px] text-[12px] flex justify-center items-center md:gap-10 gap-4 md:tracking-[1px] font-serif font-light">
                  <Link href={"/about"} className="hover:underline hover:text-blue-500">
                    <li>About</li>
                  </Link>
                  <Link href={"/contact"} className="hover:underline hover:text-blue-500">
                    <li>Contact</li>
                  </Link>
                  <Link href={"/services"} className="hover:underline hover:text-blue-500">
                    <li>Services</li>
                  </Link>
                </ul>
              </div>

              <div className="md:hidden flex justify-end">
                <button
                  className="p-2 rounded-full hover:bg-gray-400 backdrop-blur-md"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
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
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {isOpen && (
                <div className="absolute top-full left-0 w-full bg-gray-300/50 backdrop-blur-md shadow-md p-4">
                  <ul>
                    <Link href={"/about"}>
                      <li className="py-2 hover:underline hover:text-blue-500">About</li>
                    </Link>
                    <Link href={"/contact"}>
                      <li className="py-2 hover:underline hover:text-blue-500">Contact</li>
                    </Link>
                    <Link href={"/services"}>
                      <li className="py-2 hover:underline hover:text-blue-500">Services</li>
                    </Link>
                  </ul>
                </div>
              )}
            </nav>
          );
        }
        
        export default Navbar;
//       </div>

//     </nav>
//   )
// }

// export default Navbar