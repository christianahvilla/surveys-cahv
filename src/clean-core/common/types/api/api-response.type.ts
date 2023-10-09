/**
 * Any API response be it REST or localstorage
 * MUST return this type
 */
export type ApiResponse<T> =
  | {
      data: T;
      type: 'success';
    }
  | {
      error: Error;
      type: 'error';
    }
  | {
      error: Error;
      type: 'not-authorized';
    };
