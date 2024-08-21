import { PrismaFarmRepository } from "@/repositories/prisma/prisma-farm-repository";
import { FindManyFarmUseCase } from "@/use-cases/farm/find-many-farm-use-case";

export function makeFindManyFarmUseCase() {
  const farmRepository = new PrismaFarmRepository();
  const useCase = new FindManyFarmUseCase(farmRepository);

  return useCase;
}
