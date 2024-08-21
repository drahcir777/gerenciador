import { FarmRepository } from "@/repositories/farm-repository";
import { Prisma } from "@prisma/client";

export class UpdateFarmUseCase {
  constructor(private farmRepository: FarmRepository) {}

  async execute(id: string, data: Prisma.FarmUpdateInput) {
    const farm = await this.farmRepository.update(id, data);
    return { farm };
  }
}
