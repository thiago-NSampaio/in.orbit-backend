import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { goalsRoutes } from "./controllers/routes";

export const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(goalsRoutes);

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
