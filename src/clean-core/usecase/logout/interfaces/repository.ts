import type { ApiResponse } from '@poc/clean-core/common/types/api/api-response.type'

export interface LogoutOutput {
  message: string
}

export abstract class LogoutRepository {
  abstract logoutUser(): Promise<ApiResponse<LogoutOutput>>
}
