import React from 'react';
import { Link } from "gatsby";

function GalleryPanel({subtitle, src, title, url}) {
  const path = '/projects/' + url;

  return (
    <div className='galleryPanel'>
      <Link className='gallery-img' to={path}>
        <img src={src} alt={title}/>
      </Link>
      <h3><Link to={path}>{title}</Link></h3>
      <div className='subtitle'>
        {subtitle.split("\n").map((i) => {
              return <p className='subline' key={i}>{i}</p>;
          })}
      </div>
    </div>
  );
}

export default GalleryPanel;
