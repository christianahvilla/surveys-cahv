import { TValidationSchema } from '~clean/utils/validation';

export const validationSchema: TValidationSchema[] = [
  {
    name: 'id',
    type: 'string',
  },
  {
    name: 'roles',
    type: 'string',
  },
  {
    name: 'username',
    type: 'string',
  },
  {
    name: 'email',
    type: 'string',
  },
  {
    name: 'nombreCompleto',
    type: 'string',
  },
  {
    name: 'celular',
    type: 'string',
  },
  {
    name: 'isActive',
    type: 'boolean',
  },
  {
    name: 'cliente',
    type: 'string',
    isNullable: true,
  },
  {
    name: 'token',
    type: 'string',
  },
];
