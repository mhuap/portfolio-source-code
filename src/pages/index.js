import React from "react";
// import { Link } from "gatsby"
// {this.props.children.key === '/' ? <Software /> : this.props.children}

import SEO from "../components/seo";
import '../components/index.css';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Software from '../pages/software';

function IndexPage(props) {
  return (
    <>
      <SEO title="Home" keywords={[`portfolio`, `website`, `huapaya`, `homepage`]} />
      <Home />
      <Projects initVal={!props.children.key.includes('design')}>
        {props.children.key === '/' ? <Software /> : props.children}
      </Projects>
    </>
  );
}

export default IndexPage
