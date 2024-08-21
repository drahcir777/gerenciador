import { FarmRepository } from "@/repositories/farm-repository";

export class DeleteFarmUseCase {
  constructor(private farmRepository: FarmRepository) {}

  async execute(id: string) {
    await this.farmRepository.delete(id);

    return;
  }
}
