export interface ErrorWithMessage {
  message: string;
}

export interface ErrorWithErrors {
  errors: string[];
}

export const isErrorWithMessage = (error: any): error is ErrorWithMessage =>
  typeof error?.message === "string";

export const isErrorWithErrors = (error: any): error is ErrorWithErrors =>
  Array.isArray(error?.errors);

export const getError = (error: unknown): string | null => {
  if (isErrorWithErrors(error)) {
    return error.errors.join("\n");
  } else if (isErrorWithMessage(error)) {
    return error.message;
  }

  return null;
};
