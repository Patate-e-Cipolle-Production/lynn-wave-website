"use client"
import { Card, Navbar, Canvas3D, NewsletterButton } from "./components";

const Home = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-app-gradient justify center">
      <div id='about' />
      <section className="z-0 flex flex-col items-center justify-center w-full px-10 md:h-screen sm:px-0">
        <div className="flex flex-col-reverse items-center justify-center w-full h-[500px] 2xl:h-[700px] pb-12 lg:flex-row ">
          <Card />
          <div className="flex items-center justify-center w-full h-full md:w-1/2">
            {/* <Canvas3D className="2xl:w-[550px] md:w-[450px] w-full" /> */}
          </div>
        </div>
        <NewsletterButton/>
      </section>

      <div id='products'  className="w-full h-[150px] md:h-[50px] 2xl:h-[200px]"/>
      <section className="z-0 flex flex-col gap-[200px] md:gap-0 items-center justify-center w-full h-full px-10 pb-12 sm:px-0">
        <div className="flex flex-col-reverse items-center justify-center w-full 2xl:h-full h-[500px] pb-12 lg:flex-row ">
          <Card />
          <div className="flex items-center justify-center w-full h-full 2xl:h-[500px] md:w-1/2">
            <Canvas3D className="2xl:w-[550px] 2xl:h-full md:w-[450px] w-full " />
          </div>
        </div>
        <div className="flex flex-col-reverse items-center justify-center w-full 2xl:h-full h-[500px] pb-12 lg:flex-row">
          <div className="flex items-center justify-center w-1/2 h-full">
            Mettere immagine qua
          </div>
          <Card />
        </div>
      </section>

      <section div id='contacts' className="flex flex-col md:flex-row items-center justify-center w-full pt-[80px] h-[780px] px-[80px]">
        <div className="md:w-1/2 w-full h-full flex flex-col justify-start">
          <h1 className="font-bold text-4xl text-tertiary">Contatti</h1>
          <div>
            {/* //TODO Map contatti */}
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center">
          {/* //TODO form */}
        </div>
      </section>
    </div>
  );
}


export default Home