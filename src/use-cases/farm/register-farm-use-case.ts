import { FarmRepository } from "@/repositories/farm-repository";
import { Prisma } from "@prisma/client";

export class RegisterFarmUseCase {
  constructor(private farmRepository: FarmRepository) {}

  async execute(data: Prisma.FarmCreateInput) {
    const farm = await this.farmRepository.create(data);
    return { farm };
  }
}
