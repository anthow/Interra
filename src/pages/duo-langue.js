import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"


const Duopage = ({ data }) => (
    <Layout className="">
        <Seo title="Duo langue" />
        <div className="w-12/12">
            <article className="w-10/12 md:w-7/12 mt-10   m-auto">
                <h1 className="font-black text-4xl mb-20 text-vert-interra  bg-white text-center"> {data.datoCmsDuoLangue.titre}</h1>
                <section className="md:grid grid-cols-2  gap-x-10 gap-y-20">

                    <video controls className="w-full px-10">
                        <source src={data.datoCmsDuoLangue.videoKSako.video.mp4Url} type="video/mp4" />
                    </video>
                    <div>
                        <h2 className="font-black text-2xl mb-5 text-orange-interra "> {data.datoCmsDuoLangue.titreKSako}</h2>
                        <div dangerouslySetInnerHTML={{ __html: data.datoCmsDuoLangue.texteKSako }} className="mb-10"></div>
                        <h2 className="font-black text-2xl mb-5 text-orange-interra "> {data.datoCmsDuoLangue.titrePourQui}</h2>
                        <div dangerouslySetInnerHTML={{ __html: data.datoCmsDuoLangue.textePourQui }} className=""></div>

                    </div>
                </section>
                <h2 className="font-black text-4xl my-20 text-vert-interra  bg-white text-center"> {data.datoCmsDuoLangue.titreRoleInterra}</h2>
                <section className="md:grid grid-cols-2  gap-x-10 gap-y-20 mb-20">
                    <div dangerouslySetInnerHTML={{ __html: data.datoCmsDuoLangue.listeRoleInterra }} className="bg-vert-interra text-white p-5 font-black list-duo"></div>
                    <figure>
                        <GatsbyImage image={data.datoCmsDuoLangue.imageRoleInterra.gatsbyImageData} alt={data.datoCmsDuoLangue.imageRoleInterra.alt} className="h-full " />

                    </figure>

                </section>
                <section className="md:grid grid-cols-2  gap-x-10 gap-y-20">
                    <div>
                    <h2 className="font-black text-2xl mb-5 text-orange-interra "> {data.datoCmsDuoLangue.titreVotreImplication}</h2>
                    <div dangerouslySetInnerHTML={{ __html: data.datoCmsDuoLangue.texteVotreImplication }} className=""></div>


                    </div>

                    <div>
                    <h2 className="font-black text-2xl mb-5 text-orange-interra "> {data.datoCmsDuoLangue.titreFinDImplication}</h2>
                    <div dangerouslySetInnerHTML={{ __html: data.datoCmsDuoLangue.texteFinDImplication }} className=""></div>

                   

                    </div>
                    
                </section>
                <p className="mt-10 flex items-center space-x-2"> 
                        <span className="text-orange-interra font-black">
                        Outil de communication : </span>
                        
                <StaticImage
                  src="../../../images/whatsapp.png"
                  width={40}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="bouton whatsapp"
                  
                />     whatsapp
                    </p>
            </article>
        </div>
    </Layout>
)

export const query = graphql`
{
    datoCmsDuoLangue {
      imageRoleInterra {
        gatsbyImageData
        alt
      }
      listeRoleInterra
      texteFinDImplication
      texteKSako
      texteOutilDeCommunication
      textePourQui
      titre
      titreFinDImplication
      titreKSako
      titrePourQui
      titreRoleInterra
      titreVotreImplication
      texteVotreImplication
      videoKSako{
          video{
            muxPlaybackId
            frameRate
            duration
            streamingUrl
            thumbnailUrl
            mp4Url
          }
      }
    }
  }

`



export default Duopage

