import Image from "next/image"
import Navbar from "../components/Navbar"
import Link from "next/link"

function Services() {
    return (
        <>
                <Navbar />
             <div className="h-full w-screen flex flex-col gap-20 justify-center items-center mt-16 md:px-[10rem] overflow-x-hidden">
                <div className=" md:h-screen md:w-full h-auto w-full flex md:flex-nowrap flex-wrap md:gap-8 justify-center items-center ">
                    <div>
                        <h1 className="font-bold md:text-4xl text-2xl ">FOOTWARES</h1>
                        <p className="md:mt-2 mb-4 md:text-xl text-[12px] md:tracking-[10px] tracking-[5px]">WALK WITH THE BEST</p>
                    </div>
                    <div className="img overflow-hidden rounded-2xl">
                       <Link href={"/services/shoes"}> <Image src={"/shoes.jpg"} alt="shoes" width={500} height={500} className="h-64 w-72 md:w-[500px] md:h-[400px] transition transform duration-500 ease-out hover:scale-125 rounded-2xl " /></Link>
                    </div>

                 </div>

                    <div className=" h-full w-full flex md:flex-nowrap flex-wrap justify-center md:gap-8 items-center">
                    <div className="img overflow-hidden rounded-2xl">
                    <Link href={"/services/apparel"}><Image src={"/hoodies.jpeg"} alt="shoes" width={500} height={500} className="h-64 w-72 md:w-[500px] md:h-[500px] transition transform duration-500 ease-out hover:scale-125 rounded-2xl " /></Link>
                    </div>
                    <div>
                        <h1 className="font-bold mt-4  md:text-4xl text-2xl ">APPARELS</h1>
                        <p className="md:mt-2 md:text-xl text-[12px] md:tracking-[10px] tracking-[5px]">LOOK THE BEST OF YOU</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services