export class Vineyard {
  private location: string;
  private grapeVariety: Array<string>;

  constructor(location: string, grapeVariety: Array<string>) {
    this.location = location;
    this.grapeVariety = grapeVariety;
  }

  getLocation(): string {
    return this.location;
  }
  getGrapeVarieties(): Array<string> {
    return this.grapeVariety;
  }
}
