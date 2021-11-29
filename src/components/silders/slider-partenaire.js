
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
}


const Slidepartenaire = () => (
  <StaticQuery
    query={graphql`
    {
      datoCmsDecouvrirInterra {
        imagesNosPartenaires {
          gatsbyImageData
        }
      }
    }
  
  
  
    `}
    render={data => 
      <Slider {...settings} className="overflow-hidden w-min">
        
                
        {data.datoCmsDecouvrirInterra.imagesNosPartenaires.map(pic => 
                
                <GatsbyImage image={pic.gatsbyImageData} className="" />
            
            )}
        
    </Slider>    }
  ></StaticQuery>
)

export default Slidepartenaire
