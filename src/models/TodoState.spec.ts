import TodoState from '@/models/TodoState';

describe('Todo State Title Test', () => {
  it('state 0 should be "Todo"', () => {
    expect(new TodoState(0, []).title).toBe('Todo');
  });
  it('state 1 should be "Progress"', () => {
    expect(new TodoState(1, []).title).toBe('Progress');
  });
  it('state 2 should be "Done"', () => {
    expect(new TodoState(2, []).title).toBe('Done');
  });
  it('state other should be throw error', () => {
    const state = new TodoState(4, []);
    expect(() => state.title).toThrowError('Illegal state');
  });
});
