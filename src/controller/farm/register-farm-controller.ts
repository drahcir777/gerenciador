import { makeRegisterFarmUseCase } from "@/factories/farm/make-register-farm-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function registerFarmController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const registerFarmBodySchema = z.object({
    name: z.string(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    link: z.string(),
    consultantCpf: z.string(),
    livestock: z.string(),
    totalArea: z.number(),
    pastureArea: z.number(),
    animalCount: z.string(),
    latitude: z.number(),
    longitude: z.number(),
  });

  const data = registerFarmBodySchema.parse(request.body);

  const createFarmUseCase = makeRegisterFarmUseCase();

  const { farm } = await createFarmUseCase.execute(data);

  return reply.status(201).send(farm);
}
