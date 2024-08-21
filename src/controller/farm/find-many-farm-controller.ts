import { makeFindManyFarmUseCase } from "@/factories/farm/make-find-many-farm-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function findManyFarmController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const findManyFarmUseCase = makeFindManyFarmUseCase();

  const { farm } = await findManyFarmUseCase.execute();

  return reply.status(200).send(farm);
}
