import {connect} from 'react-redux';
import IconEditor from '.';
import {renameIcon, addTag, removeTag, setColor, selectColor, putColor} from '../../actions/icons';

const mapStateToProps = (state, props) => {
  let icon = null;

  if (props.uuid) {
    icon = state.icons[props.uuid];
  }

  let color = 'black';

  if (icon) {
    color = icon.colors[icon.colorIndex] || 'black'
  }

  return {
    color,
    icon
  }
};

const mapDispatchToProps = (dispatch, {uuid}) => ({
  onNameChange: (name) => dispatch(renameIcon(uuid, name)),
  onAddTag: (tag) => dispatch(addTag(uuid, tag)),
  onRemoveTag: (tag) => dispatch(removeTag(uuid, tag)),
  onColorChange: (index, color) => dispatch(setColor(uuid, index, color)),
  onColorSelect: (index) => dispatch(selectColor(uuid, index)),
  onPutColor: (x, y, color) => dispatch(putColor(uuid, x, y, color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IconEditor);
