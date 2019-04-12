import React from "react";
// import { Link } from "gatsby"
// {this.props.children.key === '/' ? <Software /> : this.props.children}

import SEO from "../components/seo";
import '../components/index.css';
import Home from '../components/Home';
import Projects from '../components/Projects';

function Template(props) {
  return (
    <>
      <SEO title="" keywords={[`portfolio`, `website`, `huapaya`, `homepage`]} />
      <Home />
      <Projects initVal={props.software}>
        {props.children}
      </Projects>
    </>
  );
}

export default Template
