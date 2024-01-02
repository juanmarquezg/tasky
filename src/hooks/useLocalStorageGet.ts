import { useState } from "react";

interface UseLocalStorageGetProps {
  key: string;
}

export const useLocalStorageGet = <T>({ key }: UseLocalStorageGetProps) => {
  const [storedValue] = useState<T | null>(() => {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  });

  return { value: storedValue };
};
