import type { Usecase } from '~clean/usecase/abstract.usecase';

/* TODO: ${target.name} won't work since generic Usecase does'nt have
 * the name, but specific usecase (which extends Usecase) does
 */
export function logUsecase(
  target: Usecase<any, any> & { name: string },
  _key: 'execute',
  descriptor: PropertyDescriptor,
): any {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Executing ${target.name} with arguments ${JSON.stringify(args)}`);
    try {
      return originalMethod.apply(this, args);
    } catch (err) {
      console.error(`[Failed to execute]: ${target.name} Usecase`, err);
    }
  };
  return descriptor;
}
