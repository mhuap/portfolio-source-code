import React from 'react';
import Project from '../../components/project';

function QueerOrientation() {
  return (
    <Project
      title='Queer Orientation'
      date='SEP.2019'
      description={`Print and digital promotional materials for Queer Orientation - an annual week of
        LGBTQ-focused programming across all three U of T campuses.`}
      team='N/A'
      role="Graphic designer"
      context="Work for the University of Toronto - Sexual & Gender Diversity Office"
      techs={["Poster design", "Vector art", "Adobe Illustrator"]}
      featuredimage='gallery/qo.jpg'
      award=''
    >

      <h3>Background</h3>

      <p>Queer Orientation (QO) is an annual week of LGBTQ-focused programming across all three
      campuses of U of T during the last week of September. QO is an opportunity for new and
      returning students, staff, and faculty to make connections, engage in activities and have
      discussions related to LGBTQ+ communities.</p>

      <p>The Sexual & Gender Diversity Office (SGDO) approached me to hire me to design the campaign for
      the 2020 Queer Orientation. This included a general poster design that could also be used
      for campus-specific info cards.</p>

      <h3>The Process</h3>

      <h4>1. The Brief</h4>

      <p>I started by having conversations with the SGDO officers regarding themes for 2019's QO.
      2019 was a big anniversary year at UofT - including the 20th anniversary of the SGDO, the 50th
      anniversary of LGBTOUT, and the 100th anniversary of Hart House. For this reason, the SGDO wanted to
      focus on the concepts of heritage and queer history, while keeping the bright and colorful from previous
      years' designs.</p>

      <h4>2. Sketches</h4>

      <p>My first task was to come up with 3 options for design directions.</p>
      <ul>
        <li>Locations of heritage: emphasis on physical locations (buildings) with queer significance</li>
        <li>Boost forward: minimalist and abstract - symbolizing a "boost" from the past into the future</li>
        <li>Lively Doodles: amalgamation of doodles of random objects with a rainbow overlay</li>
      </ul>

    </Project>
  )
}

export default QueerOrientation;
