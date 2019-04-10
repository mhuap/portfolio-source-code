import React from 'react'

function Function ({ name, subtitle, children }) {
  return (
    <div className='function'>
        <h3>{name} {'{'}</h3>
        {subtitle ? <Subtitle text={subtitle}/> : ""}
        {children}
        <h3>{'}'}</h3>
    </div>
  );
};

function Subtitle ({text}) {
  return (
    <div className='subtitle'>
      <div className='mobileSub'>
        <p className='slashes'> {'//'}</p>
        <p className='subText'>
           {text}
        </p>
        <div className='highlight'></div>
      </div>
    </div>
  );
};

export default Function;
