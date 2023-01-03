import Todo from '@/models/Todo';

describe('Todo Test', () => {
  it('abcdefghijklmn should be abcedfg', () => {
    expect(
      new Todo(1, 'タイトル', '2022/11/22', 'abcdefghijklmn').prefixText
    ).toBe('abcdefg');
  });
});
