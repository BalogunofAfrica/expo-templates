import { HttpError } from "@/utils/classes";

export function throwApiException(
  message: string,
  name: string,
  status?: string | number,
) {
  const error = new HttpError({
    message,
    name,
    status,
  });

  throw error;
}
