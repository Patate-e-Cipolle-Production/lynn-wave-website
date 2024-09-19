import Image from "next/image";
import { Card, Navbar, Canvas3D } from "./components";
import { esp32 } from "./assets";


const Home = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-app-gradient justify center">
      <div id='about' />
      <section className="z-0 flex flex-col items-center justify-center w-full px-10 md:h-screen sm:px-0">
        <div className="flex flex-col-reverse items-center justify-center w-full 2xl:h-full h-[500px] pb-12 lg:flex-row ">
          <Card />
          <div className="flex items-center justify-center w-full h-full md:w-1/2">
            {/* <Canvas3D className="2xl:w-[550px] md:w-[450px] w-full" /> */}
          </div>
        </div>
        <div className="2xl:text-3xl text-2xl flex items-center justify-center bg-white text-tertiary md:rounded-2xl rounded-xl 2xl:w-[520px] 2xl:h-[100px] md:w-[380px] md:h-[70px] w-full h-[100px] hover:bg-secondary shadow-default-card">
          Iscriviti alla newsletter
        </div>
      </section>
      <div id='products' />
      <section className="flex flex-col items-center justify-center w-full h-screen px-10 pb-12 lg:flex-row sm:px-0">
      <div className="flex flex-col-reverse items-center justify-center w-full 2xl:h-full h-[500px] pb-12 lg:flex-row ">
          <Card />
          <div className="flex items-center justify-center w-full h-full md:w-1/2">
            <Canvas3D className="2xl:w-[550px] md:w-[450px] w-full" />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full h-screen px-10 pb-12 lg:flex-row sm:px-0">
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


export default Home