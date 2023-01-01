/* eslint-disable max-classes-per-file */

export class BaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Base Error";
    this.message = message;
  }
}

type HttpErrorInfo = {
  message: string;
  status?: number | string;
  name?: string;
};
export class HttpError extends BaseError {
  /**
   * http status code
   */
  status: HttpErrorInfo["status"];

  constructor(props: HttpErrorInfo) {
    super(props.message);
    this.name = props.name ?? "Http Error";
    this.status = props.status;
  }
}
