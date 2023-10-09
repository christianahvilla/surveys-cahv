export type TValidationSchema = {
  children?: TValidationSchema[];
  isArray?: boolean;
  isNullable?: boolean;
  name: string;
  type: string;
};

export const validateObject = (obj: any, validationObjects: TValidationSchema[]): boolean => {
  const objKeys = new Set(Object.keys(obj));

  for (const validationObject of validationObjects) {
    if (!objKeys.has(validationObject.name)) {
      console.log('Validation error', validationObject.name, 'is missing');
      return false;
    }
    objKeys.delete(validationObject.name);

    if (validationObject.isArray) {
      return obj[validationObject.name]
        .map((item: any) => {
          return validateObject(item, validationObject.children as any);
        })
        .every((value: boolean) => value === true);
    }
    //  eslint-disable-next-line valid-typeof
    if (
      typeof obj[validationObject.name] !== validationObject.type &&
      !validationObject.isNullable
    ) {
      console.log(
        'Validation error',
        validationObject.name,
        'is not of type',
        validationObject.type,
        'but is',
        typeof obj[validationObject.name],
      );
      return false;
    }

    if (
      validationObject.children &&
      !validateObject(obj[validationObject.name], validationObject.children)
    ) {
      console.log('Validation error', validationObject.name, 'has invalid children');
      return false;
    }
  }

  return objKeys.size === 0;
};
