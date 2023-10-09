import { LogoutUseCase } from './interfaces/usecase'
import type { LogoutOutput, LogoutRepository } from './interfaces/repository'

export class LogoutInteractor extends LogoutUseCase {
  constructor(private readonly repository: LogoutRepository) {
    super()
  }

  protected async _execute(): Promise<LogoutOutput> {
    const response = await this.repository.logoutUser()

    if (response.type === 'error') {
      /* We need to define the expected behavior here */
      throw response.error
    } else if (response.type === 'not-authorized') {
      /* We need to define the expected behavior here */
      throw response.error
    } else {
      return response.data
    }
  }
}
