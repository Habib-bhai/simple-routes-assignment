import Navbar from "@/app/components/Navbar"
import Image from "next/image"
function Apparel() {
  return (
    <>
    <Navbar/>
    <div className="w-full h-screen md:mt-16 mt-4 flex gap-10 justify-center items-center  flex-wrap rounded-xl">
    <Image src={"/img5.jpg"} alt="shoes" width={500} height={500} className="rounded-xl"/>
    <Image src={"/img6.jpg"} alt="shoes" width={500} height={500} className="rounded-xl"/>
    <Image src={"/img7.jpg"} alt="shoes" width={500} height={500} className="rounded-xl"/>
    <Image src={"/img8.jpg"} alt="shoes" width={500} height={500} className="rounded-xl"/>
    </div>
    </>
  )
}

export default Apparel