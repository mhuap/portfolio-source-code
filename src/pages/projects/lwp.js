import React from 'react';
import Project from '../../components/project';

import brand from '../../images/lwp/lwpbrand.jpg';
import step1a from '../../images/lwp/p1@2x.jpg';
import step1b from '../../images/lwp/p12@2x.jpg';
import sketches from '../../images/lwp/sketches.jpg';
import final from '../../images/lwp/final options@2x.jpg';

function Lwp() {
  return (
    <Project
      title='Lead With Pride'
      date='06.2019'
      description={`Logo design for Lead with Pride - an annual leadership conference for LGBTQ+ students.`}
      team='N/A'
      role="Graphic designer"
      context="Work for the University of Toronto - Sexual & Gender Diversity Office"
      techs={["Logo design", "Branding", "Adobe Illustrator"]}
      featuredimage='gallery/lwp.jpg'
      award=''
    >

      <figure>
        <img src={brand} alt='Lead with Pride branding'/>
        <figcaption>Lead with Pride logo contexts</figcaption>
      </figure>

      <h3>Background</h3>

      <p>
      <i>Lead with Pride</i> and <i>Lead with Pride: Executive Jumpstart</i> are annual leadership
      conferences for LGBTQ+ students at the University of Toronto. <i>Lead with Pride</i>
      began in 2009 as an opportunity for student leaders to gain skills to make a positive
      impact at U of T and beyond. Today, the conference has grown to be a series that is aimed
      at supporting current student leaders, as well as expanding and diversifying LGBTQ+ student
      leadership on all three campuses.
      </p>

      <p>The goals of <i>Lead with Pride</i> are to provide students with the opportunity to engage in
      vital conversations around LGBTQ+ leadership; develop an understanding of anti-oppression
      work; practice self-care; and learn tangible, hands-on skills to support student organizing
      and leadership.
      </p>

      <p>The <i>Lead With Pride</i> co-chairs asked me to design a logo
      in time for their sixth annual <i><a href='https://www.facebook.com/events/329467091289285/'>Lead with Pride: Executive Jumpstart conference</a></i>.
      The logo was also used for the <i>Lead With Pride</i> February conference.
      </p>

      <h3>The Process</h3>

      <h4>1. The Brief</h4>

      <p>I started by having conversations with the co-chairs about the values
      and principles they wanted to emphasize this year, and any aesthetic direction they had in mind.
      </p>

      <p>Key concepts:</p>
      <ul>
        <li>Inner strength</li>
        <li>Transferable skills</li>
        <li>Succeeding in queer spaces and outside</li>
        <li>Networking - meeting people, connecting</li>
        <li>Community contributes to individual and vice versa</li>
      </ul>

      <p>Key aesthetic traits:</p>
      <ul>
        <li>Bold</li>
        <li>Fun</li>
        <li>Professional</li>
        <li>Queer (purple/pink/rainbow)</li>
      </ul>

      <h4>2. Moodboards + Colors</h4>

      <p>Firstly, I reminded the clients of imagery ideas they had brought up in conversation,
      and presented a collection of existing conference logos for context.</p>

      <p>Then, I offered 2 options for aesthetic directions</p>
      <ol>
        <li>Curvy hand-lettering: more fun and playful.</li>
        <li>Modern & Bold: Geometric in nature - more professional but can be made fun by use of bold, saturated colors. </li>
      </ol>

      <figure>
        <img src={step1a} alt='Moodboards'/>
        <figcaption>Moodboard and reference slides I presented to the client</figcaption>
      </figure>

      <p>I presented 2 options for color palettes:</p>
      <ol>
        <li>Lively Rainbow: bright, neon, from a range of hues - based on the visual relationship between rainbows and queerness.</li>
        <li>Bi lighting: Bisexual colors - based on the modern trend of <a href="https://en.wikipedia.org/wiki/Bisexual_lighting">bisexual lighting</a> used in film and television.</li>
      </ol>

      <figure>
        <img src={step1b} alt='Color palettes'/>
        <figcaption>Color palette slides I presented to the client.</figcaption>
      </figure>


      <h4>3. Sketches</h4>

      <figure>
        <img src={sketches} alt='Collage of sketches'/>
        <figcaption>Collage of sketches I presented to the client. Digital sketch was made
        by editing an image of the circular lines I found online.</figcaption>
      </figure>

      <h4>4. Final Options</h4>

      <figure>
        <img src={final} alt='Final 4 logo options'/>
        <figcaption>Final 4 options based on 2 sketches. Bottom right was the client's pick.</figcaption>
      </figure>



    </Project>
  )
}

export default Lwp;
