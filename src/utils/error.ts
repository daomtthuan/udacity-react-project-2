export function getErrorMessage(error: unknown): string {
  const message = error instanceof Error ? error.message : null;
  if (!message) {
    return 'An unexpected error occurred';
  }

  return message;
}
