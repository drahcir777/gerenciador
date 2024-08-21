import { FastifyInstance } from "fastify";
import { registerFarmController } from "./register-farm-controller";
import { findManyFarmController } from "./find-many-farm-controller";
import { findByIdFarmController } from "./find-by-id-farm-controller";
import { updateFarmController } from "./update-farm-controller";
import { deleteFarmController } from "./delete-farm-controller";

export async function farmRoutes(app: FastifyInstance) {
  app.post("/farm", registerFarmController);
  app.get("/farm", findManyFarmController);
  app.get("/farm/:id", findByIdFarmController);
  app.patch("/farm/:id", updateFarmController);
  app.delete("/farm/:id", deleteFarmController);
}
