import { PrismaFarmRepository } from "@/repositories/prisma/prisma-farm-repository";
import { DeleteFarmUseCase } from "@/use-cases/farm/delete-farm-use-case";

export function makeDeleteFarmUseCase() {
  const farmRepository = new PrismaFarmRepository();
  const useCase = new DeleteFarmUseCase(farmRepository);

  return useCase;
}
