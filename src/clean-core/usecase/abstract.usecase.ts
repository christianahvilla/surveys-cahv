/**
 * A class representing a Usecase Interceptor.
 * @interface
 * @template InputData - The input data type of the use case.
 * @template OutputData - The output data type of the use case.
 */
interface UsecaseInterceptor<InputData, OutputData> {
  /**
   * An optional method that will be called after executing the use case.
   * @param {OutputData} result - The result of the use case execution.
   * @returns {OutputData | Promise<OutputData>} - The processed result or a promise resolving to the processed result.
   */
  afterExecute?(result: OutputData): OutputData | Promise<OutputData>;

  /**
   * An optional method that will be called before executing the use case.
   * @param {InputData} input - The input data of the use case.
   * @returns {InputData | Promise<InputData>} - The processed input data or a promise resolving to the processed input data.
   */
  beforeExecute?(input: InputData): InputData | Promise<InputData>;
}

/**
 * A base class representing a use case.
 * @abstract
 * @template InputData - The input data type of the use case.
 * @template OutputData - The output data type of the use case.
 */
export abstract class Usecase<InputData, OutputData> {
  /**
   * The name of the use case.
   * @type {string}
   */
  abstract name: string;

  /**
   * A set of use case interceptors.
   * @type {Set<UsecaseInterceptor<InputData, OutputData>>}
   */
  interceptors: Set<UsecaseInterceptor<InputData, OutputData>> = new Set();

  /**
   * Adds one or more interceptors to the use case.
   * @param {(UsecaseInterceptor<InputData, OutputData>|UsecaseInterceptor<InputData, OutputData>[])} interceptorOrInterceptors - An interceptor or an array of interceptors.
   * @returns {this} - The current instance of the use case.
   */
  use(
    interceptorOrInterceptors:
      | UsecaseInterceptor<InputData, OutputData>
      | UsecaseInterceptor<InputData, OutputData>[],
  ): this {
    if (Array.isArray(interceptorOrInterceptors)) {
      for (const interceptor of interceptorOrInterceptors) {
        this.interceptors.add(interceptor);
      }
    } else {
      this.interceptors.add(interceptorOrInterceptors);
    }
    return this;
  }

  /**
   * Executes the use case with the given input data.
   * @param {InputData} input - The input data of the use case.
   * @returns {Promise<OutputData>} - A promise resolving to the output data of the use case.
   */
  async execute(input: InputData): Promise<OutputData> {
    if (this.interceptors.size === 0) {
      return this._execute(input);
    }

    let processedInput = input;
    for (const interceptor of this.interceptors) {
      processedInput = (await interceptor?.beforeExecute?.(processedInput)) ?? processedInput;
    }

    const output = await this._execute(processedInput);

    let processedOutput = output;
    for (const interceptor of this.interceptors) {
      processedOutput = (await interceptor?.afterExecute?.(processedOutput)) ?? processedOutput;
    }

    return processedOutput;
  }

  /**
   * An abstract method that must be implemented by subclasses to execute the use case.
   * @abstract
   * @param {InputData} input - The input data of the use case.
   * @returns {Promise<OutputData>} - A promise resolving to the output data of the use case.
   * @protected
   */
  protected abstract _execute(input: InputData): Promise<OutputData>;
}
