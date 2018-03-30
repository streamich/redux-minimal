import React from "react";
import {rule, jsx} from '../nano';
import Sidebar from "./Sidebar";
import Button from "./Button";

const className = rule({
  pad: '20px'
});

const SidebarPadding = jsx('div', {
  pad: '24px',
  padb: 0,
});

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className={className}>
        <Sidebar>
          <SidebarPadding>
            <Button primary block>Create icon</Button>
          </SidebarPadding>
        </Sidebar>
        <h4>Hello world!</h4>
      </div>
    );
  }
}
