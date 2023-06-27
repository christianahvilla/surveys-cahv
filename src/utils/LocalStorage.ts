export const setLocalStorage = (newValue: any, keyName: string) => {
  try {
    window.localStorage.setItem(
      `${import.meta.env.VITE_APP_NAMESPACE}:${keyName}`,
      JSON.stringify(newValue),
    );
  } catch (err) {
    console.error(err);
  }
};

export const removeFromLocalStorage = (keyName: string): boolean => {
  const value = window.localStorage.getItem(`${import.meta.env.VITE_APP_NAMESPACE}:${keyName}`);

  if (value === 'undefined' || value === null) {
    return false;
  }

  window.localStorage.removeItem(`${import.meta.env.VITE_APP_NAMESPACE}:${keyName}`);

  return true;
};

export const getFromLocalStorage = (keyName: string) => {
  const value = window.localStorage.getItem(`${import.meta.env.VITE_APP_NAMESPACE}:${keyName}`);

  if (value === 'undefined' || value === null) {
    return;
  }
  return JSON.parse(value);
};
