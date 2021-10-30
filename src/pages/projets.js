import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
                                                

const projetsPage = ({ data }) => (
    <Layout className="">
           <Seo title="Projets" />

    </Layout>
)

export const query = graphql`
  {
    allDatoCmsHistoireDe {
      edges {
        node {
          imageAccueil {
            gatsbyImageData( height: 600)
            alt
          }
          nomDeLActivit
          nomDeLaPersonne
          textePageDAccueil
          url
          id
        }
      }
    }
  }`

export default projetsPage

