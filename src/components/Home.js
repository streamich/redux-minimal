import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {rule, jsx} from '../nano';
import Sidebar from "./Sidebar";
import Button from "./Button";
import { createIcon } from "../actions/icons";

const className = rule({
  pad: '20px'
});

const SidebarPadding = jsx('div', {
  pad: '24px',
  padb: 0,
});

const Layout = jsx('div', {
  padl: '300px',
});

class Home extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  onNewIconClick = () => {
    this.props.dispatch(createIcon());
  };

  render() {
    return (
      <div className={className}>
        <Sidebar>
          <SidebarPadding>
            <Button primary block onClick={this.onNewIconClick}>Create icon</Button>
          </SidebarPadding>
        </Sidebar>
        <Layout>
          <h4>Hello world!</h4>
        </Layout>
      </div>
    );
  }
}

export default connect()(Home);
