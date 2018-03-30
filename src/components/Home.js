import React from "react";
import {rule} from '../nano';

const className = rule({
  pad: '20px'
});

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className={className}>
        <h4>Hello world!</h4>
      </div>
    );
  }
}
