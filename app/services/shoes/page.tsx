import Navbar from "@/app/components/Navbar"
import Image from "next/image"

function Shoes() {
  return (
    <>
    <Navbar/>
    <div className="w-full h-screen md:mt-16 mt-4 flex gap-10 justify-center items-center  flex-wrap rounded-xl">
    <Image src={"/img1(1).jpg"} alt="shoes" width={500} height={500} className="rounded-xl"/>
    <Image src={"/img1(2).jpg"} alt="shoes" width={500} height={500} className="rounded-xl"/>
    <Image src={"/img1(3).jpg"} alt="shoes" width={500} height={500} className="rounded-xl"/>
    <Image src={"/img1(4).jpg"} alt="shoes" width={500} height={500} className="rounded-xl"/>
    </div>

    </>
  )
}

export default Shoes