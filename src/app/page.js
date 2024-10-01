"use client"
import { Card, Navbar, Canvas3D, NewsletterButton } from "./components";
import { cardsStyles } from "./styles/styles";

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
        <NewsletterButton />
      </section>

      <div id='products' className="w-full h-[150px] md:h-[50px] 2xl:h-[200px]" />
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

      <section id='contacts' className="flex flex-col md:flex-row items-center justify-center w-full pt-[80px] h-[1080px] md:h-[740px] px-[80px]">
        <div className="md:w-1/2 w-full h-full flex flex-col justify-start">
          <h1 className="font-bold text-4xl text-tertiary">Contatti</h1>
          <div className="mt-4">
            {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345098076!2d144.95543101545063!3d-37.81720974276995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5773ed2c605a2fc!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1635827776996!5m2!1sen!2sau"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe> */}
          </div>
        </div>

        <div className="md:w-1/2 w-full h-full flex flex-col justify-center">
          <form className="flex flex-col gap-8 justify-start md:pt-[120px] h-full">
            <div className="flex flex-row gap-2 w-full justify-between">
              <input
                type="text"
                placeholder="Nome"
                className={cardsStyles}
              />
              <input
                type="email"
                placeholder="Email"
                className={cardsStyles}
              />
            </div>
            <input
              type="object"
              placeholder="Oggetto"
              className={cardsStyles}
            />
            <textarea
              placeholder="Messaggio"
              className={cardsStyles}
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 w-full font-bold text-white bg-primary rounded-md hover:bg-primary-dark"
            >
              Invia
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}


export default Home