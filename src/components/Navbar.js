import { useState } from "react";
import {
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  ShieldCheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import MobileNavbar from "./MobileNavbar";

const solutions = [
  {
    name: "Websites & webshops",
    description:
      "Need a personal website or a webshop? Check out what we an do for you",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Web & native apps",
    description:
      "Discover the differences between native apps and web apps nad see which one best suits for your case",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Custom software",
    description:
      "Do you want a system tailormade for your company? Do you have a buissness process that could use improvement? Together we can tailor a solution for you",
    href: "#",
    icon: ShieldCheckIcon,
  },
];

const products = [
  {
    name: "Stock management system",
    description: "Stock management for flower bulb growers and arable farmers",
    href: "#",
    icon: LifebuoyIcon,
  },
];

const caseStudies = [
  {
    name: "Zabo Plant",
    description:
      "We helped Zabo Plant with a completely new website with a beatuful B2B-oriented webshop",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "DayleeCare",
    description:
      "DayleeCare is a new datcare center and needed a website for this. Together we looked at the right logo, house style and design.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Soccerdirectchat",
    description:
      "VoteballDirectChat is a concept within our company, they had a great idea for na application which is a completely new concept in the football world.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];

export default function Example() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative bg-white">
      <div className=" px-6">
        <div className="flex items-center justify-between border-gray-100 py-6  md:space-x-10">
          <div className="flex justify-start lg:w-14 lg:flex-none">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://www.byte24.nl/_next/static/images/logo1-a2a4ca110946359f6e371984edb0f273.png"
                alt=""
              />
            </a>
          </div>

          <div className="-my-2 -mr-2 hamburger-menu">
            <div
              onClick={() => setShowMenu(true)}
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
          <div className="navbar space-x-10 flex">
            <div className="relative nav-item-1">
              <div
                className={
                  "group inline-flex items-center rounded-md bg-white text-base hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                }
              >
                <span>Services</span>
                <ChevronDownIcon
                  className={
                    "ml-2 h-5 w-5 arrow-icon group-hover:text-gray-500"
                  }
                  aria-hidden="true"
                />
              </div>

              <div>
                <div className="absolute z-10 -ml-4 py-6 dropdown-1  w-screen max-w-md transform px-2 sm:px-0 ">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                        >
                          <item.icon
                            className="h-6 w-6 flex-shrink-0 text-indigo-600"
                            aria-hidden="true"
                          />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                      View all our services
                      <span aria-hidden="true"> &rarr;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative nav-item-2">
              <div
                className={
                  "group inline-flex items-center rounded-md bg-white text-base hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                }
              >
                <span>Products</span>
                <ChevronDownIcon
                  className={
                    "ml-2 h-5 w-5 arrow-icon-2 group-hover:text-gray-500"
                  }
                  aria-hidden="true"
                />
              </div>

              <div>
                <div className="absolute z-10 -ml-4 py-6 dropdown-2  w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {products.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                        >
                          <item.icon
                            className="h-6 w-6 flex-shrink-0 text-indigo-600"
                            aria-hidden="true"
                          />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                      View all our services{" "}
                      <span aria-hidden="true"> &rarr;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative nav-item-3">
              <div
                className={
                  "group inline-flex items-center rounded-md bg-white text-base hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                }
              >
                <span>Case studies</span>
                <ChevronDownIcon
                  className={
                    "ml-2 h-5 w-5 arrow-icon-3 group-hover:text-gray-500"
                  }
                  aria-hidden="true"
                />
              </div>

              <div>
                <div className="absolute z-10 -ml-4 py-6 dropdown-3  w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {caseStudies.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                        >
                          <item.icon
                            className="h-6 w-6 flex-shrink-0 text-indigo-600"
                            aria-hidden="true"
                          />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                      View all our services{" "}
                      <span aria-hidden="true"> &rarr;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="#" className="text-base text-gray-800 hover:text-gray-900">
              Blog
            </a>
            <a href="#" className="text-base text-gray-800 hover:text-gray-900">
              About us
            </a>
          </div>
          <div className="contact-buttons items-center justify-end md:flex md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap button-green-color  text-sky-50 px-12 py-3.5 box-shadow-blue"
            >
              Free consulation
            </a>
            <a
              href="#"
              className="ml-6 button-blue-color text-sky-50 px-8 py-3.5 box-shadow-green"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      {showMenu && (
        <div
          focus
          className="absolute z-20 inset-x-0 top-0 origin-top-right transform transition hamburger-dropdwon"
        >
          <div
            style={{ height: "100vh" }}
            className="divide-y-2 divide-gray-50 rounded-lg h-full bg-white shadow-lg ring-1 ring-black ring-opacity-5"
          >
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div></div>
                <div className="-mr-2">
                  <div
                    onClick={() => setShowMenu(false)}
                    className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <MobileNavbar />
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
