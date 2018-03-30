import reducer from '../icons';
import {createIcon, renameIcon, addTag, removeTag} from '../../actions/icons';

describe('reducers', () => {
  describe('icons', () => {
    it('exists', () => {
      expect(typeof reducer).toBe('function');
    });

    it('default state is empty', () => {
      const state = reducer(null, {type: 'INIT'});

      expect(typeof state).toBe('object');
      expect(state).not.toBe(null);
    });

    describe('createIcon()', () => {
      it('add new icon', () => {
        const action = createIcon();
        const state = reducer({}, action);
        const icon = state[action.uuid];

        expect(typeof icon).toBe('object');
        expect(typeof icon.uuid).toBe('string');
        expect(icon.uuid.length > 3).toBe(true);
        expect(typeof icon.name).toBe('string');
        expect(icon.tags).toEqual({});
        expect(icon.pixels).toEqual({});
        expect(icon.colors instanceof Array).toBe(true);
      });
    });

    describe('renameIcon()', () => {
      it('does nothing if icon does not exist', () => {
        const state = reducer({}, renameIcon('123', 'new name'));
      });

      it('changes icons name', () => {
        let state = {};
        const createAction = createIcon();

        state = reducer(state, createAction);
        state = reducer(state, renameIcon(createAction.uuid, 'foobar'));

        expect(state[createAction.uuid].name).toBe('foobar');
      });
    });

    describe('addTag()', () => {
      it('does nothing if icon does not exist', () => {
        const state = reducer({}, addTag('123', 'sometag'));
      });

      it('adds tag to icon', () => {
        let state = {};
        const createAction = createIcon();

        state = reducer(state, createAction);
        state = reducer(state, addTag(createAction.uuid, 'supertag'));

        expect(state[createAction.uuid].tags).toEqual({
          supertag: true
        });

        state = reducer(state, addTag(createAction.uuid, 'supertag2'));

        expect(state[createAction.uuid].tags).toEqual({
          supertag: true,
          supertag2: true,
        });
      });
    });

    describe('removeTag()', () => {
      it('does nothing if icon does not exist', () => {
        const state = reducer({}, removeTag('123', 'sometag'));
      });

      it('removes tag', () => {
        let state = {};
        const createAction = createIcon();

        state = reducer(state, createAction);
        state = reducer(state, addTag(createAction.uuid, 'supertag'));

        expect(state[createAction.uuid].tags).toEqual({
          supertag: true
        });

        state = reducer(state, removeTag(createAction.uuid, 'supertag'));

        expect(state[createAction.uuid].tags).toEqual({});
      });
    });
  })
});