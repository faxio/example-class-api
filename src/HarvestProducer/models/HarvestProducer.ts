import { Grape } from "./Grape";
import { Vineyard } from "./Vineyard";
export class HarvestProducer {
  private grapes: Grape[] = [];

  constructor() {}

  harvestGrapes(vineyard: Vineyard) {
    console.log(
      "ejecución del getGrapVarieties-> ",
      vineyard.getGrapeVarieties()
    );
    console.log("ejecución del getLocation-> ", vineyard.getLocation());
  }

  captureGrapes(vineyard: Vineyard) {
    return this.grapes;
  }

  generateGrapes(vineyard: Vineyard) {
    console.log("generando nuevas uvas...");
    for (let i = 0; i < vineyard.getGrapeVarieties().length; i++) {
      this.grapes.push(new Grape(vineyard.getGrapeVarieties()[i], 0));
    }
  }
}
