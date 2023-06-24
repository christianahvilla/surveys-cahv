import { ILoginData } from '~clean/api/login';
import { ApiResponse } from '~clean/common';
import {
  LoginByCredentialsInput,
  LoginByCredentialsOutput,
  LoginRepository,
} from '~clean/usecase/login/interfaces/repository';
import { validateObject } from '~clean/utils/validation';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { validationSchema } from './login-validation.repository';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiModes } from '~types/api/api-modes-object.type';

const parseUrls = (url: string, params?: Record<string, string | number>) => {
  const reg = /{([^}]+)}/g;

  if (reg.test(url) && params) {
    return url.replace(reg, (_, group) => {
      return params[group] as string;
    });
  }

  return url;
};

export class RestLoginRepository implements LoginRepository {
  // private readonly name = 'auth-repository';
  private readonly URL = '/auth/login';

  constructor(private readonly requestProvider: any) {}

  protected async validateResponse(res: Response) {
    const data = (await res.json()) as ILoginData;

    const validationResult = validateObject(data, validationSchema);

    if (!validationResult) {
      throw new Error('Bad response');
    }

    return data;
  }

  private async _retrieveLoginData(urlPattern: string, input: LoginByCredentialsInput) {
    const url = parseUrls(urlPattern, input as unknown as Record<string, string | number>);

    // eslint-disable-next-line no-return-await
    return await this.requestProvider.doRequest({
      url,
      method: ApiMethods.POST,
      requireAuth: false,
      mode: ApiModes.CORS,
      body: {
        email: input.email,
        password: input.password,
      },
      useFullUrl: true,
    });
  }

  protected _transformToLoginData(data: ILoginData) {
    return {
      user: data,
    };
  }

  async loginUserByCredentials(
    input: LoginByCredentialsInput,
  ): Promise<ApiResponse<LoginByCredentialsOutput>> {
    try {
      const formattedData = await this._retrieveLoginData(this.URL, {
        ...input,
      })
        .then(this.validateResponse.bind(this))
        .then((data) => {
          const loginData = this._transformToLoginData(data);

          return {
            ...loginData,
          };
        });

      return {
        type: 'success',
        data: formattedData,
      };
    } catch (error) {
      return {
        type: 'error',
        error: error as Error,
      };
    }
  }
}

export const loginRepository = new RestLoginRepository(ApiRequestProviderInstance);
