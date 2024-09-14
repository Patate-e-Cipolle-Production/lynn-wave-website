import Image from "next/image";
import { Card, Navbar } from "./components";
import { esp32 } from "./assets";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-app-gradient justify center">
      <Navbar/>
      <div className="flex flex-col items-center justify-center w-full h-screen pb-12">
        <div className="flex flex-row items-center justify-center w-full h-full">
          <Card/>
          <div className="flex items-center justify-center w-1/2 h-full">
            <Image src={esp32} className="w-[550px]"/>
          </div>
        </div>
        <div className="text-3xl flex items-center justify-center bg-white text-tertiary rounded-2xl w-[520px] h-[100px] hover:bg-secondary shadow-default-card">
          Iscriviti alla newsletter
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full h-screen">
        <div className="flex items-center justify-center w-1/2 h-full">
          Mettere immagine qua
        </div>
        <Card/>
      </div>
    </div>
  );
}
