import React from 'react';
import Project from '../../components/project';
import logo from '../../images/everwear/nooutlinegreen.png';

function Everwear() {
  return (
    <Project
      title='everwear'
      date='28.01.2020'
      description={`A web-app that suggests sustainable alternatives to clothes the user is already interested in buying.`}
      team='Dhruv Sharma, Andrew So, Emma Wai'
      role="Front-end developer, UX/UI Designer, and graphic designer"
      context="Hackathon project at UofT Hacks VII"
      techs={["Google Cloud Functions", "ReactJS", "Conversational Form", "Node.js", "Puppeteer", "Adobe XD"]}
      featuredimage='everwear.gif'
      award='Best Use of Google Cloud: UofT Hacks'
    >

      <div className='demo'>
        <a href='https://e-wai.github.io/UofTHacksVII/'>Live Demo</a>
        <a href='https://github.com/e-wai/UofTHacksVII'>Github</a>
      </div>

      <h3>Inspiration</h3>

      <p>After looking at the sponsor challenges, we knew we wanted to build a product for social good that was focused on fashion.
      Initially, we discussed outfit picking mechanisms and were interested in using to computer vision to recognize clothing items,
      so we decided to develop a website that would focus on finding ethically-sourced alternatives for clothing - hopefully
      making ethical, sustainable fashion more accessible.</p>

      <h3>Walkthrough</h3>

      <p><strong>Before navigating to everwear: </strong>
      User is shopping online (on any site) and finds an item they would like to purchase.
      User copies image URL of item they want (this can usually be done with a right click on the image).</p>

      <p><strong>On everwear site:</strong></p>
      <ol>
        <li>
          Chatbot
          <ol type="a">
            <li>Prompts user for image URL.</li>
            <li>Asks user if they want to search for the item in the same color as pictured or a different one.</li>
          </ol>
        </li>
        <li>
          Results page
          <ol type="a">
            <li>displays image supplied by user and images similar clothing
            items from sustainable clothing sites (4 results per site).</li>
            <li>Clicking on images takes user to site where they can purchase the item.</li>
          </ol>
        </li>
      </ol>

      <h3>Build</h3>

      <p><strong>Frontend: </strong>We built on ReactJS and used <a href="https://space10-community.github.io/conversational-form/docs/1.0.0/getting-started/">Conversational Form</a> for the chatbot</p>

      <p><strong>Backend: </strong>We used Node.js and Google Cloud Functions for the backend.
      Puppeteer handled scraping images and links from Google custom searches.</p>

      <h3>Brand</h3>
      <figure>
        <img src={logo} alt='everwear logo'/>
        <figcaption>Wordmark I designed using custom typography</figcaption>
      </figure>


    </Project>
  )
}

export default Everwear;
