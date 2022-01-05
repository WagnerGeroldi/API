import { Category } from "../../model/category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}

  execute(): Category[] {
    const all = this.categoriesRepository.list();

    return all
  }
}

export { ListCategoriesUseCase };
