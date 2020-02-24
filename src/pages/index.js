import React from "react";
import '../components/index.css';
import PageTemplate from '../components/PageTemplate';
import Home from '../components/Home';
import Featured from '../components/featured';
import SoftwareContent from '../components/softwareContent';
import Design from '../components/design';
import SEO from "../components/seo";

function IndexPage(props) {
  return (
    <>
      <SEO title="" keywords={[`portfolio`, `website`, `huapaya`, `development`]} />
      <PageTemplate>
        <Home />
        <Featured />
        <SoftwareContent />
        <Design />
      </PageTemplate>
    </>
  );
}

export default IndexPage
