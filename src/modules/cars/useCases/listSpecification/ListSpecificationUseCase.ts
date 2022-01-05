import { Specification } from "../../model/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";


class ListSpecificationUseCase {
    constructor( private specificationsRepository: ISpecificationRepository) {

    }

    execute(): Specification[] {
    const all = this.specificationsRepository.list()

    return all
    }
}

export { ListSpecificationUseCase }