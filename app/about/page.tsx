import Image from "next/image"
import Navbar from "../components/Navbar"

function About() {
    return (
        <>
            <Navbar />
            <div className="w-full h-screen flex md:flex-nowrap flex-wrap justify-between items-center">

                <Image src={"/aboutUsSection.jpg"} alt="about" width={850} height={500}  />

                <div className="flex flex-col items-start justify-center h-full w-full p-8 bg-gray-300 text-black">
                    <h1 className="font-bold text-4xl">ABOUT US</h1>
                    <p className="text-base mt-4">B H . is a powerful collective of perfectionists. We design quality wardrobe essentials. Our style never changes. It evolves. Clean and mature, that’s our way of life. It’s our code.</p>
                </div>
            </div>
        </>
    )
}

export default About