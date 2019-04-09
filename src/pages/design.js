import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


import steviePoster from '../images/gallery/stevie-poster.png';
// import stevieBanner from '../images/gallery/stevie-banner.png';
import albumCover from '../images/gallery/album-no-text.jpg';
import invisabilities from '../images/gallery/invisabilities.png';
import cssu from '../images/gallery/justtable.png';
import lwp from '../images/gallery/leadwithpride.png';
import self from '../images/gallery/self-portrait.png';
import Template from '../components/template';

// const Design = () => (
//     <StaticQuery
//       query={graphql`
//         query {
//           images: allFile(filter: {relativeDirectory: {eq:"gallery"}}) {
//             edges {
//                 node {
//                   childImageSharp {
//                     sizes(maxWidth: 2000) {
//                       ...GatsbyImageSharpSizes
//                     }
//                   }
//               }
//             }
//           }
//         }
//         `}
//
//       render={data => {data.images.edges.map(node => (
//         <Img
//           key={node.id}
//           title="Photo image"
//           alt="Photo"
//           sizes={node.sizes}
//         />
//       ))}
//       }
//     />
//   )

function Design() {
  return (
    <Template software={false}>
      <div id='design'>
        <div className='gallery-col'>
          <img src={steviePoster} alt='Poster for LGBTOUT'/>
          <img src={cssu} alt='Header for CSSU poster'/>
        </div>
        <div id='mid-col' className='gallery-col'>
          <img src={self} alt='Self-portrait'/>
          <img src={albumCover} alt='original album cover'/>
        </div>
        <div className='gallery-col'>
          <img src={lwp} alt='Lead With Pride'/>
          <img src={invisabilities} alt='Poster for Invisabilities'/>
        </div>
      </div>
    </Template>
  );
}

export default Design;
