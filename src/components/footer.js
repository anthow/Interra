import * as React from "react"
import Newsletter from "./forms/newsletter"

const Footer = ( ) => (
  <footer className="mt-20 bg-gray-300 py-5" >
       <section className="md:w-7/12 w-10/12 border-b pb-5 border-black  flex flex-col gap-x-20 m-auto md:grid grid-cols-4">
   <div className=" col-span-2 flex flex-col space-y-2">  
     <h3 className=" font-black ">Venez-nous parler de vos envies
       on s'occupera du reste ! </h3>
     <p>info@interra-asbl.be</p>
<p>
Avec le soutien de : <br/>
la Région Wallonne, la Fédération Wallonie Bruxelles, la Province de Liège, la Ville de Liège, Crélan Foundation, Vivre ensemble, la Fondation Roi Baudouin
</p>
      </div>
   <Newsletter className=""  />
   </section>
<section className="mt-5 md:w-7/12 w-10/12 space-y-4 md:space-y-0 flex flex-col md:flex-row m-auto justify-between">
<ul className="flex flex-col md:flex-row  md:space-x-2">
  <li>
<p>@ Interra - Tous droits réservés -</p>
</li>
<li>Politique de confidentalités</li>
</ul>
<ul className="flex flex-col md:flex-row md:space-x-4">
  <li>facebook</li>
  <li>Instagram</li>
  <li>linkedIn</li>
</ul>
</section>
  </footer>
)


export default Footer
