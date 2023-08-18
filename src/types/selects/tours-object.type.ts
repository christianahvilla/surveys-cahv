export type IUserSelectListApiResponse = Array<UserData>;

export interface UserData {
  key: string;
  label: any;
}

export interface IUserSelectDTO {
  key: string;
  label: string;
}

export type IUsersSelectDTO = Array<IUserSelectDTO>;
