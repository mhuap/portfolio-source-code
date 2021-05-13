import React from 'react';
import { Link } from "gatsby";
import filler from '../images/filler.jpeg';

// <button onClick={this.toggle.bind(this)}>{'Read ' + (this.state.open ? 'Less' : 'More')}</button>
// <div className={'collapse' + (this.state.open ? '-show' : '')} >
//   {this.props.children}
// </div>

class Function extends React.Component {

  render() {
    const path = '/projects/' + this.props.url;

    return (
      <div className='function'>
        <Link
          className='software-img'
          to={path}>
          <img
            alt={this.props.name}
            src={this.props.src ? this.props.src : filler} />
        </Link>
        <div className='function-text'>
          <h3 className='function-title'>
            <Link to={path}>{this.props.name}</Link>
          </h3>
          <p className='award'>{this.props.award}</p>
          <p className='descriptor'>{this.props.descriptor}</p>

          {this.props.children}

          <Link className='btn' to={path}>Read More</Link>
        </div>
      </div>
    );
  }
}

// class Title extends React.Component {
//   constructor(props){
//     super(props);
//   }
//
//   createHighlight() {
//     const subText = this.props.text.split(" ");
//     const count = subText.length;
//     const highlight = [];
//
//     for (let i = 0; i < count; i++) {
//
//       highlight.push(
//         <span className='highlight' key={i}>
//           <span className={'highlight-text' + (i === count - 1 ? ' highlight-last' : '')}>{subText[i]}</span>
//           <span className={'highlight-color' + (i === 0 ? ' highlight-first' : '')}></span>
//         </span>
//       )
//     }
//
//     return highlight
//   }
//
//   render(){
//     return (
//       <h3 className='function-title'>
//         {this.createHighlight()}
//       </h3>
//     );
//   }
//
// }
// <span className='highlight slashes'>
//   <span className='highlight-text'>{'//'}</span>
//   <span className='highlight-color'></span>
// </span>

export default Function;
