// import React from 'react'

// function Footer() {
//   return (
//     <div className='min-h-80 bg-violet-900 p-10 w-full grid grid-cols-[2fr_1fr_1fr_2fr] gap-4'>
//     <div className=""></div>
//     <div className=""></div>
//     <div className=""></div>
//     <div className=""></div>
//   </div>
  
  
  
  
//   )
// }

// export default Footer

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* E-CART Section */}
        <div>
          <h4 className="text-xl font-bold mb-4 flex items-center">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            E-CART
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            velit placeat quasi animi maxime natus vero aspernat blanditiis
            magni, molestias similique? Nescunt, aspernatur?
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">Links</h4>
          <ul>
            <li className="mb-2">
            <Link to={'/'}>  <p  className="hover:underline">Home</p></Link>
            </li>
            <li className="mb-2">
             <Link><p  className="hover:underline">Wishlist</p></Link> 
            </li>
            <li>
             <Link><p className="hover:underline">Cart</p></Link> <p className="hover:underline">Cart</p>
            </li>
          </ul>
        </div>

        {/* Guides Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">Guides</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">React</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">React Bootstrap</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Bootswatch</a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">Contact Us</h4>
          <form>
            <input
              type="email"
              placeholder="Email Id"
              className="w-full px-4 py-2 mb-4 rounded-md text-black"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md w-full"
            >
              Subscribe
            </button>
          </form>

          <div className="mt-4 flex justify-between space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              <FontAwesomeIcon icon={faTwitter  }  className="text-3xl "/>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FontAwesomeIcon icon={faLinkedin} className="text-3xl"/>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faFacebook} className="text-3xl"/>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FontAwesomeIcon icon={faInstagram} className="text-3xl"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;