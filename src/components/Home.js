import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {rule, jsx} from '../nano';
import Sidebar from "./Sidebar";
import Button from "./Button";
import {createIcon} from "../actions/icons";
import IconList from './IconList/connected';
import IconEditor from './IconEditor';
import {selectIcon} from "../actions/app";

const className = rule({
  pad: '20px'
});

const SidebarPadding = jsx('div', {
  pad: '24px',
  bdb: '1px solid #ddd',
});

const Layout = jsx('div', {
  padl: '300px',
});

class Home extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    currentIconUuid: PropTypes.string.isRequired,
  };

  onNewIconClick = () => {
    this.props.dispatch(createIcon());
  };

  onIconSelect = (uuid) => {
    this.props.dispatch(selectIcon(uuid));
  };

  render() {
    return (
      <div className={className}>
        <Sidebar>
          <SidebarPadding>
            <Button primary block onClick={this.onNewIconClick}>Create icon</Button>
          </SidebarPadding>
          <IconList onSelect={this.onIconSelect} />
        </Sidebar>
        <Layout>
          <IconEditor uuid={this.props.currentIconUuid} />
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.app;

export default connect(mapStateToProps)(Home);
