import React from 'react';
import withSizes from 'react-sizes';
import face from '../images/full-portrait.png'
// import { Link} from "react-scroll";
import './Home.scss'
// import Projects from './projects.js';
// const isSmallSize = ({ width }) => width < 768;

function Home({ isSmallSize, canUseDOM }) {
  if (!canUseDOM) return null;

  let drawingContent;

  if (isSmallSize) {
    drawingContent =
    <>
      <div id='noP'>
        <img src={face} alt='cartoon drawing of matias'/>
        <div >
          <h2>Hey, I'm</h2>
          <h1>Matias.</h1>
          <h2 id='home-subtitle'>I'm a <a href="#software">software developer</a><br/> + <a href="#design">designer</a>.</h2>
        </div>
      </div>
      <p>
        I build things by focusing on aesthetics and usability,
        and I’m passionate about approaching tech through an anti-oppressive, intersectional lens.
      </p>
    </>;
  } else {
    drawingContent =
    <>
      <img src={face} alt='cartoon drawing of matias'/>
      <div >
        <h2>Hey, I'm</h2>
        <h1>Matias.</h1>
        <h2 id='home-subtitle'>I'm a <a href="#software">software developer</a><br/> + <a href="#design">designer</a>.</h2>
        <p>
          I build things by focusing on aesthetics and usability,
          and I’m passionate about approaching tech through an anti-oppressive, intersectional lens.
        </p>
      </div>
    </>;
  }
  return (
    <div id='home'>
      <div id='drawing'>
        {drawingContent}
      </div>
    </div>
  );
}

const mapSizesToProps = ({ width }) => ({
  canUseDOM: !!width,
  isSmallSize: width < 768,
})

export default withSizes(mapSizesToProps)(Home);
