import React from 'react';
import Template from '../components/template';
import SoftwareContent from '../components/softwareContent'

function Software(){
  return (
    <Template software={true}>
      <SoftwareContent />
    </Template>
  );
}

export default Software;
