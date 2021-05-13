import React from 'react';
import Project from '../../components/project';
import insta from '../../images/tweet/insta-examples@2x.jpg';
import tweetImg from '../../images/tweetimg.jpg';

function TweetImg() {
  return (
    <Project
      title='tweet-img'
      date='JAN.2020'
      description={`Web app converts tweets into images with colored backgrounds. Perfect for sharing tweets
        on Instagram.`}
      team='N/A'
      role="Full-stack developer"
      context="Personal project"
      techs={["React", "Twitter API", "Next.js", "Google Cloud Functions", "html2canvas"]}
      featuredimage={tweetImg}
      award=''
    >

      <div className='demo'>
        <a href='https://mhuap.github.io/tweet-img/'>Visit Site</a>
        <a href='https://github.com/mhuap/tweet-img'>Github</a>
      </div>

      <h3>Inspiration</h3>

      <p>I noticed a trend of posting tweets to instagram with a colored background.
      Usually, these are made with screenshots of tweets, but in some cases further edits are made
      (e.g. adding a border to tweet section, or deleting the tweet background entirely).
      </p>

      <figure>
        <img src={insta} alt='Collage of instagram posts of tweets.'/>
        <figcaption>Examples of Instagram posts of tweets</figcaption>
      </figure>

      <p>I searched for an existing automated way to do this without using some sort
      of external graphic-design program, and I found <a href="http://www.twimmage.com">Twimmage</a>.
      Twimmage has a lot of the features I was looking for in terms of the backgrounds,
      but it didn't handle the tweet content very well - the tweet box size is always fixed irregardless of
      tweet length, and it does not support images or emojis.
      </p>

      <p>So I decided to make my own.</p>

      <h3>Build</h3>

      <p>Initially, I scraped the tweet data from Twitter using cheerio.js via Google Cloud Functions.
      At some point Twitter obfuscated their CSS, which made scraping impossible. In a way it all worked out
      for the better because I made a Developer account and got access to the official Twitter API, which gave
      me more flexibility.</p>

      <p>The current tech stack looks like this:</p>
      <p><strong>Frontend: </strong>I built on Next.js and used html2canvas to
      convert html into a canvas to save as an image. I used axios to make the call to the backend. Also I
      created a custom colorpicker using <a href="https://casesandberg.github.io/react-color/">React Color</a>.</p>

      <p><strong>Backend: </strong>I used Next.js's serverless functions to create an HTTPs request between the
      front-end and Twitter's API.
      </p>

      <p>I chose to use Next.js out of curiosity for the framework and desire to experiment with it. I ended up deploying with Vercel
      and the whole experience was very smooth and convenient seeing as they're made to be used together.</p>

      <h3>What's Next</h3>

      <p>I just finished working on a good amount of features for this project. It has truly grown into more than just a
      minimum viable product - so much so that my friends and I use it regularly. I keep track of all upcoming changes
      on <a href='https://github.com/mhuap/tweet-img/projects/3'>github</a>.</p>

      <p>Current background customization features include using a solid color,
      an uploaded image, or an image from a URL.</p>

    </Project>
  )
}

export default TweetImg;
