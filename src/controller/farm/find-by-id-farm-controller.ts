import { makeFindByIdFarmUseCase } from "@/factories/farm/make-find-by-id-farm-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function findByIdFarmController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const findByIdQuerySchema = z.object({
    id: z.string(),
  });

  const { id } = findByIdQuerySchema.parse(request.params);

  const findFarmByIdUseCase = makeFindByIdFarmUseCase();

  const { farm } = await findFarmByIdUseCase.execute(id);

  return reply.status(200).send(farm);
}
