import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
     render() {
          return (
               <>
                    <nav className="bg-white shadow-lg">
                         <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
                              <div className="flex justify-start h-16">
                                   <div className="flex items-center justify-between w-[17%]">
                                        <div className="flex-shrink-0 flex items-center">
                                             <span className="ml-2 text-xl font-semibold text-gray-900">NewsPedia</span>
                                        </div>
                                   </div>

                                   <div className="hidden md:flex items-center justify-start space-x-8">
                                        <Link to="/" className="text-gray-800 hover:text-blue-600 px-2 py-2 text-md font-medium transition-colors duration-200">Home</Link>
                                        <Link to="/top-headlines" className="text-gray-800 hover:text-blue-600 px-2 py-2 text-md font-medium transition-colors duration-200">Top Headlines</Link>
                                        <Link to="/business" className="text-gray-800 hover:text-blue-600 px-2 py-2 text-md font-medium transition-colors duration-200">Business</Link>
                                        <Link to="/health" className="text-gray-800 hover:text-blue-600 px-2 py-2 text-md font-medium transition-colors duration-200">Health</Link>
                                        <Link to="/sports" className="text-gray-800 hover:text-blue-600 px-2 py-2 text-md font-medium transition-colors duration-200">Sports</Link>
                                        <Link to="/technology" className="text-gray-800 hover:text-blue-600 px-2 py-2 text-md font-medium transition-colors duration-200">Technology</Link>
                                        <Link to="/social" className="text-gray-800 hover:text-blue-600 px-2 py-2 text-md font-medium transition-colors duration-200">Social</Link>
                                        <Link to="/education" className="text-gray-800 hover:text-blue-600 px-2 py-2 text-md font-medium transition-colors duration-200">Education</Link>
                                        <Link to="/travelling" className="text-gray-800 hover:text-blue-600 px-2 py-2 text-md font-medium transition-colors duration-200">Travelling</Link>
                                   </div>

                                   

                                   <div className="md:hidden flex items-center">
                                        <button id="mobile-menu-button" className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2">
                                             <svg id="menu-icon" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                             </svg>
                                             <svg id="close-icon" className="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                             </svg>
                                        </button>
                                   </div>
                              </div>
                         </div>

                         <div id="mobile-menu" className="md:hidden hidden">
                              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                                   <a href="/" className="text-gray-900 block px-3 py-2 text-base font-medium hover:bg-gray-50 rounded-md">Home</a>
                                   <a href="/" className="text-gray-600 block px-3 py-2 text-base font-medium hover:bg-gray-50 rounded-md">About</a>
                                   <a href="/" className="text-gray-600 block px-3 py-2 text-base font-medium hover:bg-gray-50 rounded-md">Services</a>
                                   <a href="/" className="text-gray-600 block px-3 py-2 text-base font-medium hover:bg-gray-50 rounded-md">Portfolio</a>
                                   <a href="/" className="text-gray-600 block px-3 py-2 text-base font-medium hover:bg-gray-50 rounded-md">Contact</a>
                                   <div className="pt-2">
                                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                                             Get Started
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </nav>
               </>
          )
     }
}

export default Navbar;