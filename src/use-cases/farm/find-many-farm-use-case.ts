import { FarmRepository } from "@/repositories/farm-repository";

export class FindManyFarmUseCase {
  constructor(private farmRepository: FarmRepository) {}

  async execute() {
    const farm = await this.farmRepository.findMany();
    return { farm };
  }
}
