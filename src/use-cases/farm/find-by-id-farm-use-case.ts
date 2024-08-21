import { FarmRepository } from "@/repositories/farm-repository";

export class FindByIdFarmUseCase {
  constructor(private farmRepository: FarmRepository) {}

  async execute(id: string) {
    const farm = await this.farmRepository.findById(id);
    return { farm };
  }
}
