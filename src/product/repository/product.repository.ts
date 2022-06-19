import { Injectable } from '@nestjs/common';

import { BaseRepository } from '@shared/repository';
import { PrismaService } from '@shared/service';

import { Product } from '@models/product/entities';

import { IProductRepository } from '@product/repository';

@Injectable()
export class ProductRepository extends BaseRepository<Product> implements IProductRepository {
  constructor(prisma: PrismaService) {
    super(prisma, 'product');
  }

  async findByIdWithProducts(id: string): Promise<Product> {
    return this.findOne({
      where: { id },
      include: { products: true },
    });
  }
}