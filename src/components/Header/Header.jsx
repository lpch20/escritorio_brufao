import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'SERVICIOS', href: '#', current: false },
  { name: 'HISTORIA', href: '#', current: false },
  { name: 'CONTACTO', href: '#', current: false },
  { name: 'NUESTRO EQUIPO', href: '#', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className=" fixed top-0 left-0 right-0 z-50">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  {/* Logo a la izquierda */}
                  <div className="flex-shrink-0">
                    <img
                      className="h-12"
                      src="/logo2.jpg"
                      alt="Your Company"
                      
                    />
                  </div>
                  {/* Opciones de navegación a la derecha */}
                  <div className="hidden md:block">
                    <div className="ml-auto flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <a
                          style={{fontFamily: 'koulen', fontSize: '25px '}}   
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-custom-blue text-white'
                              : 'text-gray-300 hover:bg-custom-blue hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  {/* Botón de menú móvil */}
                  <div className="-mr-2 flex md:hidden">
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}
