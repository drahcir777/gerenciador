import { makeDeleteFarmUseCase } from "@/factories/farm/make-delete-farm-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deleteFarmController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const deleteFarmShema = z.object({
    id: z.string(),
  });

  const { id } = deleteFarmShema.parse(request.params);

  const deleteFarmUseCase = makeDeleteFarmUseCase();

  await deleteFarmUseCase.execute(id);

  return reply.status(204).send();
}
