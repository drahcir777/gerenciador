import { PrismaFarmRepository } from "@/repositories/prisma/prisma-farm-repository";
import { UpdateFarmUseCase } from "@/use-cases/farm/update-farm-use-case";

export function makeUpdateFarmUseCase() {
  const farmRepository = new PrismaFarmRepository();
  const useCase = new UpdateFarmUseCase(farmRepository);

  return useCase;
}
