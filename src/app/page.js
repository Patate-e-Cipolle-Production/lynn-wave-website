import Image from "next/image";
import { Card, Navbar, Canvas3D } from "./components";
import { esp32 } from "./assets";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-app-gradient justify center">
      <Navbar />
      <div id='about' />
      <section className="flex flex-col items-center justify-center w-full h-screen pb-12 z-0">
        <div className="flex flex-row items-center justify-center w-full h-full">
          <Card />
          <div className="flex items-center justify-center w-1/2 h-full">
            {/* <Image src={esp32} className="2xl:w-[550px] md:w-[450px]" /> */}
            <Canvas3D className="2xl:w-[550px] md:w-[450px]" />
          </div>
        </div>
        <div className="2xl:text-3xl md:text-2xl flex items-center justify-center bg-white text-tertiary rounded-2xl 2xl:w-[520px] 2xl:h-[100px] md:w-[380px] md:h-[70px] hover:bg-secondary shadow-default-card">
          Iscriviti alla newsletter
        </div>
      </section>
      <div id='products' />
      <section className="flex flex-row items-center justify-center w-full h-screen">
        <div className="flex items-center justify-center w-1/2 h-full">
          Mettere immagine qua
        </div>
        <Card />
      </section>
      <section className="flex flex-row items-center justify-center w-full h-screen">
        <div id='contacts' />
        Caio
      </section>
    </div>
  );
}
