import React from 'react';
import Project from '../../components/project';
import insta from '../../images/tweet/insta-examples@2x.jpg';

function TweetImg() {
  return (
    <Project
      title='tweet-img'
      date='23.01.2020'
      description={`Web app converts tweets into images with colored backgrounds. Perfect for sharing tweets
        on Instagram.`}
      team='N/A'
      role="Full-stack developer"
      context="Personal project"
      techs={["React", "cheerio.js", "Next.js", "Google Cloud Functions", "html2canvas"]}
      featuredimage='tweetimg.jpg'
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

      <p><strong>Frontend: </strong>I built on Next.js and used html2canvas to
      convert html into a canvas to save as an image. I used axios to make the call to the backend</p>

      <p><strong>Backend: </strong>I used cheerio.js to scrape the tweet from twitter.com
      via Node.js in Google Cloud Functions. I also isolated the exact html elements I needed with cheerio.js.</p>

      <p>I chose to use Next.js out of curiosity for the framework and desire to experiment with it.
      In order to avoid CORS restrictions when web-scraping, I had to handle the webscraping with cheerio.js which
      runs server-side. I wanted to host my site on Github Pages, which only supports hosting static HTML pages,
      so I used Google Cloud Functions to run cheerio.js in a Node.js serverless function.</p>

      <h3>What's Next</h3>

      <p>Currently, I am happy with the deployed version of tweet-img but this is a minimum viable product -
      I have many plans for upcoming features. Not to mention, it only supports <a href='https://github.com/mhuap/tweet-img#tweet-support'>certain kinds of tweets</a> at the moment.</p>

      <p>Future customization features will include backgrounds using gradients or an uploaded image,
      and letting the tweet content stand alone without a white background.</p>

    </Project>
  )
}

export default TweetImg;
