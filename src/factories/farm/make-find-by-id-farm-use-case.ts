import { PrismaFarmRepository } from "@/repositories/prisma/prisma-farm-repository";
import { FindByIdFarmUseCase } from "@/use-cases/farm/find-by-id-farm-use-case";

export function makeFindByIdFarmUseCase() {
  const farmRepository = new PrismaFarmRepository();
  const useCase = new FindByIdFarmUseCase(farmRepository);

  return useCase;
}
