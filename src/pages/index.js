import React from "react";
import '../components/index.css';
import Template from '../components/template';
import Software from '../components/software';

function IndexPage(props) {
  return (
    <Template software={true}>
      <Software />
    </Template>
  );
}

export default IndexPage
