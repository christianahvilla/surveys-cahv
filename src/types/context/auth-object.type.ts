import { LoginEntity } from '~clean/entity';

export type UserAuthData = LoginEntity;

export interface AuthContextType {
  authData: UserAuthData;
  login: (authData: UserAuthData, callback?: VoidFunction) => Promise<void>;
  logout: (callback?: VoidFunction) => Promise<void>;
}
