/* eslint-disable max-classes-per-file */

export interface ErrorInfo {
  cause?: unknown;
  message: string;
  name?: string;
  stack?: string;
}
export class BaseError extends Error implements ErrorInfo {
  constructor(props: ErrorInfo) {
    super(props.message);
    this.name = "Base Error";
  }
}

export interface AsyncErrorInfo extends ErrorInfo {
  status?: number | string;
}
export class HttpError extends BaseError implements AsyncErrorInfo {
  /**
   * http status code
   */
  status: AsyncErrorInfo["status"];

  constructor(props: AsyncErrorInfo) {
    super(props);
    this.name = props.name ?? "Http Error";
    this.status = props.status;
  }
}
