import React from 'react';
import { InfoList } from "../components/projectInfo.js";

class ToggleList extends React.Component {
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
      <div className='toggleList'>
        <button onClick={e => this.handleToggle(e)} onKeyDown={e => this.handleToggle(e)}><h2><span className={'arrow ' + (isExpanded ? 'active' : '')}>&#9654;</span> {this.props.title}</h2></button>

        <div className={'listgroup ' + (isExpanded ? 'active' : '')}>
          <InfoList name={this.props.name1} group={this.props.list1}/>
          <InfoList name={this.props.name2} group={this.props.list2}/>
          <InfoList name={this.props.name3} group={this.props.list3}/>
        </div>
      </div>
    );
  }
}

export default ToggleList;
