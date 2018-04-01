import {connect} from 'react-redux';
import OpenFile from '.';
import {importIcon} from '../../actions/app';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  onIcon: (json) => dispatch(importIcon(json)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OpenFile);
