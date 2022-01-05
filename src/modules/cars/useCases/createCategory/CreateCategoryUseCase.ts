import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Erro: Categoria já existe");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
