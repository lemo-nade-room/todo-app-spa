import Todo from '@/models/Todo';

export default class TodoState {
  public constructor(
    public readonly state: number,
    public readonly todos: readonly Todo[]
  ) {}

  public get title(): string {
    switch (this.state) {
      case 0:
        return 'Todo';
      case 1:
        return 'Progress';
      case 2:
        return 'Done';
      default:
        throw Error('Illegal state');
    }
  }
}
