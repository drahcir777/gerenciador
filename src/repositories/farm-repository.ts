import { Farm, Prisma } from "@prisma/client";

export interface FarmRepository {
  create(data: Prisma.FarmCreateInput): Promise<Farm>;
  findMany(): Promise<Farm[]>;
  findById(id: string): Promise<Farm | null>;
  update(id: string, data: Prisma.FarmUpdateInput): Promise<Farm>;
  delete(id: string): Promise<void>;
}
