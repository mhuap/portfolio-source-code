import React from 'react';
import { Link } from "gatsby";
import './projects.css';
import Template from '../components/template';

class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      change: this.props.initVal
    }
    this.toggleSoftwareActive = this.toggleSoftwareActive.bind(this);
  }

  toggleSoftwareActive() {
    const currState = this.state.change;
    this.setState({ change: !currState });
  }

  render() {
    return (
      <>
        <div id='projects'>
          <div id='menu'>
            <div>
              <h2>Here's some of my work as a</h2>
              <h2 className={this.props.initVal ? 'active' : 'not-active'}>
                <Link
                  to="/software/#projects">
                  software developer
                </Link>
              </h2>
              <h2 className={this.props.initVal ? 'not-active' : 'active'}>
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
            { this.props.children }
          </div>
        </div>
      </>
    );
  }
}

// class Projects extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       change: this.props.initVal
//     }
//     this.toggleSoftwareActive = this.toggleSoftwareActive.bind(this);
//   }
//
//   toggleSoftwareActive() {
//     const currState = this.state.change;
//     this.setState({ change: !currState });
//   }
//
//   render() {
//     return (
//       <>
//         <div id='projects'>
//           <div id='menu'>
//             <div>
//               <h2>Here's some of my work as a</h2>
//               <h2 className={this.state.change ? 'active' : 'not-active'}>
//                 <Link
//                   onClick={this.state.change ? '' : this.toggleSoftwareActive}
//                   to="/software/#projects">
//                   software developer
//                 </Link>
//               </h2>
//               <h2 className={this.state.change ? 'not-active' : 'active'}>
//                 <Link
//                   to="/design/#projects"
//                   onClick={this.state.change ? this.toggleSoftwareActive : ''}>
//                   graphic designer
//                 </Link>
//               </h2>
//               <h2>:</h2>
//             </div>
//             <hr/>
//           </div>
//           <div id='content'>
//             { this.props.children }
//           </div>
//         </div>
//       </>
//     );
//   }
// }

export default Projects;
