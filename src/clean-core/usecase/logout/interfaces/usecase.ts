import { Usecase } from '../../abstract.usecase'
import type { LogoutOutput } from './repository'
export abstract class LogoutUseCase extends Usecase<void, LogoutOutput> {
  readonly name = 'Logout'
}
