import { Nullable } from '~clean/common/types/common';
export type IUserSelectListApiResponse = Array<UserData>;

export interface UserData {
  key: string;
  label: any;
}

export interface IUserSelectDTO {
  key: Nullable<string>;
  label: string;
}

export type IUsersSelectDTO = Array<IUserSelectDTO>;
