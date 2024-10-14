import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";



export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex md:flex-nowrap flex-wrap justify-between items-center">
        <Image src={"/heroSection.jpg"} alt="home" width={850} height={500} className="opacity-60 md:h-[568px]" />
        <div className="flex flex-col items-start justify-center h-full w-full p-8 bg-gray-300 text-black">
          <h3 className="font-bold text-lg">Made to last.</h3>
          <h1 className="font-bold text-4xl leading-tight mt-4">The new definition of deluxe.</h1>
          <p className="text-base mt-4">Transition your style.</p>
         <Link href={"/contact"} className="underline text-base mt-4">Shop All</Link>
        </div>

      </div>
    </>
  );
}
