export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | number;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout as number);
    timeout = setTimeout(() => func(...args), wait);
  };
};
