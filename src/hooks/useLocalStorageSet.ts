import { useState } from "react";

interface UseLocalStorageProps {
  key: string;
}

export const useLocalStorageSet = <T>({ key }: UseLocalStorageProps) => {
  const [storedValue, setStoredValue] = useState<T | null>(() => {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  });

  const setValue = (value: T) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return { value: storedValue, setValue };
};
