export type ApiSuccess = { success: boolean };

export type ApiError = {
  statusCode: number;
  message: string;
  error: Error;
};
