export default class Category {
  public constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly slug: string,
    public readonly color: string
  ) {}
}
