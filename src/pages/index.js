import React from "react";
// import { Link } from "gatsby"
// {this.props.children.key === '/' ? <Software /> : this.props.children}

// import SEO from "../components/seo";
import '../components/index.css';
// import Home from '../components/Home';
// import Projects from '../components/Projects';
import Template from '../components/template';
import Software from '../components/software';

function IndexPage(props) {
  return (
    <Template software={true}>
      <Software />
    </Template>
  );
}

// class IndexPage extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   getInitVal = () => {
//     if (this.props.children && this.props.children.key) {
//       return !this.props.children.key.includes('design');
//     }
//
//     return true;
//   }
//
//   render() {
//     return (
//       <>
//         <SEO title="Home" keywords={[`portfolio`, `website`, `huapaya`, `homepage`]} />
//         <Home />
//         <Projects initVal={this.getInitVal()}>
//           {this.props.children && this.props.children.key === "/"? <Software /> : this.props.children}
//         </Projects>
//       </>
//     );
//   }
// }

export default IndexPage
