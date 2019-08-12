import React from "react";
import '../components/index.css';
import Template from '../components/template';
import SoftwareContent from '../components/softwareContent';

function IndexPage(props) {
  return (
    <Template software={true}>
      <SoftwareContent />
    </Template>
  );
}

export default IndexPage
