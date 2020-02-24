import React from "react";

function InfoList({name, group}){
  return (
    <div className='project-header--list'>
      <span className='project-header--title'>{name}</span>
      <ul>
        {group.map(item => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function InfoLine({name, text}){
  return (
    <p>
      <span className='project-header--title'>{name}</span>
      {text}
    </p>
  )
}

export { InfoList, InfoLine };
