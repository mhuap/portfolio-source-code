import React from 'react';
import Function from '../components/function';
import Template from '../components/template';
import SoftwareContent from '../components/software'

function Software(){
  return (
    <Template software={true}>
      <SoftwareContent />
    </Template>
  );
}

export default Software;
