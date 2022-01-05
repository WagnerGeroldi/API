import { Category } from "../model/category";
import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoryRepository";

class PostgresCategoriesRepository implements ICategoryRepository {


    findByName(name: string): Category {
        throw new Error("Method not implemented.");
    }
    list(): Category[] {
        throw new Error("Method not implemented.");
    }
    create({name, description}: ICreateCategoryDTO): void {
        throw new Error("Method not implemented.");
    }




}


export { PostgresCategoriesRepository }