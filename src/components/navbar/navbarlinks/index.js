// NavbarLink.js

import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const NavbarLinks = () => {
  return (
    <div className=" w-auto flex flex-col ">
      <nav name="presse" className=" order-2 md:order-1  md:col-span-2 md:items-center md:self-end md:justify-self-end">
        <ul className="md:items-center m-auto  md:flex md:content-start flex-col md:flex-row md:space-x-4">
          <li className=" w-auto text-center mb-2 md:mb-0  hover:text-yellow-500 ">Presse</li>
          <li className="bg-vert-interra text-white text-center md:font-black  md:w-auto m-auto  mb-2 md:mb-0 p-1 hover:opacity-70 ">Faire un don</li>
          <li className="bg-yellow-500 text-white text-center md:font-black  md:w-auto m-auto  mb-2 md:mb-0 p-1 hover:opacity-70 ">Devenir membre</li>
          <li className="w-auto text-center mb-2 md:mb-0  m-auto">
            <a href="https://api.whatsapp.com/send?phone=0032471583411" rel="noreferrer" target="_blank" >
              <figure className="">
                <StaticImage
                  src="../../../images/whatsapp.png"
                  width={40}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="bouton whatsapp"
                />      </figure>
            </a>

          </li>

        </ul>
      </nav>
      <nav name="menu" className="mt-5 order-1 md:order-2 mb-10 md:mb-0 ">
        <ul className=" text-m  flex-col md:flex-row md:flex  m-auto md:space-x-7 ">
          <Link to="/">
            <li className="hover:text-yellow-500 text-center mb-2 md:mb-0 ">Accueil</li>
          </Link>
          <li className="text-center mb-2">
            <div class="dropdown inline-block relative">
              <button class="  hover:text-yellow-500 text-center  md:mb-0   rounded inline-flex items-center">
                <Link to="/decouvrir-interra">
                  Découvrir Interra
                </Link>
                <svg class="fill-current h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
              </button>
              <ul class="dropdown-menu absolute hidden z-50 bg-white  text-gray-700  p-2 pt-3">

                <li className="hover:text-yellow-500 text-center mb-2 "> Notre ADN</li>
                <li className="hover:text-yellow-500 text-center mb-2 "> Nos missions </li>
                <li className="hover:text-yellow-500 text-center mb-2"> Nos valeurs</li>
                <li className="hover:text-yellow-500 text-center mb-2"> Nos partenaires</li>
                <li className="hover:text-yellow-500 text-center mb-2"> ils parlent de nous</li>


              </ul>
            </div>
          </li>

          <li className="text-center mb-2">
            <div class="dropdown inline-block m-auto relative">
              <button class="  hover:text-yellow-500 text-center    rounded inline-flex items-center">
                <Link to="/projets">Projets </Link>
                <svg class="fill-current h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
              </button>
              <ul class="dropdown-menu absolute hidden z-50 bg-white pt-3 py-2 text-gray-700  p-2 pt-3">
                <Link to="/inter-act">
                  <li className="hover:text-yellow-500 text-center mb-2 "> Inter-act</li>
                </Link>
                <Link to="/duo-langue">
                  <li className="hover:text-yellow-500 text-center mb-2 "> Duo langue </li>
                </Link>
                <Link to="/incubateur-inclusif">
                  <li className="hover:text-yellow-500 text-center mb-2"> Incubateur inclusif </li>
                </Link>
                <Link to="/formation-interculturelle">
                  <li className="hover:text-yellow-500 text-center mb-2"> Formation Interculturelle </li>
                </Link>

              </ul>
            </div>
          </li>
          <li className="hover:text-yellow-500 text-center mb-2 md:mb-0"> Agenda </li>
          <li className="text-center mb-2">
            <div class="dropdown inline-block relative">
              <button class="  hover:text-yellow-500 text-center mb-2 md:mb-0   rounded inline-flex items-center">
                <Link to="/boutique">
                  Agir avec nous              </Link>
                <svg class="fill-current h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
              </button>
              <ul class="dropdown-menu absolute hidden z-50 bg-white pt-3 text-gray-700  pt-1">

                <li className="hover:text-yellow-500 text-center mb-2 ">  faire un don </li>
                <li className="hover:text-yellow-500 text-center mb-2 "> Devenir membre  </li>
                <li className="hover:text-yellow-500 text-center mb-2"> Devenir bénévole </li>
                <li className="hover:text-yellow-500 text-center mb-2"> Devenir talent Interra </li>


              </ul>
            </div>
          </li>
          <li className="hover:text-yellow-500 text-center mb-2 md:mb-0"> contact</li>
        </ul>
      </nav>

    </div>
  )
}

export default NavbarLinks