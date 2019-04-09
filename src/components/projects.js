import React from 'react';
import { Link } from "gatsby";
import './projects.css';
import Template from '../components/template';

function Projects(props) {
  return (
    <>
      <div id='projects'>
        <div id='menu'>
          <div>
            <h2>Here's some of my work as a</h2>
            <h2 className={props.initVal ? 'active' : 'not-active'}>
              <Link
                to="/software/#projects">
                software developer
              </Link>
            </h2>
            <h2 className={props.initVal ? 'not-active' : 'active'}>
              <Link
                to="/design/#projects"
                >
                graphic designer
              </Link>
            </h2>
            <h2>:</h2>
          </div>
          <hr/>
        </div>
        <div id='content'>
          { props.children }
        </div>
      </div>
    </>
  );
}
export default Projects;
