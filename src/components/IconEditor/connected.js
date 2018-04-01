import {connect} from 'react-redux';
import IconEditor from '.';
import {renameIcon, addTag, removeTag, setColor, selectColor, putColor, deleteIcon, createIcon} from '../../actions/icons';
import {historyNext, historyPrev} from '../../actions/history';
import {getIconHistory} from '../../selectors';

const mapStateToProps = (state, props) => {
  let icon = null;

  if (props.uuid) {
    icon = state.icons[props.uuid];
  }

  let color = 'black';

  if (icon) {
    color = icon.colors[icon.colorIndex] || 'black'
  }

  let historyProgress = 1;
  const history = getIconHistory(state, props.uuid);

  if (history) {
    historyProgress = history.index / ((history.list.length - 1) || 1);
  }

  return {
    color,
    icon,
    historyProgress,
  }
};

const mapDispatchToProps = (dispatch, {uuid}) => ({
  onNameChange: (name) => dispatch(renameIcon(uuid, name)),
  onAddTag: (tag) => dispatch(addTag(uuid, tag)),
  onRemoveTag: (tag) => dispatch(removeTag(uuid, tag)),
  onColorChange: (index, color) => dispatch(setColor(uuid, index, color)),
  onColorSelect: (index) => dispatch(selectColor(uuid, index)),
  onPutColor: (x, y, color) => dispatch(putColor(uuid, x, y, color)),
  onDelete: () => dispatch(deleteIcon(uuid)),
  onCreateIcon: () => dispatch(createIcon()),
  onHistoryNext: () => dispatch(historyNext(uuid)),
  onHistoryPrev: () => dispatch(historyPrev(uuid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IconEditor);
