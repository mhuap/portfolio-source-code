import React from "react";
import { Link } from "gatsby";

import '../components/index.css';
import SocialFooter from '../components/SocialFooter';

class PageTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    }
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }

  render() {
    const { isExpanded } = this.state;

    return (
      <>
      <div className="container">
        <nav id="top-bar">
          <h2>
            <Link to="/">
              MATIAS<br/>HUAPAYA
            </Link>
          </h2>

          <div id="nav-links">
            <ul id="menu" className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
              <li id="menu-about">
                <Link to='/about'>
                  about_me
                </Link>
              </li>
              <li id="menu-resume">
                <a href='https://drive.google.com/file/d/1JAX1C2G02xuYuxuripNENvbYk7sqhqEd/view?usp=sharing'>
                  resume
                </a>
              </li>
            </ul>
            <button className="hamburger" onClick={e => this.handleToggle(e)} onKeyDown={e => this.handleToggle(e)}>{this.state.isExpanded ? '✕' : '☰'}</button>
          </div>
        </nav>

        <div id='page'>
          {this.props.children}
        </div>

      </div>
      <SocialFooter />
      </>
    );
  }
}

export default PageTemplate
