import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./header.css";

const navigation = [
  { name: "SERVICIOS", href: "#service" },
  { name: "HISTORIA", href: "#historia" },
  { name: "NUESTRO EQUIPO", href: "#nuestro-equipo" },
  { name: "CONTACTO", href: "#contacto" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImages = [
    "url(/image3.jpg)",
    "url(/image7.jpg)",
    "url(/image8.jpg)",
  ];

  const handleMobileMenuClick = (href) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Añade un pequeño retraso para asegurarte de que el menú se cierre antes de desplazarse
  };

  return (
    <div
      className="full-height"
      style={{
        backgroundImage: backgroundImages[currentSlide],
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <header className="absolute inset-x-2 lg:inset-x-18 top-0 z-50">
        <nav
          className="flex items-center justify-between pt-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex">
            <img
              className="h-14 w-90 lg:w-[340px] lg:h-[80px] xl:w-[408px] xl:h-[121px]"
              src="/Logo_FB.png"
              alt="Imagen del Logo de la Empresa"
            />
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className=" inline-flex items-center justify-center rounded-md  text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{ fontFamily: "koulen", backgroundColor: "4f87a0" }}
                className="custom-link text-2xl lg:text-xl md:text-lg xl:text-3xl font-semibold leading-6 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          className="lg:hidden w-64 z-50"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50" />
          <DialogPanel
            style={{ backgroundColor: "#1B2D78", position: "absolute", zIndex: 50 }}
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          >
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-14 w-90 lg:w-[340px] lg:h-[80px] xl:w-[408px] xl:h-[121px]"
                  src="/Logo_FB.png"
                  alt="Imagen del Logo de la Empresa"
                />
              </a>
              <button
                type="button"
                className="rounded-md  text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => handleMobileMenuClick(item.href)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="table-container max-w-7xl z-40">
        <div className="max-w-7xl">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={5000}
            showArrows={true}
            showThumbs={false}
            emulateTouch={true}
            onChange={(index) => setCurrentSlide(index)}
          >
            <div className="max-w-7xl">
              <div className="table-wrapper max-w-7xl">
                <h2
                  className="text-start text-3xl lg:text-5xl xl:text-6xl"
                  style={{
                    fontFamily: "koulen",
                    color: "white",
                    display: "inline-block",
                    marginBottom: "20px",
                    width: "100%",
                    textAlign: "start",
                  }}
                >
                  GANADO GORDO
                </h2>
                <table
                  className="h-[180px] lg:h-[280px] sm:h-[200px] xl:h-[280px]"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th
                        className="text-start"
                        style={{ fontFamily: "arial", color: "white" }}
                      >
                        A la carne
                      </th>
                      <th
                        className="text-center sm:text-center xl:text-center lg:text-center"
                        style={{ fontFamily: "arial", color: "white" }}
                      >
                        Semana Anterior
                      </th>
                      <th
                        className="text-center sm:text-center xl:text-center lg:text-center"
                        style={{ fontFamily: "arial", color: "white" }}
                      >
                        Semana 23
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg  text-start"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        NOVILLO
                      </td>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg  xl:text-center lg:text-center text-center"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        69
                      </td>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg xl:text-center lg:text-center  text-center"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        69
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg   text-start"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        VACAS
                      </td>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg  xl:text-center lg:text-center text-center"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        69
                      </td>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg  xl:text-center lg:text-center text-center"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        69
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg   text-start"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        VAQUILLONAS
                      </td>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg xl:text-center lg:text-center  text-center"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        69
                      </td>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg  xl:text-center lg:text-center text-center"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        69
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <div className="table-wrapper">
                <h2
                  className="text-start text-3xl lg:text-5xl xl:text-6xl"
                  style={{
                    fontFamily: "koulen",
                    color: "white",
                    display: "inline-block",
                    marginBottom: "20px",
                    width: "100%",
                    textAlign: "start",
                  }}
                >
                  REPOSICION
                </h2>
                <table
                  className="h-[180px] lg:h-[280px] sm:h-[200px] xl:h-[280px]"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th
                        className="text-start"
                        style={{ fontFamily: "arial", color: "white" }}
                      >
                        A la carne
                      </th>
                      <th
                        className="text-center sm:text-center xl:text-center lg:text-center"
                        style={{ fontFamily: "arial", color: "white" }}
                      >
                        Semana Anterior
                      </th>
                      <th
                        className="text-center sm:text-center xl:text-center lg:text-center"
                        style={{ fontFamily: "arial", color: "white" }}
                      >
                        Semana 23
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg  text-start"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        TERNERO
                      </td>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg  xl:text-center lg:text-center text-center"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        69
                      </td>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg xl:text-center lg:text-center  text-center"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        69
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg   text-start"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        TERNERA
                      </td>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg  xl:text-center lg:text-center text-center"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        69
                      </td>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg  xl:text-center lg:text-center text-center"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        69
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg   text-start"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        VACA DE INVERNADA
                      </td>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg xl:text-center lg:text-center  text-center"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        69
                      </td>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg  xl:text-center lg:text-center text-center"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        69
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <div className="table-wrapper">
                <h2
                  className="text-start text-3xl lg:text-5xl xl:text-6xl"
                  style={{
                    fontFamily: "koulen",
                    color: "white",
                    display: "inline-block",
                    marginBottom: "20px",
                    width: "100%",
                    textAlign: "start",
                  }}
                >
                  OVINOS
                </h2>
                <table
                  className="h-[180px] lg:h-[280px] sm:h-[200px] xl:h-[280px]"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th
                        className="text-start"
                        style={{ fontFamily: "arial", color: "white" }}
                      >
                        A la carne
                      </th>
                      <th
                        className="text-center sm:text-center xl:text-center lg:text-center"
                        style={{ fontFamily: "arial", color: "white" }}
                      >
                        Semana Anterior
                      </th>
                      <th
                        className="text-center sm:text-center xl:text-center lg:text-center"
                        style={{ fontFamily: "arial", color: "white" }}
                      >
                        Semana 23
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg  text-start"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        CORDEROS
                      </td>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg  xl:text-center lg:text-center text-center"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        69
                      </td>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg xl:text-center lg:text-center  text-center"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        69
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg   text-start"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        CAPONES
                      </td>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg  xl:text-center lg:text-center text-center"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        69
                      </td>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg  xl:text-center lg:text-center text-center"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        69
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg   text-start"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        OVEJAS
                      </td>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg xl:text-center lg:text-center  text-center"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        69
                      </td>
                      <td
                        className="xl:text-4xl lg:text-4xl sm:text-4xl text-lg  xl:text-center lg:text-center text-center"
                        style={{ fontFamily: "koulen", color: "white" }}
                      >
                        69
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
