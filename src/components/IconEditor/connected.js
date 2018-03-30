import {connect} from 'react-redux';
import IconEditor from '.';

const mapStateToProps = (state, props) => {
  let icon = null;

  if (props.uuid) {
    icon = state.icons[props.uuid];
  }

  return {
    icon
  }
};

export default connect(mapStateToProps)(IconEditor);
