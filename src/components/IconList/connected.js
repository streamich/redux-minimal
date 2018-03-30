import {connect} from 'react-redux';
import IconList from '.';

const mapStateToProps = (state) => {
  return {
    icons: state.icons,
  };
};

export default connect(mapStateToProps)(IconList);