import Header from "../../components/Header/Header";
import CaruselHome from "../../components/CarouselHome/CarouselHome";

export default function Home() {
  return (
    <>
      <header>
        <CaruselHome></CaruselHome>
      </header>
      <main>
        <section
          className="pt-10 pb-10 md:pt-10 md:pb-10 inset-x-2 lg:inset-x-18 flex lg:flex-col md:flex-col gap-15 md:gap-15 flex-wrap justify-center md:justify-center md:flex-wrap lg:justify-around xl:flex-col xl:justify-around"
          style={{ backgroundColor: "#1d88a2", height: "100vh", width: "100%" }}
        >
          <div className="flex lg:flex-row xl:flex-row flex-col justify-around">
            <div className="text-center flex flex-col justify-center items-center">
              <img className="w-20 lg:w-40 xl:w-40" src="/mano.png" alt="" />
              <h3 className="pt-5">NEGOCIOS PARTICULARES</h3>
            </div>
            <div className="text-center flex flex-col justify-center items-center">
              <img className="w-20 lg:w-40 xl:w-40" src="/store.png" alt="" />
              <h3 className="pt-5">VENTAS A FRIGORÍFICO</h3>
            </div>
            <div className="text-center flex flex-col justify-center items-center">
              <img className="w-20 lg:w-40 xl:w-40" src="trabajo.png" alt="" />
              <h3 className="pt-5">
                VENTAS/ARRENDAMIENTOS DE CAMPOS Y PROPIEDADES
              </h3>
            </div>
          </div>
          <div className="flex lg:flex-row xl:flex-row flex-col justify-around">
            <div className="text-center flex flex-col justify-center items-center">
              <img className="w-20 lg:w-40 xl:w-40" src="/camion.png" alt="" />
              <h3 className="pt-5">TRANSPORTE DE GANADO</h3>
            </div>
            <div className="text-center flex flex-col justify-center items-center">
              <img className="w-20 lg:w-40 xl:w-40" src="shearing.png" alt="" />
              <h3 className="pt-5">VENTAS DE LANA</h3>
            </div>
            <div className="text-center flex flex-col justify-center items-center">
              <img className="w-20 lg:w-40 xl:w-40" src="/Lector.png" alt="" />
              <h3 className="pt-5">SERVICIO DE TRAZABLIDAD</h3>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
