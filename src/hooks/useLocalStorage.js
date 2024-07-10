import React, { useEffect, useState } from 'react';

const PREFIX = 'codepen-clone-';

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    try {
      const jsonValue = localStorage.getItem(prefixedKey);
      if (jsonValue !== null) {
        return JSON.parse(jsonValue);
      } else {
        if (typeof initialValue === 'function') {
          return initialValue();
        } else {
          return initialValue;
        }
      }
    } catch (error) {
      console.error(`Error parsing JSON stored value for key ${prefixedKey}:`, error);
      // If error occurs, return initialValue as a fallback
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(prefixedKey, JSON.stringify(value));
    } catch (error) {
      console.error(`Error storing JSON value for key ${prefixedKey}:`, error);
    }
  }, [prefixedKey, value]);

  return [value, setValue];
}
