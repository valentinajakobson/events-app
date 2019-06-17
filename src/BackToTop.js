import React, { Component } from 'react';
import './BackToTop.css';

class BackToTop extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       visible: 'none'
//     }
//     this.changeVisibility = this.changeVisibility.bind(this)
//   }
//
//   changeState = () => {
//    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
//      this.setState({
//        visible: 'block',
//      })
//    }
//   }
//
//   componentDidMount() {
//     window.scrollTo(0, 0)
//   }
//
//   changeVisibility = () => {
//     return {display: this.state.visible}
//   }
//
//   render() {
//     return (
//       <div id="back-to-top" style={this.changeVisibility()}></div>
//     );
//   }

  render() {
    return (
      <div className="content-container" onScroll={this.handleScroll} style={{width: '10em', height: '100em'}}>
        Press
      </div>
    )
  }
}
export default BackToTop;
