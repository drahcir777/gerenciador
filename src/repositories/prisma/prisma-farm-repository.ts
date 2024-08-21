import { Prisma, Farm } from "@prisma/client";
import { FarmRepository } from "../farm-repository";
import { prisma } from "../../lib/prisma";

export class PrismaFarmRepository implements FarmRepository {
  async delete(id: string): Promise<void> {
    await prisma.farm.delete({ where: { id } });
  }
  async update(id: string, data: Prisma.FarmUpdateInput): Promise<Farm> {
    const farm = await prisma.farm.update({ where: { id }, data });

    return farm;
  }
  async findById(id: string): Promise<Farm | null> {
    const farm = await prisma.farm.findUnique({ where: { id } });

    return farm;
  }
  async findMany(): Promise<Farm[]> {
    const farm = await prisma.farm.findMany();

    return farm;
  }
  async create(data: Prisma.FarmCreateInput): Promise<Farm> {
    const farm = await prisma.farm.create({ data });

    return farm;
  }
}
