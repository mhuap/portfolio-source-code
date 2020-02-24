import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import '../components/index.css';

library.add(fab)

function SocialFooter() {
  return (
    <footer>
      <a href="https://github.com/mhuap"><FontAwesomeIcon icon={["fab", "github"]} /></a>
      <a href="https://twitter.com/matias_huapaya"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
      <a href="https://www.linkedin.com/in/matias-huapaya-2b50a0129/"><FontAwesomeIcon icon={["fab", "linkedin-in"]} /></a>
    </footer>
  );
}

export default SocialFooter;
