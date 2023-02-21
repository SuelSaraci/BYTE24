import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MobileNavbar() {
  return (
    <Popover className="relative bg-white">
      <div>
        <div>
          <Popover.Group as="nav" className=" flex flex-col gap-8">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "flex  items-center w-full justify-between bg-white text-base font-medium "
                    )}
                  >
                    <span>Services</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="">
                      <div className="">
                        <div className=" py-12">
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
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      " flex  items-center w-full justify-between rounded-md bg-white text-base font-medium"
                    )}
                  >
                    <span>Products</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="">
                      <div className="">
                        <div className=" py-12">
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
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "flex  items-center w-full justify-between rounded-md bg-white text-base font-medium "
                    )}
                  >
                    <span>Case studies</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Popover.Panel className="">
                    <div className="">
                      <div className=" py-12">
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
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>
            <a href="#" className="text-base text-gray-800 hover:text-gray-900">
              Blog
            </a>
            <a href="#" className="text-base text-gray-800 hover:text-gray-900">
              About us
            </a>

            <div className=" flex flex-col gap-4 justify-center items-center ">
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
          </Popover.Group>
        </div>
      </div>
    </Popover>
  );
}
