import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"


const incubateurPage = ({ data }) => (
    <Layout className="">
        <Seo title="Incubateur Inclusif" />
        <div className="w-12/12">
            <article className="w-10/12 md:w-7/12 mt-10   m-auto">
                <h1 className="font-black text-4xl mb-20 text-vert-interra  bg-white text-center"> {data.datoCmsIncubateurInclusif.titre}</h1>
                <section className="md:grid grid-cols-2 mb-10  gap-x-10 gap-y-20">

                    <figure>
                        <GatsbyImage image={data.datoCmsIncubateurInclusif.image.gatsbyImageData} alt={data.datoCmsIncubateurInclusif.image.alt} className="h-full " />

                    </figure>
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: data.datoCmsIncubateurInclusif.textePartieUn }} className="paragraphe"></div>
                    </div>

                </section>
                <div dangerouslySetInnerHTML={{ __html: data.datoCmsIncubateurInclusif.textePartieDeux }} className="paragraphe"></div>
                <button className=" mt-5 text-white font-black  p-1 px-2  bg-orange-interra hover:opacity-80 rounded"> Je veux soutenir le projet </button>

            </article>
        </div>
    </Layout>
)

export const query = graphql`
{
    datoCmsIncubateurInclusif {
      image {
        gatsbyImageData
        alt
      }
      textePartieDeux
      textePartieUn
      titre
      titreIncubateurInclusif
    }
  }

`



export default incubateurPage

