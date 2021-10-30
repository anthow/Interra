import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"

const DecouvrirPage = ({ data }) => (
    <Layout className="">
        <Seo title="Découvrir Interra" />
        <div className="w-12/12">
            <article className="w-10/12 md:w-7/12 my-10   m-auto">
                <h1 className="font-black text-4xl mb-10 text-vert-interra  bg-white text-center"> {data.datoCmsDecouvrirInterra.titreAdn}</h1>
                <section className="md:grid grid-cols-2 grid-rows-2 gap-x-10 mb-10">
                    <figure className="row-span-2">
                        <GatsbyImage image={data.datoCmsDecouvrirInterra.imageAdn.gatsbyImageData} alt={data.datoCmsDecouvrirInterra.imageAdn.alt} className="" />

                    </figure>
                    <div>
                        <h2 className="mb-5 text-2xl text-orange-interra">{data.datoCmsDecouvrirInterra.titreQuiSommesNous}</h2>

                            <div dangerouslySetInnerHTML={{ __html: data.datoCmsDecouvrirInterra.texteQuiSommesNous }} className=""></div>

                    </div>

                    <div className="">
                        <h2 className="mb-5 text-orange-interra text-2xl">{data.datoCmsDecouvrirInterra.deuxConstats}
                        </h2 >
                        <p>
                         
                            <div dangerouslySetInnerHTML={{ __html: data.datoCmsDecouvrirInterra.texteDeuxConstatsUn }} className=""></div>

                        </p>
                    </div>
                </section>
                <section>
                <div dangerouslySetInnerHTML={{ __html: data.datoCmsDecouvrirInterra.texteDeuxConstatsDeux }} className=""></div>

                </section>
                <section className=" w-10/12 md:w-8/12 bg-orange-interra py-1  text-white  m-auto  my-10">
                <div dangerouslySetInnerHTML={{ __html: data.datoCmsDecouvrirInterra.listeDeuxConstats }} className="w-12/12"></div>

                </section>
                <section className=" m-auto md:grid grid-cols-2  gap-x-10 my-20">
                    <div className="flex flex-col space-y-10">
                        <h2 className="text-2xl text-orange-interra"> {data.datoCmsDecouvrirInterra.titreLien}</h2>
                        <div dangerouslySetInnerHTML={{ __html: data.datoCmsDecouvrirInterra.texteLien }} className=""></div>

                        <div dangerouslySetInnerHTML={{ __html: data.datoCmsDecouvrirInterra.listeLien }} className=""></div>


                    </div>

                    <figure className="">
                    <GatsbyImage image={data.datoCmsDecouvrirInterra.imageLien.gatsbyImageData} alt={data.datoCmsDecouvrirInterra.imageLien.alt} className="h-full" />
                    </figure>
                </section>
                <div dangerouslySetInnerHTML={{ __html: data.datoCmsDecouvrirInterra.phraseLien }} className="font-black text-xl text-vert-interra m-auto text-center mb-20"></div>

            </article >

            <article className="w-full bg-vert-interra text-white py-5 md:py-20 h-12/12 ">
                <h1 className="font-white text-4xl mb-10 font-black  text-center"> {data.datoCmsDecouvrirInterra.titreNosMissions} </h1>
                <section className="md:grid grid-cols-2 w-10/12 md:w-7/12 m-auto  gap-x-10 mb-10">
                    <figure className="">
                    <GatsbyImage image={data.datoCmsDecouvrirInterra.imageMission.gatsbyImageData} alt={data.datoCmsDecouvrirInterra.imageMission.alt} className="" />
                    </figure>
                    <div dangerouslySetInnerHTML={{ __html: data.datoCmsDecouvrirInterra.texteNosMissions }} className=""></div>


                </section>

            </article>
            <article className="w-10/12 md:w-7/12 py-5 md:py-20    m-auto">
                <h1 className="font-black text-4xl mb-10  bg-white text-center text-vert-interra">  {data.datoCmsDecouvrirInterra.titreValeurs} </h1>
                <section className="md:grid grid-cols-2 grid-rows-2 gap-x-10 mb-10">
                    <figure className="row-span-2 mb-10 md:mb-0">
                    <GatsbyImage image={data.datoCmsDecouvrirInterra.imageValeurs.gatsbyImageData} alt={data.datoCmsDecouvrirInterra.imageValeurs.alt} className="h-full" />
                    </figure>
                        <div dangerouslySetInnerHTML={{ __html: data.datoCmsDecouvrirInterra.listeValeurs }} className="p-1  flex flex-col space-y-2  bg-orange-interra text-center font-black text-white place-content-center mb-10"></div>
                    <div className="flex flex-col ">
                        <h2 className="text-2xl text-orange-interra mb-5"> {data.datoCmsDecouvrirInterra.titrePourquoiInterra} </h2>
                        <div dangerouslySetInnerHTML={{ __html: data.datoCmsDecouvrirInterra.textePourquoiInterra }} className=""></div>
                    </div>
                </section>

            </article>
            <article className="w-full ">
                <h1 className="text-vert-interra text-4xl mb-10 font-black  text-center">  {data.datoCmsDecouvrirInterra.titreNosProjets} </h1>
                <section className="w-7/12 m-auto md:grid grid-cols-2  gap-10 py-5 md:py-10">
                    <div className="flex flex-col ">
                        <figure className="mb-5">
                            <StaticImage src="../images/pexels-thirdman.jpg" alt="A dinosaur" className="" />
                        </figure>
                        <h2 className="text-2xl text-orange-interra font-black mb-2">Interact</h2>
                        <p>Rencontre collective autour d’une passion commune </p>
                    </div>

                    <div className="flex flex-col ">
                        <figure className="mb-5">
                            <StaticImage src="../images/pexels-thirdman.jpg" alt="A dinosaur" className="" />
                        </figure>
                        <h2 className="text-2xl text-orange-interra font-black mb-2">Duo langue</h2>
                        <p> Mise en relation de deux personnes pour pratiquer la langue française </p>
                    </div>

                    <div className="flex flex-col ">
                        <figure className="mb-5">
                            <StaticImage src="../images/pexels-thirdman.jpg" alt="A dinosaur" className="" />
                        </figure>
                        <h2 className="text-2xl text-orange-interra font-black mb-2">
                            Incubateur inclusif
                        </h2>
                        <p> Accompagnement des primo-arrivant.e.s à la mise en place d’un projet entrepreneurial  </p>
                    </div>

                    <div className="flex flex-col ">
                        <figure className="mb-5">
                            <StaticImage src="../images/pexels-thirdman.jpg" alt="A dinosaur" className="" />
                        </figure>
                        <h2 className="text-2xl text-orange-interra mb-2 font-black">Formation Interculturelle</h2>
                        <p>


                            Faites appel à nous pour organiser une formation à l’interculturalité !
                        </p>
                    </div>



                </section>

            </article>
            <article className="w-7/12 py-5 md:py-20    m-auto">
                <h1 className="font-black text-4xl mb-10 text-vert-interra  bg-white text-center">  {data.datoCmsDecouvrirInterra.titreNosPartenaires} </h1>
                <figure className="">
                    <StaticImage src="../images/pexels-thirdman.jpg" alt="A dinosaur" className="" />
                </figure>
            </article>
        </div>
    </Layout>
)

export const query = graphql`
  {
    datoCmsDecouvrirInterra {
      deuxConstats
      imageAdn {
        gatsbyImageData
      }
      imageLien {
        gatsbyImageData
      }
      imageMission {
        gatsbyImageData
      }
      imageValeurs {
        gatsbyImageData
      }
      imagesNosPartenaires {
        gatsbyImageData
      }
      deuxConstats
      listeDeuxConstats
      listeLien
      listeValeurs
      texteDeuxConstatsDeux
      texteDeuxConstatsUn
      texteLien
      texteNosMissions
      textePourquoiInterra
      texteQuiSommesNous
      titreAdn
      titreLien
      titreNosMissions
      titreNosPartenaires
      titreNosProjets
      titrePourquoiInterra
      titreQuiSommesNous
      titreValeurs
      phraseLien
    }
  }
`


export default DecouvrirPage

