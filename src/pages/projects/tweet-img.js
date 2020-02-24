import React from 'react';
import Project from '../../components/project';

function TweetImg() {
  return (
    <Project
      title='tweet-img'
      date='23.01.2020'
      description={`Web app converts tweets into images with colored backgrounds. Perfect for sharing tweets on Instagram.`}
      team='N/A'
      role="Full-stack developer"
      context="Personal project"
      techs={["React", "cheerio.js", "Next.js", "Google Cloud Functions", "html2canvas"]}
      featuredimage='tweetimg.jpg'
      award=''
    >

      <p>More info coming soon!</p>

    </Project>
  )
}

export default TweetImg;
