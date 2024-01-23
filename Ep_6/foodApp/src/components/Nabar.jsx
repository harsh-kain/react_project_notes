/* eslint-disable no-unused-vars */
import { Fragment, useContext, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";

import { Link, NavLink } from 'react-router-dom'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import userContext from '../utils/userContext'
import { useSelector } from 'react-redux'
const callsToAction = [
    { name: 'Watch demo', to: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', to: '#', icon: PhoneIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const { loggedInUser } = useContext(userContext);

    // congiure my store using useSelector hook
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-full items-center  justify-between p-6 lg:px-8" aria-label="Global">

                <div className="flex lg:w-1/2 lg:flex-1 justify-start items-center px-10 ">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">#Kain</span>
                        <svg className="_8pSp-" viewBox="0 0 559 825" height="49" width="34" fill="#fc8019"><path fillRule="evenodd" clipRule="evenodd" d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z" fill="url(#paint0_linear_19447_66107)"></path><defs><linearGradient id="paint0_linear_19447_66107" x1="445.629" y1="63.8626" x2="160.773" y2="537.598" gradientUnits="userSpaceOnUse"><stop stopColor="#FF993A"></stop><stop offset="1" stopColor="#F15700"></stop></linearGradient></defs>
                        </svg>
                    </Link>
                    <p className='text-lg ml-24 border-b-2 font-extrabold border-gray-900 leading-6 text-gray-900'>Uttar Pardesh</p>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <Popover.Group className="hidden lg:flex lg:w-1/2 lg:gap-x-12">
                    <Link to="about" className="text-sm font-semibold leading-6 text-gray-900">
                        About
                    </Link>
                    <Link to="about" className="text-sm font-semibold leading-6 text-gray-900">
                        About
                    </Link>
                    <Link to="contact" className="text-sm font-semibold leading-6 text-gray-900">
                        Contact
                    </Link>
                    <Link to="grocery" className="text-sm font-semibold leading-6 text-gray-900">
                        Grocery
                    </Link>
                    <Link to="cart" className="text-sm font-semibold leading-6 text-gray-900">Cart
                        <span className='border-2 border-slate-600 p-1 m-1 text-black rounded-t-md'>{cartItems.length}</span>
                    </Link>

                </Popover.Group>
                {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">       
                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{loggedInUser}</button>

                </div> */}
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">#Kain</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    to="/about"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    About
                                </Link>
                                <Link
                                    to="/contact"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Contact
                                </Link>
                                <Link
                                    to="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    <span className='bg-slate-600 p-1 text-white rounded-md'><FaShoppingCart />{cartItems}</span>
                                </Link>
                                <Link
                                    to="/grocery"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Grocery
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link
                                    to="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
