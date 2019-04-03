import React from 'react'

function Function ({ name, subtitle, children }) {
  return (
    <div className='function'>
        <h3>{name} {'{'}</h3>
        <div>
          {subtitle ? <Subtitle text={subtitle}/> : ""}
          {children}
        </div>
        <h3>{'}'}</h3>
    </div>
  );
};

function Subtitle ({text}) {
  return (
    <p className='subtitle'>{'//'} {text}
      <div className='highlight'></div>
    </p>
  );
};

export default Function;
