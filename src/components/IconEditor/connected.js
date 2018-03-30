import {connect} from 'react-redux';
import IconEditor from '.';
import {renameIcon} from '../../actions/icons';

const mapStateToProps = (state, props) => {
  let icon = null;

  if (props.uuid) {
    icon = state.icons[props.uuid];
  }

  return {
    icon
  }
};

const mapDispatchToProps = (dispatch, {uuid}) => ({
  onNameChange: (name) => dispatch(renameIcon(uuid, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IconEditor);
