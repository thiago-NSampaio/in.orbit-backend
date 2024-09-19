import type { FastifyInstance } from "fastify";
import { createGoalController } from "./create-goal";

export async function goalsRoutes(app: FastifyInstance) {
  app.post("/goals", createGoalController);
}
