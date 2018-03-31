import {connect} from 'react-redux';
import IconEditor from '.';
import {renameIcon, addTag, removeTag, setColor} from '../../actions/icons';

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
  onAddTag: (tag) => dispatch(addTag(uuid, tag)),
  onRemoveTag: (tag) => dispatch(removeTag(uuid, tag)),
  onColorChange: (index, color) => dispatch(setColor(uuid, index, color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IconEditor);
