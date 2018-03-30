import reducer from '../app';
import {createIcon} from '../../actions/icons';
import {selectIcon} from '../../actions/app';

describe('reducers', () => {
  describe('app', () => {
    it('exists', () => {
      expect(typeof reducer).toBe('function');
    });

    it('selectIcon() changes current icon', () => {
      let state = {};

      state = reducer(state, selectIcon('abc'));

      expect(state.currentIconUuid).toBe('abc');
    });

    it('createIcon() changes current icon', () => {
      let state = {};
      const createAction = createIcon();

      state = reducer(state, createAction);

      expect(state.currentIconUuid).toBe(createAction.uuid);
    });
  })
});