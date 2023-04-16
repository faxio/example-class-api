export class Grape {
  private variety: string;
  private ripeLevel: number;

  constructor(variety: string, ripeLevel: number) {
    this.variety = variety;
    this.ripeLevel = ripeLevel;
  }

  getVariety(): string {
    return this.variety;
  }

  getRipeLevel(): number {
    return this.ripeLevel;
  }
}
