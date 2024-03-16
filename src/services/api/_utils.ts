export function accessStorage<T>(key: string) {
  const storageKey = `ThuanDMT-${key}`;

  return {
    init: (data: Record<string, T>) => {
      const dataJSON = window.localStorage.getItem(storageKey);
      if (!dataJSON) {
        window.localStorage.setItem(storageKey, JSON.stringify(data));
      }
    },

    get: (): Record<string, T> => {
      const dataJSON = window.localStorage.getItem(storageKey);
      if (!dataJSON) {
        throw new Error(`Storage with key '${storageKey}' Storage must be initialized before using.`);
      }

      return JSON.parse(dataJSON);
    },

    set: (data: Record<string, T>) => {
      window.localStorage.setItem(storageKey, JSON.stringify(data));
    },
  };
}

export function accessSession<T>(key: string) {
  const sessionKey = `ThuanDMT-${key}`;

  return {
    get: (): T | null => {
      const dataJSON = window.sessionStorage.getItem(sessionKey);
      if (!dataJSON) {
        return null;
      }

      return JSON.parse(dataJSON);
    },

    set: (data: T | null) => {
      window.sessionStorage.setItem(sessionKey, JSON.stringify(data));
    },
  };
}

export function generateUID(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export function generateAvatar(): string {
  const min = 1;
  const max = 18;
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  return `/images/avatar/${randomNumber}.png`;
}
