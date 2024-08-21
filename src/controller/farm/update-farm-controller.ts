import { makeUpdateFarmUseCase } from "@/factories/farm/make-update-farm-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function updateFarmController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const idFarmShema = z.object({
    id: z.string(),
  });
  const updateFarmBodySchema = z.object({
    name: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    country: z.string().optional(),
    link: z.string().url().optional(),
    consultantCpf: z.string().optional(),
    livestock: z.string().optional(),
    totalArea: z.number().optional(),
    pastureArea: z.number().optional(),
    animalCount: z.string().optional(),
    latitude: z.number().optional(),
    longitude: z.number().optional(),
  });

  const data = updateFarmBodySchema.parse(request.body);
  const { id } = idFarmShema.parse(request.params);

  const updateFarmUseCase = makeUpdateFarmUseCase();

  const { farm } = await updateFarmUseCase.execute(id, data);

  return reply.status(200).send(farm);
}
