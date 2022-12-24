export default class Todo {
  public constructor(
    public readonly title: string,
    public readonly dateString: string,
    public readonly text: string
  ) {}

  public get prefixText(): string {
    return this.text.substring(0, 7);
  }
}
