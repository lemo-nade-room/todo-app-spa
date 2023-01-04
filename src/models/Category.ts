export default class Category {
  public constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly slug: string,
    public readonly color: number
  ) {}

  public get colorCode(): string {
    switch (this.color) {
      case 1:
        return '#FFE664';
      case 2:
        return '#C0EEEE';
      case 3:
        return '#9DE8C4';
      default:
        return 'black';
    }
  }
}
