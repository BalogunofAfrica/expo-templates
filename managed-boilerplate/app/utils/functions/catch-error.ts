import { AsyncErrorInfo, BaseError } from "../classes";
import { logger } from "./logger";

export const catchError = {
  async catchAsync<T, E extends AsyncErrorInfo>(
    promise: Promise<T>,
  ): Promise<[T, null] | [null, E]> {
    try {
      const data = await promise;
      return [data, null];
    } catch (error_) {
      const error = error_ as E;
      logger.log("catch async error", error?.message);
      return [null, error];
    }
  },

  catchSync<T, E extends BaseError>(
    expression: () => T,
  ): [T, null] | [null, E] {
    try {
      const data = expression();
      return [data, null];
    } catch (error_) {
      const error = error_ as E;
      logger.log("catch sync error", error?.message);
      return [null, error];
    }
  },
};
