import { PrismaFarmRepository } from "@/repositories/prisma/prisma-farm-repository";
import { RegisterFarmUseCase } from "@/use-cases/farm/register-farm-use-case";

export function makeRegisterFarmUseCase() {
  const farmRepository = new PrismaFarmRepository();
  const useCase = new RegisterFarmUseCase(farmRepository);

  return useCase;
}
