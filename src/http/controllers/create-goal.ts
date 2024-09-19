import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { createGoal } from "../../functions/create-goal";

export async function createGoalController(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const createGoalSchema = z.object({
    title: z.string(),
    desireWeeklyFrequency: z.number().int().min(1).max(7),
  });

  const body = createGoalSchema.parse(req.body);

  try {
    await createGoal({
      title: body.title,
      desireWeeklyFrequency: body.desireWeeklyFrequency,
    });

    reply.status(200).send("Goal create success");
  } catch (e) {
    if (e instanceof z.ZodError) {
      reply.status(400).send({ message: "Validation error", errors: e.errors });
    } else {
      reply.status(500).send({ message: "Internal server error" });
    }
  }
}
