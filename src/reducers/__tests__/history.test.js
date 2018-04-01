import reducer from '../history';
import {historyPush, historyPrev, historyNext} from '../../actions/history';

describe('reducers', () => {
  describe('history', () => {
    it('exists', () => {
      expect(typeof reducer).toBe('function');
    });

    describe('historyPush()', () => {
      it('inserts new history entry', () => {
        const uuid = '123';
        const icon = {
          uuid,
        };
        let state = {};

        state = reducer(state, historyPush(icon));

        expect(state).toEqual({
          [uuid]: {
            index: 0,
            list: [icon]
          }
        });
      });

      it('inserts multiple entries, merges by uuid', () => {
        const icon1 = {uuid: '1', name: 'foo'};
        const icon2 = {uuid: '1', name: 'bar'};
        const icon3 = {uuid: '2', name: 'baz'};
        let state = {};

        state = reducer(state, historyPush(icon1));
        state = reducer(state, historyPush(icon2));
        state = reducer(state, historyPush(icon3));

        expect(state).toEqual({
          '1': {
            index: 1,
            list: [icon1, icon2],
          },
          '2': {
            index: 0,
            list: [icon3],
          }
        });
      });

      it('truncates history if pushing at the middle', () => {
        const icon1 = {uuid: '1', name: 'foo'};
        const icon2 = {uuid: '1', name: 'bar'};
        const icon3 = {uuid: '1', name: 'baz'};
        let state = {};

        state = reducer(state, historyPush(icon1));
        state = reducer(state, historyPush(icon2));

        state['1'].index = 0;

        state = reducer(state, historyPush(icon3));

        expect(state).toEqual({
          '1': {
            index: 1,
            list: [icon1, icon3],
          },
        });
      });

      it('has limit of 50 records', () => {
        let state = {};

        for (let i = 0; i < 100; i++) {
          state = reducer(state, historyPush({
            uuid: '1',
            name: 'foo' + i,
          }));

          expect(state['1'].index).toBe(Math.min(i, 49));
          expect(state['1'].list.length).toBe(Math.min(i + 1, 50));
        }
      });
    });

    describe('historyPrev()', () => {
      it('moves back in history, up to a limit', () => {
        const icon1 = {uuid: '1', name: 'foo'};
        const icon2 = {uuid: '1', name: 'bar'};
        const icon3 = {uuid: '1', name: 'baz'};
        let state = {};

        state = reducer(state, historyPush(icon1));
        state = reducer(state, historyPush(icon2));
        state = reducer(state, historyPush(icon3));

        expect(state['1'].index).toBe(2);
        state = reducer(state, historyPrev('1'));
        expect(state['1'].index).toBe(1);
        state = reducer(state, historyPrev('1'));
        expect(state['1'].index).toBe(0);
        state = reducer(state, historyPrev('1'));
        expect(state['1'].index).toBe(0);
        state = reducer(state, historyPrev('1'));
        expect(state['1'].index).toBe(0);
      });
    });

    describe('historyNext()', () => {
      it('moves forward in history, up to a limit', () => {
        const icon1 = {uuid: '1', name: 'foo'};
        const icon2 = {uuid: '1', name: 'bar'};
        const icon3 = {uuid: '1', name: 'baz'};
        let state = {};

        state = reducer(state, historyPush(icon1));
        state = reducer(state, historyPush(icon2));
        state = reducer(state, historyPush(icon3));

        expect(state['1'].index).toBe(2);
        state = reducer(state, historyPrev('1'));
        expect(state['1'].index).toBe(1);
        state = reducer(state, historyPrev('1'));
        expect(state['1'].index).toBe(0);
        state = reducer(state, historyPrev('1'));
        expect(state['1'].index).toBe(0);
        state = reducer(state, historyPrev('1'));
        expect(state['1'].index).toBe(0);
        state = reducer(state, historyNext('1'));
        expect(state['1'].index).toBe(1);
        state = reducer(state, historyNext('1'));
        expect(state['1'].index).toBe(2);
        state = reducer(state, historyNext('1'));
        expect(state['1'].index).toBe(2);
        state = reducer(state, historyNext('1'));
        expect(state['1'].index).toBe(2);
      });
    });
  })
});