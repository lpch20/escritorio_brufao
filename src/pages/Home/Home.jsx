import Header from "../../components/Header/Header";
import CaruselHome from "../../components/CarouselHome/CarouselHome";
import HowAreYou from "../../components/HowAreYou/HowAreYou";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import FormContact from "../../components/FormContact/FormContact";
import CarouselServices from "../../components/CarouselServices/CarouselServices";

const features = [
  {
    name: "Advanced security",
    icon: "/mano.png",
  },
  {
    name: "Analytics",
    icon: "/store.png",
  },
  {
    name: "Automated workflows",
    icon: "/trabajo.png",
  },
  {
    name: "Cloud storage",
    icon: "/camion.png",
  },
  {
    name: "Customer support",
    icon: "/Lector.png",
  },
  {
    name: "Integrations",
    icon: "/shearing.png",
  },
];

export default function Home() {
  return (
    <>
      <header className="w-full p-0 m-0">
        <CaruselHome />
      </header>
      <main className="">
        {/* <section
          className="pt-10 pb-10 md:pt-10 md:pb-10 inset-x-2 lg:inset-x-18 flex lg:flex-col md:flex-col gap-15 lg:gap-15 md:gap-15 flex-wrap justify-center md:justify-center md:flex-wrap lg:justify-around xl:flex-col xl:justify-around"
          style={{ backgroundColor: "#1d88a2", height: "100vh", width: "100%" }}
        >
          <div className="flex lg:flex-row xl:flex-row flex-col justify-around">
            <div className="text-center flex flex-col justify-center items-center">
              <img className="w-16 lg:w-28 xl:w-40" src="/mano.png" alt="" />
              <h3 className="pt-5">NEGOCIOS PARTICULARES</h3>
            </div>
            <div className="text-center flex flex-col justify-center items-center">
              <img className="w-16 lg:w-28 xl:w-40" src="/store.png" alt="" />
              <h3 className="pt-5">VENTAS A FRIGORÍFICO</h3>
            </div>
            <div className="text-center flex flex-col justify-center items-center">
              <img className="w-16 lg:w-28 xl:w-40" src="trabajo.png" alt="" />
              <h3 className="pt-5">
                VENTAS/ARRENDAMIENTOS DE CAMPOS Y PROPIEDADES
              </h3>
            </div>
          </div>
          <div className="flex lg:flex-row xl:flex-row flex-col justify-around">
            <div className="text-center flex flex-col justify-center items-center">
              <img className="w-16 lg:w-28 xl:w-40" src="/camion.png" alt="" />
              <h3 className="pt-5">TRANSPORTE DE GANADO</h3>
            </div>
            <div className="text-center flex flex-col justify-center items-center">
              <img className="w-16 lg:w-28 xl:w-40" src="shearing.png" alt="" />
              <h3 className="pt-5">VENTAS DE LANA</h3>
            </div>
            <div className="text-center flex flex-col justify-center items-center">
              <img className="w-16 lg:w-28 xl:w-40" src="/Lector.png" alt="" />
              <h3 className="pt-5">SERVICIO DE TRAZABLIDAD</h3>
            </div>
          </div>
        </section> */}
        <section>
          {/* <div style={{backgroundColor: '#4E879F'}} className=" py-24 sm:py-32">
            <div  className="mx-auto max-w-7xl px-6 lg:px-8 p-10">
              <div className="mx-auto">
                <h2
                  style={{ fontFamily: "koulen", color:'white'}}
                  className="text-6xl xl:text-9xl"
                >
                  SERVICIOS
                </h2>
              </div>
              <div className="mx-auto mt-16 max-w-7xl ">
                <dl className="w-full grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3 lg:gap-y-16">
                  {features.map((feature) => (
                    <div
                      key={feature.name}
                      className="relative flex flex-col items-center w-full"
                    >
                      <div
                        style={{ backgroundColor: "#1b2e78" }}
                        className="flex h-40 w-full items-center justify-center rounded-lg bg-indigo-600 mb-4"
                      >
                        <img
                          src={feature.icon}
                          alt={feature.name}
                          className="h-16 w- rounded-lg"
                        />
                      </div>
                      <dt className="text-base font-semibold leading-7 text-gray-900 text-center w-full">
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-gray-600 text-center w-full">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div> */}
          <CarouselServices></CarouselServices>
        </section>

        <article
          className="pt-10 pb-10 inset-x-2 lg:inset-x-18 xl:flex flex-row px-24"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, rgba(79, 135, 160, 0), rgba(79, 135, 160, 0.6)), url("/camion.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "auto",
            width: "100%",
          }}
        >
          <div className="max-w-7xl flex flex-col xl:flex-row xl:m-auto">
            <div className="  xl:w-1/2 xl:flex xl:flex-col xl:items-center">
              <div className="w-full flex justify-center items-center flex-col">
                <img
                  className="w-full max-w-lg pb-10"
                  src="/logo_zaster.jpg"
                  alt=""
                />
                <table
                  style={{ backgroundColor: "rgba(79, 135, 160, 0.6)" }}
                  className="w-full max-w-lg border-collapse border border-gray-500"
                >
                  <thead style={{ color: "white" }}>
                    <tr>
                      <th className="border border-gray-600 px-4 py-2">
                        KILOGRAMOS
                      </th>
                      <th className="border border-gray-600 px-4 py-2">
                        CANTIDAD X METRO
                      </th>
                    </tr>
                  </thead>
                  <tbody style={{ color: "white", textAlign: "center" }}>
                    <tr>
                      <td className="border border-gray-600 px-4 py-2">
                        470/500
                      </td>
                      <td className="border border-gray-600 px-4 py-2">2</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 px-4 py-2">
                        450/470
                      </td>
                      <td className="border border-gray-600 px-4 py-2">2.1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 px-4 py-2">
                        420/450
                      </td>
                      <td className="border border-gray-600 px-4 py-2">2.2</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 px-4 py-2">
                        400/420
                      </td>
                      <td className="border border-gray-600 px-4 py-2">2.4</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 px-4 py-2">
                        370/400
                      </td>
                      <td className="border border-gray-600 px-4 py-2">2.5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 px-4 py-2">
                        350/370
                      </td>
                      <td className="border border-gray-600 px-4 py-2">2.6</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 px-4 py-2">
                        320/350
                      </td>
                      <td className="border border-gray-600 px-4 py-2">2.7</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 px-4 py-2">
                        300/320
                      </td>
                      <td className="border border-gray-600 px-4 py-2">2.9</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 px-4 py-2">
                        270/300
                      </td>
                      <td className="border border-gray-600 px-4 py-2">3.1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 px-4 py-2">
                        250/270
                      </td>
                      <td className="border border-gray-600 px-4 py-2">3.3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 px-4 py-2">
                        220/250
                      </td>
                      <td className="border border-gray-600 px-4 py-2">3.5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 px-4 py-2">
                        200/220
                      </td>
                      <td className="border border-gray-600 px-4 py-2">3.7</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 px-4 py-2">
                        180/200
                      </td>
                      <td className="border border-gray-600 px-4 py-2">4</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 px-4 py-2">
                        150/180
                      </td>
                      <td className="border border-gray-600 px-4 py-2">4.4</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 px-4 py-2">
                        120/150
                      </td>
                      <td className="border border-gray-600 px-4 py-2">4.7</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 px-4 py-2">
                        100/120
                      </td>
                      <td className="border border-gray-600 px-4 py-2">5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="xl:flex items-end hidden text-end">
              <h2
                className="xl:text-8xl"
                style={{
                  fontFamily: "koulen",
                  color: "white",
                  paddingLeft: "40px",
                }}
              >
                TRANSPORTE DE GANADO
              </h2>
            </div>
          </div>
        </article>
        <section
          id="historia"
          className="flex flex-col w-full px-24 py-24"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, rgba(79, 135, 160, 0), rgba(79, 135, 160, 0.6)), url("/image6.jpg")',
            height: "auto",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
          }}
        >
          <div className="max-w-7xl xl:flex xl:flex-col xl:items-center xl:m-auto xl:justify-center m-0 flex flex-col">
            <div className="pb-12 flex flex-col xl:items-start items-center w-full">
              <div className="w-1/2">
                <h2
                  style={{ fontFamily: "koulen" }}
                  className="xl:text-8xl text-8xl"
                >
                  MISIÓN
                </h2>
              </div>
              <div
                className="lg:w-1/2 lg:p-5 xl:w-1/2 xl:p-5 w-auto p-5"
                style={{
                  backgroundColor: "rgba(79, 135, 160, 0.6)",
                  borderRadius: "8px",
                }}
              >
                En Federico Brufao Negocios Rurales, nuestra misión es
                proporcionar soluciones integrales y personalizadas a lo largo
                de todas las etapas de la cadena productiva. Nos comprometemos a
                ser socios estratégicos de nuestros clientes, trabajando codo a
                codo para satisfacer sus necesidades específicas y contribuir al
                éxito y desarrollo sostenible del sector agropecuario en
                Uruguay.
              </div>
            </div>
            <div className="pb-12 flex flex-col  items-center xl:items-end w-full">
              <div className="w-1/2 ">
                <h2
                  style={{ fontFamily: "koulen" }}
                  className="xl:text-8xl text-8xl"
                >
                  VISIÓN
                </h2>
              </div>
              <div
                className="lg:w-1/2 lg:p-5 xl:w-1/2 xl:p-5 w-auto p-5"
                style={{
                  backgroundColor: "rgba(79, 135, 160, 0.6)",
                  borderRadius: "8px",
                }}
              >
                Nuestra visión es ser líderes en el sector de negocios rurales
                en Uruguay, reconocidos por nuestra capacidad de combinar la
                tradición y la confianza con las tecnologías e innovaciones más
                avanzadas. Aspiramos a expandir continuamente nuestra presencia
                y servicio, estableciendo relaciones duraderas y de mutuo
                beneficio con nuestros clientes en todo el país.
              </div>
            </div>
            <div className="pb-12 flex xl:items-start flex-col items-center w-full">
              <div className="xl:w-1/2 lg:w-1/2 w-auto ml-18.5">
                <h2
                  style={{ fontFamily: "koulen" }}
                  className="xl:text-8xl text-8xl"
                >
                  VALORES
                </h2>
              </div>
              <div
                className="lg:w-1/2 lg:p-5 xl:w-1/2 xl:p-5 w-auto p-5"
                style={{
                  backgroundColor: "rgba(79, 135, 160, 0.6)",
                  borderRadius: "8px",
                }}
              >
                Compromiso, innovación, confianza, experiencia, proximidad y
                sostenibilidad. Son los pilares que nos acompañan en nuestro día
                a día de trabajo, creemos en el excelente ambiente laboral como
                forma de crecimiento.
              </div>
            </div>
          </div>
        </section>
        <section id="nuestro-equipo">
          <HowAreYou></HowAreYou>
        </section>
        <section id="contacto">
          <FormContact></FormContact>
        </section>
      </main>
      <footer className=" bg-white rounded-lg shadow dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
