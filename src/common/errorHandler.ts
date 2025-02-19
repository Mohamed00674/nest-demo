import { IErrorWithMessage } from '@common/types/error/error-catch';
function isErrorWithMessage(error: unknown): error is IErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

export class KnownError extends Error {
  code?: string;

  constructor(message: string, code?: string, name?: string) {
    super(message);

    this.name = name || 'KnownError';
    this.code = code || 'KNOWN__ERROR';
    this.message = message;
  }
}

export const handleCatchBlock = (error: unknown): string => {
  if (error instanceof KnownError) {
    return `(${error.name}:${error.code}) ${String(error.message)}`;
  }

  if (isErrorWithMessage(error)) {
    return error.message;
  }

  return String(error);
};
