import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Vineyard } from "../../HarvestProducer/models/Vineyard";
import { vineyardData } from "../../seed/vineyardsData";
import { HarvestProducer } from "../../HarvestProducer/models/HarvestProducer";

class Server {
  private app: Application;
  private port: string;
  private harvestProducer: HarvestProducer;
  private vineYards: Array<Vineyard>;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "9000";
    this.vineYards = this.createVineyard();
    this.harvestProducer = new HarvestProducer();
    this.middlewares();
    this.routes();
  }

  createVineyard() {
    const vineYard1 = new Vineyard(
      vineyardData[0].location,
      vineyardData[0].grapeVariety
    );
    return [vineYard1];
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.get("/api/harvest/", (req: Request, res: Response) => {
      this.harvestProducer.harvestGrapes(this.vineYards[0]);
      this.harvestProducer.generateGrapes(this.vineYards[0]);
      res.json({
        Completado: "Secuencia de cosecha completada",
        Grapes: this.harvestProducer.captureGrapes(this.vineYards[0]),
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto " + this.port);
    });
  }
}

export default Server;
