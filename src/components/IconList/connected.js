import {connect} from 'react-redux';
import IconList from '.';

const mapStateToProps = (state) => {
  return {
    activeUuid: state.app.currentIconUuid,
    icons: state.icons,
  };
};

export default connect(mapStateToProps)(IconList);