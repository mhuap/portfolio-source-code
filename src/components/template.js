import React from "react";
// import { Link } from "gatsby"
// {this.props.children.key === '/' ? <Software /> : this.props.children}

import SEO from "../components/seo";
import '../components/index.css';
import Home from '../components/Home';
import Projects from '../components/Projects';
import SocialFooter from '../components/SocialFooter';

function Template(props) {
  return (
    <div className="container">
      <SEO title="" keywords={[`portfolio`, `website`, `huapaya`, `homepage`]} />
      <Home />
      <Projects initVal={props.software}>
        {props.children}
      </Projects>
      <SocialFooter />
    </div>
  );
}

export default Template
