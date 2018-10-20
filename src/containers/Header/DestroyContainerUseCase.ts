import ErrorService from '@/services/ErrorService'

export interface IDestroyContainerUseCase {
  errorService: ErrorService
}

export default class DestroyContainerUseCase implements BaseUseCase {
  errorService: ErrorService

  constructor({ errorService }: IDestroyContainerUseCase) {
    this.errorService = errorService
  }

  async execute() {
    try {
    } catch (error) {
      await this.errorService.handle(error)
      throw new Error(error)
    }
  }
}
