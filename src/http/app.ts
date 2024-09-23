import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { createGoalRoute } from "./routes/create-goal";
import { getWeekPendingGoalsRoute } from "./routes/get-week-pending-goals";
import { createGoalCompletionRoute } from "./routes/create-goal-completion";
import { getWeekSummaryRoute } from "./routes/get-week-summary";
import fastifyCors from "@fastify/cors";

export const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "*",
});

app.register(createGoalRoute);
app.register(createGoalCompletionRoute);
app.register(getWeekPendingGoalsRoute);
app.register(getWeekSummaryRoute);

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
