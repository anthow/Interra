import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"



const IndexPage = ({ data }) => (

  <Layout>
    <Seo title="Accueil" />
    <section className=" w-10/12 md:w-7/12 flex flex-col pt-4 md:pt-0  m-auto md:grid grid-cols-6 gap-x-10 mb-10 ">
      <article className=" order-2 md:order-1 flex flex-col space-y-4 col-span-2 mb-8 md:mb-0">
        <h1 className=" text-xl text-vert-interra md:text-5xl  font-black">{data.datoCmsAccueil.titreHeader}</h1>
        <div  dangerouslySetInnerHTML={{ __html: data.datoCmsAccueil.texteHeader }} ></div>
      </article>
      <figure className="col-span-3 order-1 mb-5 md:mb-0 md-order-2">
        <StaticImage
          src="../images/pexels-thirdman.jpg"
          width={1000}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
        />      </figure>

      <div className="md:self-center flex md:flex-col md:place-items-center  order-3  space-x-2  md: space-x-0  items-center md: items-start md:space-y-2 ">
        <figure className="">
          <StaticImage
            src="../images/facebook-header.png"
            width={40}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
          />      </figure>
        <p className="text-green-700 font-bold"> Suivez-nous</p>
      </div>
    </section>


    <section className="bg-gray-300 ">
      <div className="w-10/12 md:w-7/12 m-auto py-20 md:grid grid-cols-5  gap-x-20 ">

      <GatsbyImage image={data.datoCmsAccueil.imagePartieDeux.gatsbyImageData} alt={data.datoCmsAccueil.imagePartieDeux.alt} className="w-full col-span-2" />

        <article className="col-span-3 md:w-10/12 m-auto">
          <h2 className=" text-2xl font-black text-center my-5 md:mt-0 md:mb-5">{data.datoCmsAccueil.titrePartieDeux}<br />  </h2>
            <div  dangerouslySetInnerHTML={{ __html: data.datoCmsAccueil.textePartieDeux }}></div>


          <button className=" mt-5 text-green-700 font-black border p-1 px-2 border-green-700 rounded hover:bg-green-700 hover:text-white"> Découvrir Interra </button>
        </article>
      </div>
    </section>

    <section className="bg-gray-300 pb-10 md:pb-0 ">
      <div className="w-10/12 md:w-7/12 m-auto">

        <h2 className=" text-2xl font-black  mb-10"> L'histoire de ...</h2>
        <div className="md:grid grid-cols-3  gap-x-5 ">
        <figure className=" ">
              <GatsbyImage image={data.datoCmsAccueil.imageHistoireDe.gatsbyImageData} alt={data.datoCmsAccueil.imageHistoireDe.alt} className="" />

            </figure>
            <article className="self-center flex flex-col justify-center">
            <div  dangerouslySetInnerHTML={{ __html: data.datoCmsHistoireDe.textePageDAccueil }} className="px-2 my-5 md:my text-center"></div>
            <Link to={/histoires/+ data.datoCmsHistoireDe.url} className="w-max m-auto">

                    <button className=" w-max m-auto md:mt-10 mb-10 md:mb-0 text-green-700 font-black border p-1 px-2 border-green-700 rounded hover:bg-green-700 hover:text-white"> Découvrir son histoire </button>
                    </Link>
                    <Link to="/histoires" className="w-max m-auto">
                    <button className=" w-max m-auto md:mt-10 mb-10 md:mb-0 text-green-700 font-black border p-1 px-2 border-green-700 rounded hover:bg-green-700 hover:text-white"> Voir toutes les histoires </button>
                    </Link>
                    </article>  
          <figure className=" ">
          <GatsbyImage image={data.datoCmsHistoireDe.imageAccueil.gatsbyImageData} alt={data.datoCmsHistoireDe.imageAccueil.alt} className="" />
   </figure>

        </div>
      </div>
    </section>
    <section className="w-10/12 md:w-7/12 m-auto">
    <h2 className=" text-2xl text-vert-interra font-black  my-10"> 
    Actus / Evenements</h2>
    <div className="md:grid grid-cols-3  gap-x-5 ">
      <article>
        <h3 className="text-lg mb-2 text-orange-interra font-semibold">{data.datoCmsAccueil.titreSAnceDInformation} </h3>
                      <div  dangerouslySetInnerHTML={{ __html: data.datoCmsAccueil.texteSAnceDInformation  }} className="mb-5"></div>

        <figure className=" mb-10 md:mb-0    ">

        <GatsbyImage image={data.datoCmsAccueil.imageSAnceDInformation.gatsbyImageData} alt={data.datoCmsAccueil.imageSAnceDInformation.alt} className="" />
  

                 </figure>
      </article>
      <article>
        <h3 className="text-lg text-orange-interra mb-2 font-semibold"> {data.datoCmsAccueil.titreAiderMigrant} </h3>
        <div  dangerouslySetInnerHTML={{ __html: data.datoCmsAccueil.texteAiderMigrant  }} className="mb-5"></div>
        <figure className=" mb-10 md:mb-0    ">
        <GatsbyImage image={data.datoCmsAccueil.imageAiderLesMigrants.gatsbyImageData} alt={data.datoCmsAccueil.imageAiderLesMigrants.alt} className="" />

               </figure>
      </article>
      <article className="flex flex-col">
        <h3 className="text-lg mb-2 text-orange-interra font-semibold"> {data.datoCmsAccueil.titreTiquette}</h3>
        <p className="mb-5">
        <div  dangerouslySetInnerHTML={{ __html: data.datoCmsAccueil.texteTiquette  }} className="mb-5"></div>

        </p>
        <div className=" flex  space-x-2">
        <figure className=" ">
        <GatsbyImage image={data.datoCmsAccueil.imageEtiquetteUn.gatsbyImageData} alt={data.datoCmsAccueil.imageEtiquetteUn.alt} className="" />

          </figure>
             <figure className=" ">
             <GatsbyImage image={data.datoCmsAccueil.imageEtiquetteDeux.gatsbyImageData} alt={data.datoCmsAccueil.imageEtiquetteDeux.alt} className="" />

          </figure>

            </div>
                      <button className="self-end  bg-yellow-500 mt-10 align-right text-white text-center md:font-black    mb-2 md:mb-0 p-1 hover:bg-yellow-400 ">Toutes nos actualités</button>

      </article>
</div>


</section>
<section className="w-12/12 md:w-7/12  m-auto md:grid grid-cols-3 mt-10 content-center">
  <article className="bg-gray-300 py-5 pl-5  "> 
  <h2 className=" text-2xl font-black  mb-5">  Agir avec nous</h2>
  <p>
Que serions-nous sans vous et votre générosité ? Ensemble offrons une seconde chance auxpersonnes qui en ont le plus besoin pour faire en sorte que l’immigration
 ne soit plus perçue comme une charge par la société d’accueil mais comme une richesse !

</p>
  </article>
  <article className="bg-gray-300 pr-5 pb-10 md:pb-0  "> 
  <ul className="flex flex-col justify-self-right items-center m-auto content-center self-center  md:pt-8  "> 
    <li> <button className="  mt-5 text-green-700 font-black border p-1 px-2 border-green-700 rounded hover:bg-green-700 hover:text-white"> faire un don </button></li>
    <li> <button className=" mt-5 text-green-700 font-black border p-1 px-2 border-green-700 rounded hover:bg-green-700 hover:text-white"> Devenir membre </button></li>
    <li> <button className=" mt-5 text-green-700 font-black border p-1 px-2 border-green-700 rounded hover:bg-green-700 hover:text-white"> Devenir bénévole </button></li>

  </ul>
</article>
</section>

  </Layout>
)

export const query = graphql`
  {
    datoCmsHistoireDe {
    textePageDAccueil
    url
    imageAccueil {
      gatsbyImageData
    }
  }
    datoCmsAccueil {
          titreTiquette
          titreSAnceDInformation
          titrePartieDeux
          titreHeader
          titreEntreprise
          titreAiderMigrant
          titreAgir
          texteTiquette
          texteSAnceDInformation
          textePartieDeux
          texteHeader
          texteEntreprise
          texteAiderMigrant
          texteAgir
          imageAgir {
            alt
            gatsbyImageData
          }
          imageAiderLesMigrants {
            alt
            gatsbyImageData
          }
          imageEtiquetteDeux {
            alt
            gatsbyImageData
          }
          imageEtiquetteUn {
            alt
            gatsbyImageData
          }
          imageHistoireDe {
            alt
            gatsbyImageData
          }
          imagePartieDeux {
            alt
            gatsbyImageData
            (width: 1000)
          }
          imageSAnceDInformation {
            alt
            gatsbyImageData
          }
        }
  }
`

export default IndexPage
